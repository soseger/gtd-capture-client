import * as SecureStore from "expo-secure-store";
import { validate } from "email-validator";

const EMAIL_KEY = "GTD_EMAIL_KEY";

export function setEmail(email) {
  email = email.trim();
  if (!validate(email)) {
    return new Promise((resolve, reject) => reject("Invalid email!"));
  }

  return SecureStore.setItemAsync(EMAIL_KEY, email);
}

export function getEmail() {
  return SecureStore.getItemAsync(EMAIL_KEY);
}
