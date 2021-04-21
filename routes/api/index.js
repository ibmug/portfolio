const router = require("express").Router();
const userRoutes = require("./users");
const postRoutes = require("./posts");
//UserRoutes

router.use("/users", userRoutes);
router.use("/post", postRoutes);

module.exports = router;
