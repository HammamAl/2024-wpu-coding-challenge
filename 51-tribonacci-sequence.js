function tribonacci(signature, n) {
  for (let i = 0; i < n - 3; i++) {
    let total = 0;
    for (let j = i; j < i + 3; j++) {
      total += signature[j];
    }
    signature.push(total);
  }

  return signature.slice(0, n);
}

console.log(tribonacci([1, 1, 1], 10));
