import { encrypt, decrypt } from "./crypto";

describe("Crypto Module", () => {
  test("Encrypt and decrypt a message", () => {
    const message = "This is a secret message.";
    const password = "myStrongPassword";

    const { data, salt, iv } = encrypt(message, password);
    const dataString = Buffer.from(data).toString("base64");
    const saltString = Buffer.from(salt).toString("base64");
    const ivString = Buffer.from(iv).toString("base64");
    console.log("data", dataString);
    console.log("salt", saltString);
    console.log("iv", ivString);
    const decryptedMessage = decrypt({ data, salt, iv, password });

    expect(decryptedMessage).toBe(message);
  });

  test("Decrypt with incorrect password should fail", () => {
    const message = "This is a secret message.";
    const password = "myStrongPassword";
    const wrongPassword = "wrongPassword";

    const { data, salt, iv } = encrypt(message, password);

    expect(() => {
      decrypt({ data, salt, iv, password: wrongPassword });
    }).toThrow();
  });

  test("Base64 encoded data should be decrypted correctly", () => {
    const message = "This is a secret message.";
    const password = "myStrongPassword";

    const { data, salt, iv } = encrypt(message, password);

    // we simulate user input
    const dataString = Buffer.from(data).toString("base64");
    const saltString = Buffer.from(salt).toString("base64");
    const ivString = Buffer.from(iv).toString("base64");

    const decryptedMessage = decrypt({
      data: new Uint8Array(Buffer.from(dataString, "base64")),
      salt: new Uint8Array(Buffer.from(saltString, "base64")),
      iv: new Uint8Array(Buffer.from(ivString, "base64")),
      password,
    });

    expect(decryptedMessage).toBe(message);
  });

  test("Encrypt and decrypt an empty message", () => {
    const message = "";
    const password = "myStrongPassword";

    const { data, salt, iv } = encrypt(message, password);
    const decryptedMessage = decrypt({ data, salt, iv, password });

    expect(decryptedMessage).toBe(message);
  });

  test("Encrypt and decrypt with different messages and passwords", () => {
    const messages = [
      "Short message",
      "Another secret message with more words.",
      "Message with special characters !@#$%^&*()_+-=[]{}|;':\",.<>/?",
      "Message with unicode characters: こんにちは世界",
    ];

    const passwords = [
      "password1",
      "password2",
      "complexPassword123!@#",
      "パスワード",
    ];

    messages.forEach((message, index) => {
      const password = passwords[index];
      const { data, salt, iv } = encrypt(message, password);
      const decryptedMessage = decrypt({ data, salt, iv, password });

      expect(decryptedMessage).toBe(message);
    });
  });

  test("Encrypt and decrypt a large message", () => {
    const message = "A".repeat(10000); // 10,000 characters
    const password = "myStrongPassword";

    const { data, salt, iv } = encrypt(message, password);
    const decryptedMessage = decrypt({ data, salt, iv, password });

    expect(decryptedMessage).toBe(message);
  });
});
