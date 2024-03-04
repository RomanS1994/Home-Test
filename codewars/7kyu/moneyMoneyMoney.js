function calculateYears(principal, interest, tax, desired) {
  if (principal >= desired) {
    return 0;
  }

  let years = 0;
  while (principal < desired) {
    let interestEarned = principal * interest;
    let taxPaid = interestEarned * tax;
    principal += interestEarned - taxPaid;
    years++;
  }
  return years;
}

console.log(calculateYears(1000, 0.05, 0.18, 1100));
