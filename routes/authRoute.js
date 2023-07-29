import express from "express";
import {
  registerController,
  loginController,
  testController,
  forgotPasswordController,
  updateProfileController,
  getOrdersController,
  getAllOrdersController,
  orderStatusController,
} from "../controllers/authController.js";
import { reqiredSignin, isAdmin } from "../middleware/authMiddleware.js";
//router object
const router = express.Router();

//routing
//REGISTER || METHOD POST
router.post("/register", registerController);
//LOGIN || METHOD POST
router.post("/login", loginController);
// forget password
router.post("/forgot-password", forgotPasswordController);

//testing
router.get("/test", reqiredSignin, isAdmin, testController);

//protected route user auth
router.get("/user-auth", reqiredSignin, (req, res) => {
  res.status(200).send({ ok: true });
});
//protected route Admin auth
router.get("/admin-auth", reqiredSignin, isAdmin, (req, res) => {
  res.status(200).send({ ok: true });
});

//update profile
router.put("/profile", reqiredSignin, updateProfileController);

//orders
router.get("/orders", reqiredSignin, getOrdersController);

//all orders
router.get("/all-orders", reqiredSignin, isAdmin, getAllOrdersController);

// order status update
router.put(
  "/order-status/:orderId",
  reqiredSignin,
  isAdmin,
  orderStatusController
);

export default router;
