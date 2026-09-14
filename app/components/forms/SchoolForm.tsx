"use client";

import { WhatsAppLink } from "../WhatsAppLink";
import { useLocale } from "../../lib/locale";
import {
  ConsentBox,
  Field,
  FormStatus,
  SubmitButton,
  fieldClass,
  useFormSubmit,
} from "./FormPrimitives";

export function SchoolForm() {
  const { t } = useLocale();
  const { status, onSubmit } = useFormSubmit("form-school-intake");
  const f = t.forms.school;

  return (
    <form onSubmit={onSubmit} className="grid gap-4" noValidate={false}>
      <Field id="institution" label={f.institution} required>
        <input id="institution" name="institution" required className={fieldClass} />
      </Field>
      <Field id="county" label={f.county} required>
        <select id="county" name="county" required className={fieldClass} defaultValue="">
          <option value="" disabled>
            {t.common.selectCounty}
          </option>
          {t.forms.options.counties.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      </Field>
      <div className="grid gap-4 md:grid-cols-2">
        <Field id="contact" label={f.contact} required>
          <input id="contact" name="contact" required className={fieldClass} />
        </Field>
        <Field id="role" label={f.role} required>
          <input id="role" name="role" required className={fieldClass} />
        </Field>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <Field id="whatsapp" label={f.whatsapp} required>
          <input id="whatsapp" name="whatsapp" type="tel" required className={fieldClass} />
        </Field>
        <Field id="email" label={f.email} optional>
          <input id="email" name="email" type="email" className={fieldClass} />
        </Field>
      </div>
      <Field id="population" label={f.population} required>
        <input
          id="population"
          name="population"
          type="number"
          min={1}
          required
          className={fieldClass}
        />
      </Field>
      <fieldset>
        <legend className="mb-2 text-sm font-medium text-navy">{f.ages}</legend>
        <div className="grid grid-cols-2 gap-2 md:grid-cols-4">
          {t.forms.options.ages.map((opt) => (
            <label key={opt.value} className="flex items-center gap-2 text-sm text-slate">
              <input type="checkbox" name="ages" value={opt.value} className="accent-navy" />
              {opt.label}
            </label>
          ))}
        </div>
      </fieldset>
      <Field id="timing" label={f.timing} required>
        <input id="timing" name="timing" required className={fieldClass} />
      </Field>
      <ConsentBox
        id="safeguarding"
        label={t.common.safeguardingConsent}
        required
      />
      <ConsentBox id="dpa" label={t.common.dpaConsent} required />
      <FormStatus status={status === "submitting" ? "idle" : status} />
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <SubmitButton label={t.involved.schoolsSubmit} pending={status === "submitting"} />
        <WhatsAppLink className="text-sm font-medium text-navy">
          {t.involved.whatsappBook}
        </WhatsAppLink>
      </div>
    </form>
  );
}
