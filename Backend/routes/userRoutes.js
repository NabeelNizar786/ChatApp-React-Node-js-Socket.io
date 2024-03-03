const express = require("express");
const router = express.Router();
const { registerUser, authUser, allusers } = require("../controllers/userControllers");
const { protect } = require("../middlewares/authMiddleware");

router.route("/register").post(registerUser).get(protect,allusers);
router.post("/login", authUser);

module.exports = router;
