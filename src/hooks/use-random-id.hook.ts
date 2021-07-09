import { useState } from "react";

const generateRandomId = (length: number = 10): string => {
  let id = "";
  const options =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (let i = 0; i < length; i++) {
    id += options.charAt(Math.floor(Math.random() * options.length));
  }

  return id;
};

export const useRandomId = (): string => {
  const [id] = useState(generateRandomId(10));
  return id;
};
