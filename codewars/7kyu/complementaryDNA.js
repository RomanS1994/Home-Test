function dnaStrand(dna) {
  let result = "";

  for (let i = 0; i < dna.length; i++) {
    const value = dna[i];
    switch (true) {
      case value === "A":
        result += "T";
        break;
      case value === "T":
        result += "A";
        break;
      case value === "A":
        result += "T";
        break;
      case value === "G":
        result += "C";
        break;
      case value === "C":
        result += "G";
        break;
    }
  }
  return result;
}

// console.log(dnaStrand("ATTGC"));
