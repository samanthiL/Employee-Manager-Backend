const { body } = require("express-validator");

exports.validateAddEmployee = [
  body("first_name").isString().withMessage("First name is required").notEmpty(),
  body("last_name").isString().withMessage("Last name is required").notEmpty(),
  body("email").isEmail().withMessage("Valid email is required").notEmpty(),
  body("number").isString().withMessage("Phone number is required").notEmpty(),
  body("gender").isIn(["M", "F"]).withMessage("Gender is required").notEmpty()
];

exports.validateUpdateEmployee = [
  body("first_name").optional().isString(),
  body("last_name").optional().isString(),
  body("email").optional().isEmail(),
  body("number").optional().isString(),
  body("gender").optional().isIn(["M", "F"])
];
