const { log } = require("console");
const db = require("./../models");
const { sequelize } = require("./../models");
const { createProductService } = require("./../services/productService");
const { createCategoryService } = require("./../services/productService");
const { getCategoryService } = require("./../services/productService");
const { getAllProductsService } = require("./../services/productService");
const { getAllProductsByCatService } = require("./../services/productService");
const { deleteProductService1 } = require("./../services/productService");
const { deleteProductService2 } = require("./../services/productService");
const { deleteCategoryService1 } = require("./../services/productService");
const { deleteCategoryService2 } = require("./../services/productService");
const { editCategoryService1 } = require("./../services/productService");
const { editCategoryService2 } = require("./../services/productService");
const { Sequelize } = require("sequelize");
const Op = Sequelize.Op;

module.exports = {
  createProduct: async (req, res, next) => {
    try {
      const data = JSON.parse(req.body.data);
      const dataImage = req.files.images[0].path;
      const addProduct = await createProductService(data, dataImage);
      res.status(201).send({
        isError: false,
        message: "Product Added",
        data: addProduct,
      });
    } catch (error) {
      next(error);
    }
  },
  createCategory: async (req, res, next) => {
    try {
      const data = req.body;
      const addCategory = await createCategoryService(data);
      res.status(201).send({
        isError: false,
        message: "Product Added",
        data: addCategory,
      });
    } catch (error) {
      next(error);
    }
  },
  getCategory: async (req, res, next) => {
    try {
      const category = await getCategoryService();
      res.status(201).send({
        isError: false,
        message: "Get Category Success",
        data: category,
      });
    } catch (error) {
      next(error);
    }
  },
  editCategory: async (req, res, next) => {
    try {
      const { id, name } = req.body;
      const category = await editCategoryService1(id);
      const categoryUpdate = await editCategoryService2(id, name);
      res.status(201).send({
        isError: false,
        message: "Get Category Success",
        data: categoryUpdate,
      });
    } catch (error) {
      next(error);
    }
  },
  getAllProducts: async (req, res, next) => {
    try {
      const allProduct = await getAllProductsService();
      res.status(201).send({
        isError: false,
        message: "Get All Products Success",
        data: allProduct,
      });
    } catch (error) {
      next(error);
    }
  },
  getProductById: async (req, res, next) => {
    try {
      const { id } = req.params;
      const product = await db.product.findOne({
        where: {
          id,
        },
      });
      res.status(201).send({
        isError: false,
        message: "Get Product By id Success",
        data: product,
      });
    } catch (error) {
      next(error);
    }
  },
  getAllProductsByCat: async (req, res, next) => {
    try {
      const { catId, searchQuery, sort } = req.query;
      console.log(catId);
      console.log(searchQuery);
      console.log(sort);
      if (!catId && !searchQuery) {
        const allProduct = await getAllProductsService(sort);
        res.status(201).send({
          isError: false,
          message: "Get All Products Success 0",
          data: allProduct,
        });
      } else if (!searchQuery) {
        const allProductByCat = await getAllProductsByCatService(catId, sort);
        res.status(201).send({
          isError: false,
          message: "Get All Product By Category Success 1",
          data: allProductByCat,
        });
      } else if (!catId) {
        const allProductByCat = await db.product.findAll({
          where: {
            product_name: {
              [Op.like]: `%${searchQuery}%`,
            },
          },
          order: [["product_name", sort]],
        });
        res.status(201).send({
          isError: false,
          message: "Get All Product By Category Success 2",
          data: allProductByCat,
        });
      } else {
        const allProductByCat = await db.product.findAll({
          where: {
            category_id: catId,
            product_name: {
              [Op.like]: `%${searchQuery}%`,
            },
          },
          order: [["product_name", sort]],
        });
        res.status(201).send({
          isError: false,
          message: "Get All Product By Category Success 3",
          data: allProductByCat,
        });
      }
    } catch (error) {
      next(error);
    }
  },
  getCart: async (req, res, next) => {
    try {
      const cart = await db.cart.findAll({
        include: [
          {
            model: db.product,
            attributes: ["product_name", "product_image", "price"],
          },
        ],
      });
      res.status(201).send({
        isError: false,
        message: "Get Cart Success",
        data: cart,
      });
    } catch (error) {
      next(error);
    }
  },
  addToCart: async (req, res, next) => {
    try {
      const { productId } = req.params;
      // buat jwt menyusul
      // const { userId } = req.dataToken;
      const product = await db.product.findOne({
        where: {
          id: productId,
        },
      });
      const cart = await db.cart.findOne({
        include: [
          {
            model: db.product,
            attributes: ["price"],
          },
        ],
        where: {
          product_id: product.id,
        },
      });

      // buat jwt menyusul
      // const cart = await db.cart.create({ product, product_id: productId, user_id: userId })
      if (cart) {
        await db.cart.update(
          { quantity: cart.dataValues.quantity + 1 },
          { where: { id: cart.id } }
        );
      } else {
        await db.cart.create({ product, product_id: productId, total: product.price });
      }

      const cart1 = await db.cart.findOne({
        include: [
          {
            model: db.product,
            attributes: ["price"],
          },
        ],
        where: {
          product_id: product.id,
        },
      });

      const total = cart1.dataValues.quantity * cart1.dataValues.product.price;
      console.log(total);

      const totalFinal = await db.cart.sum("total");
      console.log(totalFinal);

      await db.cart.update({ total: total }, { where: { id: cart.id } });

      res.status(201).send({
        isError: false,
        message: "Add to Cart Success",
        data: cart1,
      });
    } catch (error) {
      console.log(error);
      next(error);
    }
  },
  getOneCat: async (req, res, next) => {
    try {
      const { id } = req.params;
      const resCat = await db.category.findOne({ where: { id } });
      console.log(res);
      if (!resCat) {
        return res.status(200).send({
          isError: true,
          message: "Category not found",
        });
      }

      res.status(200).send({
        isError: false,
        message: "get data success",
        data: resCat.dataValues.name,
      });
    } catch (error) {
      console.log(error);
    }
  },
  saveEditCat: async (req, res, next) => {
    try {
      const { inputCat, id } = req.body;
      console.log(inputCat);
      console.log(id);
      const resp = await db.category.update({ name: inputCat }, { where: { id } });
      console.log(resp);
      res.status(200).send({
        isError: false,
        message: "Changes Success!",
      });
    } catch (error) {
      next(error);
    }
  },
  addProductToCart: async (req, res, next) => {
    try {
      const { product_id, user_id } = req.body;
      console.log(product_id);
      console.log(user_id);
      const checkProduct = await db.cart.findOne({ where: { product_id, user_id } });
      //   console.log(checkProduct.dataValues);
      if (checkProduct) {
        const updateQuantity = await db.cart.update(
          { quantity: checkProduct.dataValues.quantity + 1 },
          { where: { product_id, user_id } }
        );
        console.log(">>>>");
        console.log(updateQuantity);
        return res.status(200).send({
          isError: false,
          message: "Successfully add quantity product to cart!!",
        });
      }
      const response = await db.cart.create({
        product_id,
        user_id,
        quantity: 1,
      });
      console.log(response);
      res.status(200).send({
        isError: false,
        message: "Successfully add product to cart!!",
      });
    } catch (error) {
      next(error);
    }
  },
  getAllDataCart: async (req, res, next) => {
    try {
      const getData = await db.cart.findAll({
        include: [
          {
            model: db.product,
          },
        ],
      });
      res.send(getData);
    } catch (error) {
      console.log(error);
    }
  },
  getTotal: async (req, res, next) => {
    try {
      const cart = await db.cart.sum("total");
      res.status(201).send({
        isError: false,
        message: "Get Total Success",
        data: cart,
      });
    } catch (error) {
      next(error);
    }
  },

  minusCart: async (req, res, next) => {
    try {
      const { productId } = req.params;
      // buat jwt menyusul
      // const { userId } = req.dataToken;
      const product = await db.product.findOne({
        where: {
          id: productId,
        },
      });
      const cart = await db.cart.findOne({
        where: {
          product_id: product.id,
        },
      });
      console.log(cart.dataValues.quantity);
      // buat jwt menyusul
      // const cart = await db.cart.create({ product, product_id: productId, user_id: userId })
      if (cart.dataValues.quantity === 1) {
        await db.cart.destroy({
          where: {
            product_id: productId,
          },
        });
      } else if (cart) {
        await db.cart.update(
          {
            quantity: cart.dataValues.quantity - 1,
          },
          {
            where: {
              id: cart.id,
            },
          }
        );
      }
      res.status(201).send({
        isError: false,
        message: "Update Cart Success",
        data: cart,
      });
    } catch (error) {
      console.log(error);
      next(error);
    }
  },
  deleteProduct: async (req, res, next) => {
    try {
      const { productId } = req.params;
      const allProduct = await deleteProductService1(productId);
      await deleteProductService2(productId);
      res.status(201).send({
        isError: false,
        message: "Get All Products Success",
        data: allProduct,
      });
    } catch (error) {
      next(error);
    }
  },
  deleteCategory: async (req, res, next) => {
    try {
      const { categoryId } = req.params;
      const allCategory = await deleteCategoryService1();
      await deleteCategoryService2();
      res.status(201).send({
        isError: false,
        message: "Get All Products Success",
        data: allCategory,
      });
    } catch (error) {
      next(error);
    }
  },
  plusQty: async (req, res, next) => {
    try {
      const { pId, id } = req.query;
      const resP = await db.cart.findOne({ where: { product_id: pId, user_id: id } });
      if (!resP)
        return res.status(200).send({
          isError: true,
          message: "product not found",
        });

      const addqty = await db.cart.update(
        { quantity: resP.dataValues.quantity + 1 },
        { where: { product_id: pId, user_id: id } }
      );

      console.log(addqty);
      res.status(200).send({
        isError: false,
        message: "Success Add Quantity",
      });
    } catch (error) {
      console.log(error);
    }
  },
  minusQty: async (req, res, next) => {
    try {
      const { pId, id } = req.query;
      const resP = await db.cart.findOne({ where: { product_id: pId, user_id: id } });

      if (resP.dataValues.quantity === 1) {
        await db.cart.destroy({ where: { product_id: pId, user_id: id } });
        res.status(200).send({
          isError: false,
          message: "Success Delete Product from cart",
        });
      }

      const minusqty = await db.cart.update(
        { quantity: resP.dataValues.quantity - 1 },
        { where: { product_id: pId, user_id: id } }
      );

      console.log(minusqty);
      res.status(200).send({
        isError: false,
        message: "Success substrac Quantity",
      });
    } catch (error) {
      console.log(error);
    }
  },
};
