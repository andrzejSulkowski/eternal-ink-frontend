import crypto, { BinaryLike } from "crypto";

const algorithm = "aes-256-cbc"; // AES encryption with 256-bit key
const ivLength = 16; // AES block size

// Derive a key from a password
function deriveKey(password: string, salt: BinaryLike) {
  return crypto.pbkdf2Sync(password, salt, 100000, 32, "sha256");
}

// Encrypt a message
function encrypt(message: string, password: string) {
  const iv = crypto.randomBytes(ivLength);
  const salt = crypto.randomBytes(16); // 16 bytes salt
  const key = deriveKey(password, salt);
  const cipher = crypto.createCipheriv(algorithm, key, iv);
  let encrypted = cipher.update(message, "utf8", "base64");
  encrypted += cipher.final("base64");
  // Return salt, iv, and encrypted message concatenated together
  return `${salt.toString("base64")}:${iv.toString("base64")}:${encrypted}`;
}

// Decrypt a message
function decrypt(encryptedMessage: string, password: string) {
  const [saltBase64, ivBase64, encryptedBase64] = encryptedMessage.split(":");
  const salt = Buffer.from(saltBase64, "base64");
  const iv = Buffer.from(ivBase64, "base64");
  const key = deriveKey(password, salt);
  const decipher = crypto.createDecipheriv(algorithm, key, iv);
  let decrypted = decipher.update(encryptedBase64, "base64", "utf8");
  decrypted += decipher.final("utf8");
  return decrypted;
}

// Usage
// const password = "myStrongPassword";
// const message = "This is a secret message";

// const encryptedMessage = encrypt(message, password);
// console.log("Encrypted message:", encryptedMessage);

// const decryptedMessage = decrypt(encryptedMessage, password);
// console.log("Decrypted message:", decryptedMessage);

export { encrypt, decrypt }