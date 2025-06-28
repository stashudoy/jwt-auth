import { NextFunction,Request,Response } from "express"
import { jwtService } from "./jwt-service"
import { usersService } from "../domain/users-service"

export const authMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    if(!req.headers.authorization){
        res.sendStatus(401)
        return
    }

    const token = req.headers.authorization.split(' ')[1]  //"bearer token<>x.y.z"  //base login.password_in_base64

    const userId = await jwtService.getUseIdByToken(token)
    if(userId) {
        req.user = await usersService.findUserById(userId)
        next()
    }
    res.send(401)
    next()
}