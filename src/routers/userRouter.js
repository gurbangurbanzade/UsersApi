const router = require("express").Router();
const userControllers = require("../controllers/userControllers");

router.post("/users", userControllers.postUser);
router.get("/users", userControllers.getAllUser);
router.get("/users/:id", userControllers.getUserById);
router.delete("/users/:id", userControllers.getDeleteUser);
router.patch("/users/:id", userControllers.getUpdateUser);
router.put("/users/:id", userControllers.getPutUser);

module.exports = router;
