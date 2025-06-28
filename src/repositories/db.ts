import { MongoClient } from "mongodb"
import {WithId} from 'mongodb'


export type UserDBType = WithId<{
    
    login: string
    email: string
    passwordHash: string
    passwordSalt: string
}>

const uri = process.env.uri || "mongodb://localhost:27017"

const client = new MongoClient(uri)

const db = client.db("jwt-auth")

export const usersCollection = db.collection<UserDBType>('users')

export const runDB = async () => {
    try {
        await client.connect()
        await  client.db("jwt-auth").command({ping: 1})
        console.log("You successfully connect to MongoDB!")
    } catch (err) {
        console.log(err)
        console.log("Connect error to MongoDB!")
        await client.close()
    }

}

