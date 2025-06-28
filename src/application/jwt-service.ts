import { UserDBType } from "../repositories/db"
import jwt from 'jsonwebtoken'
import {settings} from '../settings'
import { ObjectId } from 'mongodb';

export const jwtService = {
    async createJWT(user: UserDBType) {
        const token = jwt.sign({login: user.login}, settings.JWT_SECRET, {expiresIn: '1h'})
        return {
            resultCode: 0, 
            data: {
                token: token
            }
        }
    },

    async getUseIdByToken(token: string){
        try {
            const result: any = jwt.verify(token, settings.JWT_SECRET)
            return new ObjectId(result.userId)
            
        } catch (err) {
            
            return null
        }
    }
}