import express, {Request, Response} from 'express'
import {runDB} from './repositories/db'
import { usersRouter } from './routes/users-router'
import { authRouter } from './routes/auth-router'

const app = express()
app.use(express.json())  //TypeError: Cannot read properties of undefined (reading 'login')

const PORT = process.env.port || 5000


app.use('/', usersRouter)
app.use('/', authRouter)


app.get('/', (req: Request, res: Response)=> {
    res.send("hello, tester!")
})




const startApp = async () => {

    await runDB    
    app.listen(PORT, () => {
        console.log(`Server run on port: ${PORT}`)
    })
}

startApp()


