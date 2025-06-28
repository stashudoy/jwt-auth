import {usersService} from '../domain/users-service'
import {Request, Response, Router} from 'express'



export const authRouter = Router({})


authRouter.post('/',
    async (req: Request, res: Response) => {
        const checkResult = await usersService.checkCredentials(req.body.login, req.body.password)
        if(checkResult){
            res.status(201).send("Good")
        } else {
            res.status(201).send("Oшибка авторизации")
        }        
    }
)