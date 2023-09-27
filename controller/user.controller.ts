// controllers/userController.ts

import { Request, Response } from "express";
const { user } = require("../models");

export const createUser = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { firstName, lastName, email } = req.body;

    const result = await user.create({
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
  } catch (err: any) {
    console.error(err);
    res.status(400).json({
      status: false,
      message: "Internal server error",
      data: err.message,
    });
  }
};

export const getuser = async (req: Request, res: Response): Promise<void> => {
  try {
    const result = await user.findAll({});
    if (result) {
      res.status(200).json({
        status: true,
        message: "user get successfully",
        data: result,
      });
    }
  } catch (err: any) {
    console.error(err);
    res.status(400).json({
      status: false,
      message: "Internal server error",
      data: err.message,
    });
  }
};
export const updateuser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { firstName, lastName, email } = req.body;
    const result = await user.update({
        firstName:firstName,
        lastName:lastName,
        email:email
    },
    {
        where:{
            id:id
        }
    })
    if(result){
        res.status(200).json({
            status:true,
            message:"User update successfully",
            data:result
        })
    }
  } catch (err: any) {
    console.error(err);
    res.status(400).json({
      status: false,
      message: "Internal server error",
      data: err.message,
    });
  }
};

export const removeuser = async(req:Request,res:Response)=>{
    try{
        const {id}=req.params
        const result = await user.destroy({
            where:{
                id:id
            }
        })
        if(result){
            res.status(200).json({
                status:true,
                message:"user remove successfully",
                data:result
            })
        }
    }   
    catch (err: any) {
        console.error(err);
        res.status(400).json({
          status: false,
          message: "Internal server error",
          data: err.message,
        });
      }
}
