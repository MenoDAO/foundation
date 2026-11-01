# Field photography

- `hero/gallery-01.webp` … `hero/gallery-16.webp` — Tabasamu outreach carousel.
  The home hero lists them in `app/content/hero-images.ts`.

## Replacing the hero photography

The hero serves **one image at a time** (plus the next one preloaded) through
`next/image`, so the initial page weight stays small no matter how large the
gallery grows. The photo is mounted whole — the plate uses `object-contain`,
so nothing is cropped or cut. Do not pre-resize images or crop variants by hand.

1. Put approved originals (JPG/PNG/WebP/TIFF) in `media/hero-source/`.
   Landscape, well lit, ideally **1600 px or wider**. The folder is gitignored.
   (Export iPhone HEIC files to JPG first.)
2. Run:

   ```bash
   npm run hero:media
   ```

   This auto-orients each photo, keeps its original aspect ratio, writes a
   WebP master (max 1600 px) to `public/images/hero/`, and regenerates the
   inline blur placeholders in `app/content/hero-blur.generated.ts`.
3. Copy the printed manifest lines into `app/content/hero-images.ts`, replacing
   the old entries, and write real `alt` text for every frame.
4. Delete the replaced masters from `public/images/hero/` so the folder matches
   the manifest, then run `npm run build`.

`next/image` then serves AVIF/WebP at the exact rendered width, caches at the
edge, and only the visible slide plus the upcoming one is downloaded.

Prefer landscape frames of a similar ratio (roughly 3:2 to 4:3). Portrait or
very wide images are still shown whole, but they will leave matte space inside
the plate.

Replace only with authentic outreach photographs. No clinical trauma or
distress imagery.
