function buildFrequencyDictionary(text) {
  // Приводим текст к нижнему регистру
  text = text.toLowerCase();

  const freq = {};

  for (let char of text) {
    // Берём только буквы (английские a-z)
    if (char >= 'a' && char <= 'z') {
      if (!freq[char]) {
        freq[char] = 0;
      }
      freq[char]++;
    }
  }

  return freq;
}

// Пример использования
const text = "Hello world! This is a test text with letters.";
const frequency = buildFrequencyDictionary(text);
console.log(frequency);