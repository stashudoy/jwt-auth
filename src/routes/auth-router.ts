import { jwtService } from '../application/jwt-service'
import {usersService} from '../domain/users-service'
import {Request, Response, Router} from 'express'



export const authRouter = Router({})


authRouter.post('/login',
    async (req: Request, res: Response) => {
        const result = await usersService.checkCredentials(req.body.login, req.body.password)
        if(result){
            const user = await usersService.findUserByLogin(req.body.login)
            if(user){
                console.log(user)
                const token = await jwtService.createJWT(user)
                res.status(201).send(token)
            }
        } else {
            res.sendStatus(401)
        }        
    }
)