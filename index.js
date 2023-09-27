"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_routes_1 = __importDefault(require("./routes/user.routes"));
const app = (0, express_1.default)();
const port = 4000;
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use(user_routes_1.default);
// app.get('/', async(req, res) => {
//     return res.status(200).send({ message: `Welcome to the cookbook API! \n Endpoints available at http://localhost:${port}/api/v1` })
// })
app.listen(port, () => {
    console.log(`Server running on 4000`);
});
