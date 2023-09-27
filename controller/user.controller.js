"use strict";
// controllers/userController.ts
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeuser = exports.updateuser = exports.getuser = exports.createUser = void 0;
const { user } = require("../models");
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { firstName, lastName, email } = req.body;
        const result = yield user.create({
            firstName,
            lastName,
            email,
        });
        if (result) {
            res.status(200).json({
                status: true,
                message: "User created successfully",
                data: result,
            });
        }
    }
    catch (err) {
        console.error(err);
        res.status(400).json({
            status: false,
            message: "Internal server error",
            data: err.message,
        });
    }
});
exports.createUser = createUser;
const getuser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield user.findAll({});
        if (result) {
            res.status(200).json({
                status: true,
                message: "user get successfully",
                data: result,
            });
        }
    }
    catch (err) {
        console.error(err);
        res.status(400).json({
            status: false,
            message: "Internal server error",
            data: err.message,
        });
    }
});
exports.getuser = getuser;
const updateuser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const { firstName, lastName, email } = req.body;
        const result = yield user.update({
            firstName: firstName,
            lastName: lastName,
            email: email
        }, {
            where: {
                id: id
            }
        });
        if (result) {
            res.status(200).json({
                status: true,
                message: "User update successfully",
                data: result
            });
        }
    }
    catch (err) {
        console.error(err);
        res.status(400).json({
            status: false,
            message: "Internal server error",
            data: err.message,
        });
    }
});
exports.updateuser = updateuser;
const removeuser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const result = yield user.destroy({
            where: {
                id: id
            }
        });
        if (result) {
            res.status(200).json({
                status: true,
                message: "user remove successfully",
                data: result
            });
        }
    }
    catch (err) {
        console.error(err);
        res.status(400).json({
            status: false,
            message: "Internal server error",
            data: err.message,
        });
    }
});
exports.removeuser = removeuser;
