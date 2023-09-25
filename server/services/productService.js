const db = require("./../models");

module.exports = {
  createProductService: async (data, dataImage) => {
    try {
      return await db.product.create({ ...data, product_image: dataImage });
    } catch (error) {
      return error;
    }
  },
  createCategoryService: async (data) => {
    try {
      return await db.category.create({ ...data });
    } catch (error) {
      return error;
    }
  },
  getCategoryService: async () => {
    try {
      return await db.category.findAll({
        where: {
          isDelete: 0,
        },
      });
    } catch (error) {
      return error;
    }
  },
  getAllProductsService: async (sort) => {
    try {
      return await db.product.findAll({
        where: {
          isDelete: 0,
        },
        order: [["product_name", sort]],
      });
    } catch (error) {
      return error;
    }
  },
  getAllProductsByCatService: async (catId, sort) => {
    try {
      return await db.product.findAll({
        where: {
          category_id: catId,
        },
        order: [["product_name", sort]],
      });
    } catch (error) {
      return error;
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
        const addCart = await db.cart.create({ product, product_id: productId });
      }
      res.status(201).send({
        isError: false,
        message: "Add to Cart Success",
        data: cart,
      });
    } catch (error) {
      next(error);
    }
  },
  deleteProductService1: async (productId) => {
    try {
      return await db.product.findOne({
        where: {
          id: productId,
          isDelete: 0,
        },
      });
    } catch (error) {
      return error;
    }
  },
  deleteProductService2: async (productId) => {
    try {
      return await db.product.update({ isDelete: 1 }, { where: { id: productId } });
    } catch (error) {
      return error;
    }
  },
  deleteCategoryService1: async (categoryId) => {
    try {
      return await db.category.findOne({
        where: {
          id: categoryId,
          isDelete: 0,
        },
      });
    } catch (error) {
      return error;
    }
  },
  deleteCategoryService2: async (categoryId) => {
    try {
      return await db.category.update({ isDelete: 1 }, { where: { id: categoryId } });
    } catch (error) {
      return error;
    }
  },
  editCategoryService1: async (id) => {
    try {
      return await db.category.findOne({
        where: {
          id
        }
      })
    } catch (error) {
      return error
    }
  },
  editCategoryService2: async (id, name) => {
    try {
      return await db.category.update({
        name
      },
        {
          where: {
            id
          }
        })
    } catch (error) {
      return error
    }
  }
};
