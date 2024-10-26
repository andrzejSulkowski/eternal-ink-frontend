const algorithm = "AES-256-CBC";
const ivLength = 16;

async function loadCrypto() {
  const crypto = await import("crypto");
  return crypto;
}

async function deriveKey(password: string, salt: Uint8Array) {
  const { pbkdf2Sync } = await loadCrypto();
  return pbkdf2Sync(password, salt, 100000, 32, "sha256");
}

async function encrypt(
  message: string,
  password: string
): Promise<{ data: Uint8Array; salt: Uint8Array; iv: Uint8Array }> {
  const { randomBytes, createCipheriv } = await loadCrypto();
  const iv = randomBytes(ivLength); // IV buffer
  const salt = randomBytes(16); // Salt buffer
  const key = await deriveKey(password, new Uint8Array(salt)); // Key buffer
  const cipher = createCipheriv(
    algorithm,
    new Uint8Array(key),
    new Uint8Array(iv)
  );

  const encrypted = Buffer.concat([
    new Uint8Array(cipher.update(message, "utf8")),
    new Uint8Array(cipher.final()),
  ]);

  return {
    data: new Uint8Array(encrypted),
    salt: new Uint8Array(salt),
    iv: new Uint8Array(iv),
  };
}

async function decrypt(args: {
  data: Uint8Array;
  salt: Uint8Array;
  iv: Uint8Array;
  password: string;
}): Promise<string> {
  const { data, salt, iv, password } = args;
  const { createDecipheriv } = await loadCrypto();
  const key = new Uint8Array(await deriveKey(password, salt));
  const decipher = createDecipheriv(algorithm, key, iv);

  const decrypted = Buffer.concat([
    new Uint8Array(decipher.update(data)),
    new Uint8Array(decipher.final()),
  ]);

  return decrypted.toString("utf8");
}

async function hash(blob: Blob): Promise<Uint8Array> {
  const { createHash } = await loadCrypto();
  const arrayBuffer = await blob.arrayBuffer();

  // For browser environments
  if (typeof crypto.subtle !== "undefined") {
    const hashBuffer = await crypto.subtle.digest("SHA-256", arrayBuffer);
    return new Uint8Array(hashBuffer);
  }

  // For Node.js environments
  const buffer = Buffer.from(arrayBuffer);
  const hash = createHash("sha256");
  hash.update(new Uint8Array(buffer));
  return new Uint8Array(hash.digest());
}

export { encrypt, decrypt, hash };
