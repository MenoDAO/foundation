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

export function FacilityForm() {
  const { t } = useLocale();
  const { status, onSubmit } = useFormSubmit("form-facility-inquiry");
  const f = t.forms.facility;

  return (
    <form onSubmit={onSubmit} className="grid gap-4">
      {/* Do not list any clinic name beyond Mikindani Hospital Dental Unit. */}
      <Field id="facilityName" label={f.name} required>
        <input id="facilityName" name="facilityName" required className={fieldClass} />
      </Field>
      <Field id="location" label={f.location} required>
        <input id="location" name="location" required className={fieldClass} />
      </Field>
      <Field id="accreditation" label={f.accreditation} required>
        <input
          id="accreditation"
          name="accreditation"
          required
          className={fieldClass}
          placeholder="e.g. KMPDC license no."
        />
      </Field>
      <Field id="director" label={f.director} required>
        <input id="director" name="director" required className={fieldClass} />
      </Field>
      <div className="grid gap-4 md:grid-cols-2">
        <Field id="classification" label={f.classification} required>
          <select
            id="classification"
            name="classification"
            required
            className={fieldClass}
            defaultValue=""
          >
            <option value="" disabled>
              {t.common.selectClassification}
            </option>
            {t.forms.options.facilityClass.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </Field>
        <Field id="chairs" label={f.chairs} required>
          <input id="chairs" name="chairs" type="number" min={1} required className={fieldClass} />
        </Field>
      </div>
      <fieldset>
        <legend className="mb-2 text-sm font-medium text-navy">{f.procedures}</legend>
        <div className="grid gap-2 md:grid-cols-2">
          {t.forms.options.procedures.map((opt) => (
            <label key={opt.value} className="flex items-center gap-2 text-sm text-slate">
              <input type="checkbox" name="procedures" value={opt.value} className="accent-navy" />
              {opt.label}
            </label>
          ))}
        </div>
      </fieldset>
      <div className="grid gap-4 md:grid-cols-2">
        <Field id="phone" label={f.phone} required>
          <input id="phone" name="phone" type="tel" required className={fieldClass} />
        </Field>
        <Field id="email" label={f.email} required>
          <input id="email" name="email" type="email" required className={fieldClass} />
        </Field>
      </div>
      <ConsentBox id="dpa" label={t.common.dpaConsent} required />
      <FormStatus status={status === "submitting" ? "idle" : status} />
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <SubmitButton label={t.involved.facilitySubmit} pending={status === "submitting"} />
        <WhatsAppLink className="text-sm font-medium text-navy">
          {t.involved.whatsappFacility}
        </WhatsAppLink>
      </div>
    </form>
  );
}
