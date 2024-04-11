import express from "express";
const router = express.Router();
import {
  getUsers,
  getUserById,
  getUserProfile,
  updateUser,
  updateUserProfile,
  logoutUser,
  deleteUser,
  registerUser,
  authUser,
} from "../controllers/userController.js";
import { protect, admin } from "../middleware/authMiddleware.js";

router.route("/").post(registerUser).get(protect, admin, getUsers);
router.post("/logout", logoutUser);
router.post("/auth", authUser);
router
  .route("/profile")
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile);
router
  .route("/:id")
  .delete(protect, admin, deleteUser)
  .get(protect, admin, getUserById)
  .put(protect, admin, updateUser);

export default router;

// // userRoutes.js
// import express from "express";
// const router = express.Router();
// import {
//   getUsers,
//   getUserById,
//   getUserProfile,
//   updateUser,
//   updateUserProfile,
//   logoutUser,
//   deleteUser,
//   registerUser,
//   authUser,
// } from "../controllers/userController.js";

// router.route("/").get(getUsers);
// router.post("/logout", logoutUser);
// router.post("/login", authUser); // Corrected route for login
// router.post("/register", registerUser);
// router.route("/profile").get(getUserProfile).put(updateUserProfile);
// router.route("/:id").delete(deleteUser).get(getUserById).put(updateUser);

// export default router;
