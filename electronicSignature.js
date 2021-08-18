async function generateKey() {
  const key = await window.crypto.subtle.generateKey({
      name: "RSASSA-PKCS1-v1_5",
      modulusLength: 4096,
      publicExponent: new Uint8Array([0x01, 0x00, 0x01]),
      hash: {
        name: "SHA-512"
      },
    },
    true,
    ["sign", "verify"]
  );

  return {
    privateKey: await window.crypto.subtle.exportKey(
      "jwk",
      key.privateKey,
    ),
    publicKey: await window.crypto.subtle.exportKey(
      "jwk",
      key.publicKey,
    ),
  };
}