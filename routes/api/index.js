const router = require("express").Router();
const userRoutes = require("./users");

// If we had routes we'd import them here.
router.use("/users", userRoutes);

module.exports = router;
