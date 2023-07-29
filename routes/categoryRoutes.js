import express from "express";
import { isAdmin, reqiredSignin } from "../middleware/authMiddleware.js";
import {
  categoryControlller,
  createCategoryController,
  deleteCategoryCOntroller,
  singleCategoryController,
  updateCategoryController,
} from "../controllers/categoryController.js";

const router = express.Router();

// create routes
router.post(
  "/create-category",
  reqiredSignin,
  isAdmin,
  createCategoryController
);
// update
router.put(
  "/update-category/:id",
  reqiredSignin,
  isAdmin,
  updateCategoryController
);

//getALl category
router.get("/get-category", categoryControlller);

//single category
router.get("/single-category/:slug", singleCategoryController);

//delete category
router.delete(
  "/delete-category/:id",
  reqiredSignin,
  isAdmin,
  deleteCategoryCOntroller
);

export default router;
