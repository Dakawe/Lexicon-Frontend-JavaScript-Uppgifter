export const dayRate = (r) => R(r),
  daysInBudget = (b, r) => ~~(b / r / 8),
  priceWithMonthlyDiscount = (r, d, di) => Math.ceil(d * R(r) - (d - (d % 22)) * R(r) * di),
  R = (r) => r * 8;
