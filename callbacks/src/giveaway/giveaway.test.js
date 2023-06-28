const determineCouponRecipients =
  require("./giveaway").determineCouponRecipients;
const isEligibleForCoupon = require("./giveaway").isEligibleForCoupon;

let users = [];

beforeEach(() => {
  users = require("../userDatabase/usersdb.json");
});

test("giveaway should return a list of eligible users", () => {
  expect(determineCouponRecipients(users, isEligibleForCoupon));
});
