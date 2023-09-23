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
  validationHeaders: async (req, res, next) => {
    try {
      // await check("email").notEmpty().isEmail();
      await check("password")
        .notEmpty()
        .withMessage("must be have value")
        .isLength({ min: 6, max: 20 })
        .withMessage("password must be more than 5")
        .run(req);
      await check("newpassword")
        .notEmpty()
        .withMessage("must be have value")
        .isLength({ min: 6, max: 20 })
        .withMessage("password must be more than 5")
        .run(req);
      console.log(">>>");
      const valRes = validationResult(req);
      if (valRes.isEmpty()) return next();

      res.status(500).send({
        isError: true,
        message: valRes.errors[0].msg || valRes.errors[1].msg,
      });
    } catch (error) {
      next(error);
    }
  },
};
