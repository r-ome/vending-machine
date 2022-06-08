export const validCoins = [
  { currency: "AUD", value: 2, label: "$2" },
  { currency: "AUD", value: 1, label: "$1" },
  { currency: "AUD", value: 0.50, label: "5c" },
  { currency: "AUD", value: 0.20, label: "2c" },
  { currency: "AUD", value: 0.10, label: "1c" }
];

export const invalidCoins = [
  { currency: "AUD", value: 0.05, label: "5c" },
  { currency: "PHP", value: 5, label: "Php 5" }
];

export const products = [
  { name: "Caramel",  price: 2.50, buttonDisplay: "A1" },
  { name: "Hazelnut",  price: 3.10, buttonDisplay: "A2" },
  { name: "Organic Raw",  price: 2.00, buttonDisplay: "A3" }
];

export const errors = {
  LIMIT_REACHED: {
    message: "Amount exceeds limit"
  },
  INVALID_DENOMINATION: {
    message: "Invalid denomination"
  },
  INVALID_CURRENCY: {
    message: "Invalid currency"
  }
}

export const MAX_AMOUNT = 4;