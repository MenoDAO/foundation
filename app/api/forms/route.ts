import { NextResponse } from "next/server";
import { getFoundationApiUrl } from "../../lib/constants";

const FORMS = new Set([
  "form-school-intake",
  "form-volunteer-intake",
  "form-facility-inquiry",
  "form-general-contact",
]);

function apiBase(): string | null {
  const fromEnv =
    process.env.API_URL?.trim().replace(/\/$/, "") ||
    process.env.NEXT_PUBLIC_API_URL?.trim().replace(/\/$/, "") ||
    getFoundationApiUrl();
  return fromEnv || null;
}

export async function POST(request: Request) {
  try {
    const form = await request.formData();
    const formId = String(form.get("formId") || "");

    if (!FORMS.has(formId)) {
      return NextResponse.json({ ok: false, error: "Unknown form" }, { status: 400 });
    }

    const fields: Record<string, string | string[]> = {};
    for (const [key, value] of form.entries()) {
      if (key === "formId" || typeof value !== "string") continue;
      const existing = fields[key];
      if (existing) {
        fields[key] = Array.isArray(existing) ? [...existing, value] : [existing, value];
      } else {
        fields[key] = value;
      }
    }

    const backend = apiBase();
    if (!backend) {
      return NextResponse.json(
        { ok: false, error: "Submission could not be stored." },
        { status: 503 },
      );
    }

    const res = await fetch(`${backend}/public/foundation/inquiries`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ formId, fields }),
      cache: "no-store",
    });

    const data = (await res.json().catch(() => null)) as
      | { ok?: boolean; id?: string; message?: string }
      | null;

    if (!res.ok) {
      return NextResponse.json(
        { ok: false, error: "Submission could not be stored." },
        { status: res.status >= 400 && res.status < 500 ? res.status : 502 },
      );
    }

    return NextResponse.json({ ok: true, formId, id: data?.id });
  } catch {
    return NextResponse.json(
      { ok: false, error: "Submission could not be stored." },
      { status: 502 },
    );
  }
}
