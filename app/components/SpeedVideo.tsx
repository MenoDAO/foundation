"use client";

import { useEffect, useMemo, useRef, useState, type ReactNode } from "react";
import type { FoundationPlaybackRate } from "../lib/foundation-site";

const RATES: FoundationPlaybackRate[] = [0.5, 0.75, 1, 1.25, 1.5, 2];

export type SpeedVideoLabels = {
  video: string;
  play: string;
  pause: string;
  mute: string;
  unmute: string;
  speed: string;
};

type SpeedVideoProps = {
  src: string;
  poster?: string | null;
  playbackRate?: FoundationPlaybackRate;
  autoplay?: boolean;
  muted?: boolean;
  loop?: boolean;
  labels: SpeedVideoLabels;
  className?: string;
};

type Embed =
  | { type: "file"; src: string }
  | { type: "youtube" | "vimeo"; src: string };

function getEmbed(raw: string, autoplay: boolean, muted: boolean, loop: boolean): Embed {
  try {
    const url = new URL(raw);
    const host = url.hostname.replace(/^www\./, "").toLowerCase();

    if (host === "youtu.be" || host.endsWith("youtube.com")) {
      const id =
        host === "youtu.be"
          ? url.pathname.slice(1).split("/")[0]
          : url.pathname.startsWith("/shorts/")
            ? url.pathname.split("/")[2]
            : url.pathname.startsWith("/embed/")
              ? url.pathname.split("/")[2]
              : url.searchParams.get("v");
      if (!id) return { type: "file", src: raw };
      const params = new URLSearchParams({
        autoplay: autoplay ? "1" : "0",
        mute: muted ? "1" : "0",
        controls: "1",
        playsinline: "1",
        rel: "0",
        modestbranding: "1",
      });
      if (loop) {
        params.set("loop", "1");
        params.set("playlist", id);
      }
      return { type: "youtube", src: `https://www.youtube.com/embed/${id}?${params}` };
    }

    if (host === "vimeo.com" || host.endsWith(".vimeo.com")) {
      const id = url.pathname.split("/").filter(Boolean).pop();
      if (!id || !/^\d+$/.test(id)) return { type: "file", src: raw };
      const params = new URLSearchParams({
        autoplay: autoplay ? "1" : "0",
        muted: muted ? "1" : "0",
        loop: loop ? "1" : "0",
        playsinline: "1",
        title: "0",
        byline: "0",
      });
      return { type: "vimeo", src: `https://player.vimeo.com/video/${id}?${params}` };
    }

    return { type: "file", src: raw };
  } catch {
    return { type: "file", src: raw };
  }
}

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    if (typeof window.matchMedia !== "function") return;
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(query.matches);
    const onChange = (event: MediaQueryListEvent) => setReduced(event.matches);
    query.addEventListener?.("change", onChange);
    return () => query.removeEventListener?.("change", onChange);
  }, []);
  return reduced;
}

export function SpeedVideo({
  src,
  poster,
  playbackRate = 1,
  autoplay = true,
  muted = true,
  loop = true,
  labels,
  className = "",
}: SpeedVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const inView = useRef(true);
  const [playing, setPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(muted);
  const reducedMotion = usePrefersReducedMotion();
  const shouldAutoplay = autoplay && !reducedMotion;

  const embed = useMemo(
    () => getEmbed(src, shouldAutoplay, isMuted, loop),
    [src, shouldAutoplay, isMuted, loop],
  );

  useEffect(() => {
    setIsMuted(muted);
  }, [muted, src]);

  const [rate, setRate] = useState<FoundationPlaybackRate>(playbackRate);

  useEffect(() => {
    setRate(playbackRate);
    const video = videoRef.current;
    if (video) video.playbackRate = playbackRate;
  }, [playbackRate, src]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || embed.type !== "file") return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        inView.current = Boolean(entry?.isIntersecting);
        if (!inView.current) {
          video.pause();
        } else if (shouldAutoplay) {
          void video.play().catch(() => undefined);
        }
      },
      { threshold: 0.25 },
    );
    observer.observe(video);
    return () => observer.disconnect();
  }, [embed.type, shouldAutoplay, src]);

  useEffect(() => {
    const onVisibility = () => {
      const video = videoRef.current;
      if (!video || embed.type !== "file") return;
      if (document.hidden) {
        video.pause();
      } else if (shouldAutoplay && inView.current) {
        void video.play().catch(() => undefined);
      }
    };
    document.addEventListener("visibilitychange", onVisibility);
    return () => document.removeEventListener("visibilitychange", onVisibility);
  }, [embed.type, shouldAutoplay, src]);

  const cycleRate = () => {
    const index = RATES.indexOf(rate);
    const next = RATES[(index + 1) % RATES.length] || 1;
    setRate(next);
    const video = videoRef.current;
    if (video) video.playbackRate = next;
  };

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) void video.play().catch(() => undefined);
    else video.pause();
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = !video.muted;
    setIsMuted(video.muted);
  };

  return (
    <div
      className={`group relative overflow-hidden bg-navy-deep ${className}`}
      role={embed.type === "file" ? undefined : "region"}
      aria-label={embed.type === "file" ? undefined : labels.video}
    >
      {embed.type === "file" ? (
        <video
          key={src}
          ref={videoRef}
          src={embed.src}
          poster={poster || undefined}
          autoPlay={shouldAutoplay}
          muted={isMuted}
          loop={loop}
          playsInline
          preload="metadata"
          aria-label={labels.video}
          className="h-full w-full object-cover"
          onPlay={() => setPlaying(true)}
          onPause={() => setPlaying(false)}
          onLoadedMetadata={(event) => {
            event.currentTarget.playbackRate = playbackRate;
          }}
        />
      ) : (
        <iframe
          key={embed.src}
          src={embed.src}
          title={labels.video}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          loading="lazy"
          className="absolute inset-0 h-full w-full border-0"
        />
      )}

      {embed.type === "file" && !playing ? (
        <button
          type="button"
          onClick={togglePlay}
          className="absolute inset-0 flex items-center justify-center bg-navy-deep/25 transition-colors hover:bg-navy-deep/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-white"
          aria-label={labels.play}
        >
          <span className="flex h-16 w-16 items-center justify-center rounded-full border border-white/70 bg-white/15 text-white backdrop-blur-sm">
            <PlayIcon />
          </span>
        </button>
      ) : null}

      {embed.type === "file" ? (
        <div className="absolute bottom-3 right-3 flex items-center gap-1.5">
          <VideoControl label={playing ? labels.pause : labels.play} onClick={togglePlay}>
            {playing ? <PauseIcon /> : <PlayIcon small />}
          </VideoControl>
          <VideoControl label={isMuted ? labels.unmute : labels.mute} onClick={toggleMute}>
            {isMuted ? <MutedIcon /> : <SoundIcon />}
          </VideoControl>
          <button
            type="button"
            onClick={cycleRate}
            aria-label={labels.speed}
            title={labels.speed}
            className="rounded-full border border-white/40 bg-navy-deep/65 px-2.5 py-1 text-[11px] font-semibold tabular-nums text-white backdrop-blur-sm transition-colors hover:bg-navy-deep/85 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            {rate}×
          </button>
        </div>
      ) : null}
    </div>
  );
}

function VideoControl({
  label,
  onClick,
  children,
}: {
  label: string;
  onClick: () => void;
  children: ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      title={label}
      className="flex h-8 w-8 items-center justify-center rounded-full border border-white/40 bg-navy-deep/65 text-white backdrop-blur-sm transition-colors hover:bg-navy-deep/85 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
    >
      {children}
    </button>
  );
}

function PlayIcon({ small }: { small?: boolean }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden
      fill="currentColor"
      className={small ? "h-3.5 w-3.5 translate-x-px" : "h-6 w-6 translate-x-px"}
    >
      <path d="M8 5v14l11-7z" />
    </svg>
  );
}

function PauseIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden fill="currentColor" className="h-3.5 w-3.5">
      <path d="M7 5h3.5v14H7zm6.5 0H17v14h-3.5z" />
    </svg>
  );
}

function SoundIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden fill="currentColor" className="h-3.5 w-3.5">
      <path d="M4 9v6h4l5 4V5L8 9H4zm11.5 3a3.5 3.5 0 0 0-1.8-3.06v6.12A3.5 3.5 0 0 0 15.5 12z" />
    </svg>
  );
}

function MutedIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden fill="currentColor" className="h-3.5 w-3.5">
      <path d="M4 9v6h4l5 4V5L8 9H4zm12.6 3 2.2-2.2-1.4-1.4-2.2 2.2-2.2-2.2-1.4 1.4 2.2 2.2-2.2 2.2 1.4 1.4 2.2-2.2 2.2 2.2 1.4-1.4z" />
    </svg>
  );
}
