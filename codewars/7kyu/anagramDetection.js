var isAnagram = function (test, original) {
  // Переводимо обидва слова до нижнього регістру і розбиваємо на масиви символів
  const arrTest = test.toLowerCase().split("");
  const arrOriginal = original.toLowerCase().split("");

  // Перевіряємо, чи мають обидва слова однакову кількість символів
  if (arrTest.length !== arrOriginal.length) {
    return false;
  }

  // Сортуємо масиви символів для обох слів
  arrTest.sort();
  arrOriginal.sort();

  // Порівнюємо відсортовані масиви
  for (let i = 0; i < arrTest.length; i++) {
    if (arrTest[i] !== arrOriginal[i]) {
      return false;
    }
  }

  // Якщо всі символи співпадають, слова є анаграмами
  return true;
};

// console.log(isAnagram("Twoo", "WooT"));

String.prototype.sortLetters = function () {
  return this.toLowerCase().split("").sort().join("");
};

var isAnagram = function (test, original) {
  return test.sortLetters() == original.sortLetters();
};
