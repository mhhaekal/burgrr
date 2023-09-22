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
      const { id } = req.params
      const product = await db.product.findOne({
        where: {
          id
        }
      })
      res.status(201).send({
        isError: false,
        message: "Get Product By id Success",
        data: product,
      });
    } catch (error) {
      next(error)
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
        include: [{
          model: db.product,
          attributes: ["product_name", "product_image", "price"]
        }]
      })
      res.status(201).send({
        isError: false,
        message: "Get Cart Success",
        data: cart,
      });
    } catch (error) {
      next(error)
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
        await db.cart.create({ product, product_id: productId });
      }
      res.status(201).send({
        isError: false,
        message: "Add to Cart Success",
        data: cart,
      });
    } catch (error) {
      console.log(error);
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
      console.log(cart.dataValues.quantity)
      // buat jwt menyusul
      // const cart = await db.cart.create({ product, product_id: productId, user_id: userId })
      if (cart.dataValues.quantity === 1) {
        await db.cart.destroy({
          where: {
            product_id: productId
          }
        })
      } else if (cart) {
        await db.cart.update(
          {
            quantity: cart.dataValues.quantity - 1
          },
          {
            where: {
              id: cart.id
            }
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
};
