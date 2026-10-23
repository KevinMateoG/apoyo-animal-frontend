"use client";

import { type FormEvent, useState } from "react";
import type { Animal } from "@/src/features/catalogo/domain/animal";
import {
  buildThankYouMessage,
  INITIAL_SPONSORSHIP_VALUES,
  type SponsorshipFormValues,
  toSponsorshipRequest,
  validateSponsorship,
} from "../domain/sponsorship";
import { createSponsorship } from "../services/sponsorship.service";

export function useSponsorshipForm(animals: Animal[]) {
  const [values, setValues] = useState(INITIAL_SPONSORSHIP_VALUES);
  const [errors, setErrors] = useState<string[]>([]);
  const [thankYouMessage, setThankYouMessage] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const setField = <K extends keyof SponsorshipFormValues>(
    key: K,
    value: SponsorshipFormValues[K],
  ) => setValues((prev) => ({ ...prev, [key]: value }));

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setErrors([]);

    const validationErrors = validateSponsorship(values);
    if (validationErrors.length) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    try {
      await createSponsorship(toSponsorshipRequest(values));

      const animalName =
        values.donationType === "animal"
          ? (animals.find((a) => a.id === values.animalId)?.name ??
            values.animalId)
          : null;

      setThankYouMessage(
        buildThankYouMessage(
          values.name.trim(),
          values.donationType,
          animalName,
        ),
      );
      setValues(INITIAL_SPONSORSHIP_VALUES);
    } catch {
      setErrors(["No pudimos registrar tu aporte. Inténtalo de nuevo."]);
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    values,
    setField,
    errors,
    thankYouMessage,
    isSubmitting,
    handleSubmit,
  };
}

