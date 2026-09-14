"use client";

import { EMAILS } from "../../lib/constants";
import { useLocale } from "../../lib/locale";
import {
  ConsentBox,
  Field,
  FormStatus,
  SubmitButton,
  fieldClass,
  useFormSubmit,
} from "./FormPrimitives";

export function ContactForm() {
  const { t } = useLocale();
  const { status, onSubmit } = useFormSubmit("form-general-contact");
  const f = t.forms.general;

  return (
    <form onSubmit={onSubmit} className="grid gap-4">
      <input type="hidden" name="destination" value={EMAILS.general} />
      <Field id="fullName" label={f.name} required>
        <input id="fullName" name="fullName" required className={fieldClass} />
      </Field>
      <div className="grid gap-4 md:grid-cols-2">
        <Field id="email" label={f.email} required>
          <input id="email" name="email" type="email" required className={fieldClass} />
        </Field>
        <Field id="phone" label={f.phone} required>
          <input id="phone" name="phone" type="tel" required className={fieldClass} />
        </Field>
      </div>
      <Field id="category" label={f.category} required>
        <select id="category" name="category" required className={fieldClass} defaultValue="">
          <option value="" disabled>
            {t.common.selectInquiry}
          </option>
          {t.forms.options.inquiry.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      </Field>
      <Field id="message" label={f.message} required>
        <textarea id="message" name="message" required rows={5} className={fieldClass} />
      </Field>
      <ConsentBox id="dpa" label={t.common.dpaConsent} required />
      <FormStatus status={status === "submitting" ? "idle" : status} />
      <SubmitButton label={t.contact.formSubmit} pending={status === "submitting"} />
    </form>
  );
}
