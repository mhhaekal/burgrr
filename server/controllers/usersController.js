const db = require("./../models");
const { hash, match } = require("./../helper/hashing");
const { createJWT } = require("./../lib/jwt");
const { check, validatorResult } = require("express-validator");
const fs = require("fs").promises;
const handlebars = require("handlebars");
const transporter = require("./../helper/transporter");

module.exports = {
  login: async (req, res, next) => {
    try {
      const { email, password } = req.body;
      //   console.log(email);
      //   console.log(password);
      const checkUser = await db.user.findOne({ where: { email } });
      if (!checkUser) {
        return res.status(200).send({
          isError: true,
          message: "User doesn't exist",
        });
      }
      //   const hashPassword = await hash(password);
      const hashMatch = await match(password, checkUser.dataValues.password);
      if (!hashMatch) throw { message: "Wrong Password!" };

      const token = createJWT({ id: checkUser.dataValues.id }, "1h");

      res.status(200).send({
        isError: false,
        message: "Login Success",
        tokenLogin: token,
        data: {
          name: checkUser.dataValues.username,
          image: checkUser.dataValues.image,
          role: checkUser.dataValues.role,
        },
      });

      console.log(checkUser.dataValues);
      //   console.log(hashPassword);
    } catch (error) {
      next(error);
    }
  },
  register: async (req, res, next) => {
    try {
      const { username, email, password, role } = req.body;

      //   const checkEmail = await db.user.findOne({
      //     where: { email },
      //   });
      //   //   console.log(checkEmail);
      //   if (checkEmail) throw { message: "Email Address already register" };

      const hashPassword = await hash(password);
      //   console.log(hashPassword);
      const createUser = await db.user.create({
        username,
        email,
        password: hashPassword,
        image: null,
        role,
        status: "inactive",
        isDelete: "0",
      });

      const token = createJWT({ id: createUser.dataValues.id }, "1h");
      const readTemplate = await fs.readFile("./public/template-confirm.html", "utf-8");
      const compiledTemplate = await handlebars.compile(readTemplate);
      const newTemplate = compiledTemplate({ username, email, token });

      await transporter.sendMail({
        from: {
          name: "Burgrr",
          email: "buytixpurwadhika@gmail.com",
        },
        to: email,
        subject: "register",
        html: newTemplate,
      });
    } catch (error) {
      next(error);
    }
  },
  verifyToken: async (req, res, next) => {
    try {
      const { id } = req.dataToken;
      const verif = await db.user.findOne({ where: { id } });
      if (!verif) throw { message: "Account is Not Exist" };

      res.status(200).send({
        isError: false,
        message: "token still on going",
        data: {
          name: verif.dataValues.username,
          image: verif.dataValues.image,
          role: verif.dataValues.role,
        },
      });
    } catch (error) {
      next(error);
    }
  },
};
