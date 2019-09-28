import * as SecureStore from "expo-secure-store";

const EMAIL_KEY = "GTD_EMAIL_KEY";

export function setEmail(email) {
  return SecureStore.setItemAsync(EMAIL_KEY, email);
}

export function getEmail() {
  return SecureStore.getItemAsync(EMAIL_KEY);
}
