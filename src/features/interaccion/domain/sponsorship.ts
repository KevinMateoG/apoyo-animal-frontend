export type DonationType = "animal" | "general";
export type DonationFrequency = "recurring" | "single";

export interface SponsorshipFormValues {
  donationType: DonationType;
  animalId: string;
  name: string;
  email: string;
  address: string;
  amount: string;
  frequency: DonationFrequency;
  consent: boolean;
}

export interface SponsorshipRequest {
  donationType: DonationType;
  animalId: string | null;
  userId?: string | null;
  name: string;
  email: string;
  address: string;
  amount: number;
  frequency: DonationFrequency;
}

export interface Sponsorship extends SponsorshipRequest {
  id: string;
  createdAt: string;
}

export const INITIAL_SPONSORSHIP_VALUES: SponsorshipFormValues = {
  donationType: "animal",
  animalId: "",
  name: "",
  email: "",
  address: "",
  amount: "",
  frequency: "recurring",
  consent: false,
};

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateSponsorship(values: SponsorshipFormValues): string[] {
  const errors: string[] = [];

  if (values.donationType === "animal" && !values.animalId) {
    errors.push("Debes seleccionar el animal que quieres apadrinar.");
  }

  if (!values.name.trim()) {
    errors.push("El nombre completo es obligatorio.");
  }

  const email = values.email.trim();
  if (!email) {
    errors.push("El correo electrónico es obligatorio.");
  } else if (!EMAIL_REGEX.test(email)) {
    errors.push("El correo electrónico no tiene un formato válido.");
  }

  if (!values.address.trim()) {
    errors.push("La dirección es obligatoria.");
  }

  const amount = Number(values.amount);
  if (!amount || amount < 1) {
    errors.push("El valor del aporte debe ser un número mayor a 0.");
  }

  if (!values.consent) {
    errors.push("Debes aceptar que el equipo se comunique contigo.");
  }

  return errors;
}

export function toSponsorshipRequest(
  values: SponsorshipFormValues,
  userId: string | null = null,
): SponsorshipRequest {
  return {
    donationType: values.donationType,
    animalId: values.donationType === "animal" ? values.animalId : null,
    userId,
    name: values.name.trim(),
    email: values.email.trim(),
    address: values.address.trim(),
    amount: Number(values.amount),
    frequency: values.frequency,
  };
}

export function buildThankYouMessage(
  userName: string,
  donationType: DonationType,
  animalName: string | null,
): string {
  return donationType === "animal"
    ? `¡Muchas gracias! ${userName}, ${animalName} va a estar muy agradecido contigo, gracias por tu grano de arena 🌿`
    : `¡Muchas gracias! ${userName}, tu generosidad ayuda directamente al bienestar de toda la reserva. Cada aporte cuenta y el nuestro lo sabe 🌿`;
}
