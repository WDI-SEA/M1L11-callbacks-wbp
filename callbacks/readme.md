# JavaScript Arrow Functions and Callback Functions

**You’ve been hired by a local grocery store to help organize coupon distribution. The grocery store has a database of customers who have joined its rewards program. The store doesn’t want to give away too many coupons at once, they want to only give the coupon to a few of their members at a time. You’ve been hired to write the program that organizes the progressive rollout of the coupons.**

---

#### Step 1:

- Fork and clone this repository.

#### Step 2:

- Navigate to `/src/userDatabase/userDatabase.js`
- In this file, there is an object that represents a list of all the users in our database
- Can you find and fix one syntax error and one logical error in this file?
  - You can test your code manually using the supplied function calls at the bottom of the file
  - Once you are confident in your fixes, you can run the automated tests with this command: `jest ./userDatabase.test.js`

#### Step 2:

- Navigate to `/src/giveaway/giveaway.js`
- In this file, there is a function that determines if a user is eligible to receive one of our coupons
- Your job is to write another function that accepts this function as a callback, and returns the first 5 users that are eligible for a coupon
  - You can test your code manually using the supplied function calls at the bottom of the file
  - Once you are confident in your fixes, you can run the automated tests with this command: `jest ./giveaway.test.js`

#### Step 3:

- Navigate to `/src/sendCoupons/sendCoupons.js`
- In this file, there are 3 functions defined.
- Your job is to write a function that accepts a list of users, and all 3 existing functions in this file as arguments.
- Your function should check each user for a valid phone number. Then, if the phone number was valid, print a coupon and update the user in the database.
  - You can test your code manually using the supplied function calls at the bottom of the file
  - Once you are confident in your fixes, you can run the automated tests with this command: `jest ./sendCoupons.test.js`
