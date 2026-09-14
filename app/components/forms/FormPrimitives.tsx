"use client";

import { useState, type FormEvent, type ReactNode } from "react";
import { useLocale } from "../../lib/locale";

export function Field({
  id,
  label,
  required,
  optional,
  children,
}: {
  id: string;
  label: string;
  required?: boolean;
  optional?: boolean;
  children: ReactNode;
}) {
  const { t } = useLocale();

  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-sm font-medium text-navy">
        {label}
        {required ? (
          <span className="text-clinical"> *</span>
        ) : optional ? (
          <span className="font-normal text-slate"> ({t.common.optional})</span>
        ) : null}
      </label>
      {children}
    </div>
  );
}

export const fieldClass =
  "w-full rounded-xl border border-[#D8DCEB]/80 bg-white px-3 py-2.5 text-base text-ink outline-none ring-navy/20 placeholder:text-muted focus:border-clinical focus:ring-2";

export function ConsentBox({
  id,
  label,
  required,
}: {
  id: string;
  label: string;
  required?: boolean;
}) {
  return (
    <label className="flex gap-3 rounded-2xl border border-[#D8DCEB]/60 bg-card px-4 py-3 text-sm leading-relaxed text-slate">
      <input
        id={id}
        name={id}
        type="checkbox"
        required={required}
        className="mt-1 h-4 w-4 shrink-0 accent-navy"
      />
      <span>
        {label}
        {required ? <span className="text-clinical"> *</span> : null}
      </span>
    </label>
  );
}

export function FormStatus({
  status,
}: {
  status: "idle" | "success" | "error";
}) {
  const { t } = useLocale();

  if (status === "success") {
    return (
      <p className="rounded-xl border border-clinical/20 bg-clinical/10 px-4 py-3 text-sm text-navy" role="status">
        {t.common.submitSuccess}
      </p>
    );
  }
  if (status === "error") {
    return (
      <p className="rounded-xl border border-gold/40 bg-gold/10 px-4 py-3 text-sm text-ink" role="alert">
        {t.common.submitError}
      </p>
    );
  }
  return null;
}

export function useFormSubmit(formId: string) {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    data.set("formId", formId);

    setStatus("submitting");
    try {
      const res = await fetch("/api/forms", {
        method: "POST",
        body: data,
      });
      if (!res.ok) throw new Error("submit failed");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return { status, onSubmit };
}

export function SubmitButton({
  label,
  pending,
}: {
  label: string;
  pending: boolean;
}) {
  const { t } = useLocale();

  return (
    <button
      type="submit"
      disabled={pending}
      className="inline-flex items-center justify-center rounded-xl bg-navy px-5 py-3 text-sm font-semibold text-white disabled:opacity-60"
    >
      {pending ? t.common.submitting : label}
    </button>
  );
}
