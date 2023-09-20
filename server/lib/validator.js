const { check, body, validationResult } = require("express-validator");

module.exports = {
  validation: () => {
    return [
      body("email", "Email Length error").isEmail().isLength({ min: 6, max: 20 }),
      body("password", "Password cannot be empty").not().isEmpty(),
      body("password", "Password Length error").isLength({ min: 6 }),
    ];
  },
  validate: (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ isError: true, message: errors.array() });
    }
    next();
  },
};
