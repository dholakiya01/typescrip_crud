'use strict';

import express from "express";
import { createUser, getuser, removeuser, updateuser } from "../controller/user.controller";
const app = express();
const router = express.Router();

router.post("/create", createUser);
router.get("/", getuser);
router.put("/update/:id", updateuser);
router.delete("/remove/:id", removeuser);

export default router
