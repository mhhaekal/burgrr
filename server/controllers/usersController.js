const db = require("./../models");
const { hash, match } = require("./../helper/hashing");
const { createJWT } = require("./../lib/jwt");
const { check, validatorResult } = require("express-validator");
const fs = require("fs").promises;
const handlebars = require("handlebars");
const transporter = require("./../helper/transporter");
const { log } = require("console");
const { deleteFiles } = require('./../helper/deleteFiles');

module.exports = {
  login: async (req, res, next) => {
    try {
      const { email, password } = req.body;
      //   console.log(email);
      //   console.log(password);
      const test = await hash(password);
      console.log(test);
      const checkUser = await db.user.findOne({ where: { email } });
      if (!checkUser) {
        return res.status(200).send({
          isError: true,
          message: "User doesn't exist",
        });
      }
      //   const hashPassword = await hash(password);
      const hashMatch = await match(password, checkUser.dataValues.password);
      if (!hashMatch)
        return res.status(200).send({
          isError: true,
          message: "Wrong Password!",
        });

      const token = createJWT({ id: checkUser.dataValues.id }, "1h");

      res.status(200).send({
        isError: false,
        message: "Login Success",
        tokenLogin: token,
        data: {
          id: checkUser.dataValues.id,
          name: checkUser.dataValues.username,
          image: checkUser.dataValues.image,
          role: checkUser.dataValues.role,
          email: checkUser.dataValues.email,
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
  reqChangePassword: async (req, res, next) => {
    try {
      const { email } = req.body;
      console.log(">>>");
      const checkUser = await db.user.findOne({ email });
      console.log(checkUser.dataValues.id);
      const token = await createJWT({ id: checkUser.dataValues.id }, "30m");
      const readTemplate = await fs.readFile("./public/template-change-password.html", "utf-8");
      const compiledTemplate = await handlebars.compile(readTemplate);
      const newTemplate = compiledTemplate({ username: checkUser.dataValues.name, email, token });
      await transporter.sendMail({
        from: {
          name: "Burgrr",
          email: "buytixpurwadhika@gmail.com",
        },
        to: email,
        subject: "register",
        html: newTemplate,
      });
      res.status(200).send({
        isError: false,
        message: "Success Request Changes Password!",
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
          id: verif.dataValues.id,
          email: verif.dataValues.email,
        },
      });
    } catch (error) {
      next(error);
    }
  },
  checkPassword: async (req, res, next) => {
    try {
      const { id } = req.dataToken;
      const { password, newpassword, confirmnewpassword } = req.headers;
      console.log(id);
      console.log(password);
      console.log(newpassword);
      console.log(confirmnewpassword);
      if (password === newpassword)
        throw { message: "the new password cant be same as last password" };
      if (newpassword !== confirmnewpassword) throw { message: "new password must be same" };
      const checkUser = await db.user.findOne({ where: { id } });
      if (!checkUser) throw { message: "User is not Found" };
      console.log(checkUser.dataValues.password);
      const hashPassword = await match(password, checkUser.dataValues.password);
      if (!hashPassword) throw { message: "Old Password is Wrong!!" };
      const hashNewPassword = await hash(newpassword);
      const updatePassword = await db.user.update(
        {
          password: hashNewPassword,
        },
        {
          where: {
            id,
          },
        }
      );
      console.log(updatePassword);
      console.log(">>>1");
      res.status(200).send({
        isError: false,
        message: "success change password!",
      });
    } catch (error) {
      next(error);
    }
  },
  getEmployeeData: async (req, res, next) => {
    try {
      const employee = await db.user.findAll({
        where: {
          role: "cashier"
        }
      })
      res.status(200).send({
        isError: false,
        message: "success change password!",
        data: employee
      });
    } catch (error) {
      next(error)
    }
  },
  getTokenUser: async (req, res, next) => {
    try {
      const { id } = req.dataToken;
      console.log(id);
      const verif = await db.user.findOne({ where: { id } });
      if (!verif) throw { message: "account is not exist" };
      // console.log(verif);

      res.status(200).send({
        isError: false,
        message: "account is found",
        data: verif.dataValues,
      });
    } catch (error) {
      next(error)
    }
  },
  updateImage: async (req, res, next) => {
    try {
      // 1. Ambil id image
      const { idImage } = req.params
      console.log(req.files);
      // 2. Ambil path image lama
      const findImage = await db.user.findOne({
        where: {
          id: idImage
        }
      })

      // 3. Update new path on table
      console.log(req.files.images[0].path);
      const newImage = await db.user.update({ image: req.files.images[0].path }, { where: { id: idImage } })
      console.log('<<<');
      console.log(newImage);
      // 4. Delete image lama
      deleteFiles({ images: [{ path: findImage.dataValues.image }] })

      // 5. Kirim response
      res.status(201).send({
        isError: false,
        message: 'Update Image Success!',
        data: newImage
      })
    } catch (error) {
      console.log(error);
      deleteFiles(req.files)
      next(error)
    }
  },
};

// throw { message: "new password must be same" };
