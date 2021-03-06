const fs = require("fs");
const { Router } = require("express");
const router = Router();
const { checkAuth, timeStamp } = require("../middlewares/users.middleware");
const {createUser,getAllusers,getUser} = require("../controllers/users.controller")


// get all users
router.get("/users", checkAuth,getAllusers)

// get user by id
router.get("/users/:id", checkAuth, getUser);

// add new user
router.post("/users", timeStamp,createUser);

  
module.exports = router;
