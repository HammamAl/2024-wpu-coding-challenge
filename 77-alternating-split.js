function encrypt(text, n) {
  if (!text) return text;
  for (let i = 0; i < n; i++) {
    let odd = text.split("").filter((el, i) => i % 2 === 1);
    console.log(odd);
    let even = text.split("").filter((el, i) => i % 2 === 0);
    text = odd.join("") + even.join("");
  }
  return text;
}

function decrypt(encryptedText, n) {
  if (!encryptedText) return encryptedText;
  for (let i = 0; i < n; i++) {
    let mid = encryptedText.length % 2 ? Math.floor(encryptedText.length / 2) : encryptedText.length / 2;
    const odd = encryptedText.slice(0, mid);
    const even = encryptedText.slice(mid);
    let result = "";
    for (let i = 0; i < even.length; i++) {
      if (typeof even[i] !== "undefined") result += even[i];
      if (typeof odd[i] !== "undefined") result += odd[i];
    }
    encryptedText = result;
  }

  return encryptedText;
}

console.log(encrypt(null, 2));
console.log(decrypt("stsrnenT a ytsghk v et!iaieiri", 2));
