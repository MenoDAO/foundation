"use client";

import { useState } from "react";
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

const optionalLicense = new Set(["chv", "student"]);

export function VolunteerForm() {
  const { t } = useLocale();
  const { status, onSubmit } = useFormSubmit("form-volunteer-intake");
  const [cadre, setCadre] = useState("");
  const f = t.forms.volunteer;
  const licenseRequired = cadre !== "" && !optionalLicense.has(cadre);

  return (
    <form onSubmit={onSubmit} className="grid gap-4">
      <Field id="fullName" label={f.name} required>
        <input id="fullName" name="fullName" required className={fieldClass} />
      </Field>
      <Field id="cadre" label={f.cadre} required>
        <select
          id="cadre"
          name="cadre"
          required
          className={fieldClass}
          value={cadre}
          onChange={(e) => setCadre(e.target.value)}
        >
          <option value="" disabled>
            {t.common.selectCadre}
          </option>
          {t.forms.options.cadres.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      </Field>
      <Field
        id="license"
        label={f.license}
        required={licenseRequired}
        optional={!licenseRequired}
      >
        <input
          id="license"
          name="license"
          required={licenseRequired}
          className={fieldClass}
        />
      </Field>
      <div className="grid gap-4 md:grid-cols-2">
        <Field id="whatsapp" label={f.whatsapp} required>
          <input id="whatsapp" name="whatsapp" type="tel" required className={fieldClass} />
        </Field>
        <Field id="email" label={f.email} required>
          <input id="email" name="email" type="email" required className={fieldClass} />
        </Field>
      </div>
      <Field id="location" label={f.location} required>
        <input id="location" name="location" required className={fieldClass} />
      </Field>
      <Field id="availability" label={f.availability} required>
        <select id="availability" name="availability" required className={fieldClass} defaultValue="">
          <option value="" disabled>
            {t.common.selectAvailability}
          </option>
          {t.forms.options.availability.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      </Field>
      <label className="flex items-center gap-3 text-sm text-slate">
        <input type="checkbox" name="mentorship" className="accent-navy" />
        {f.mentorship}
      </label>
      <ConsentBox id="dpa" label={t.common.dpaConsent} required />
      <FormStatus status={status === "submitting" ? "idle" : status} />
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <SubmitButton label={t.involved.volunteerSubmit} pending={status === "submitting"} />
        <WhatsAppLink className="text-sm font-medium text-navy">
          {t.involved.whatsappVolunteer}
        </WhatsAppLink>
      </div>
    </form>
  );
}
