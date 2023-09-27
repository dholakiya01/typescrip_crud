'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_controller_1 = require("../controller/user.controller");
const app = (0, express_1.default)();
const router = express_1.default.Router();
router.post("/create", user_controller_1.createUser);
router.get("/", user_controller_1.getuser);
router.put("/update/:id", user_controller_1.updateuser);
router.delete("/remove/:id", user_controller_1.removeuser);
exports.default = router;
