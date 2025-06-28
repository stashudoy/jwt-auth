import { ObjectId } from "mongodb";
import { UserDBType, usersCollection } from "./db";

export const usersReposytory = {

    async createUser(user: UserDBType): Promise<UserDBType>{
        const result =  usersCollection.insertOne(user) 
        return user
    },
        
    async findByLogin(login: string): Promise<UserDBType | null> {
        const user = await usersCollection.findOne({login: login})  // findOne({$or: [{email: loginOrEmail}, {login: loginOrEmail},  ]})
        return user
    },  
    
    async getAllUsers(): Promise<UserDBType[]> {
        return usersCollection
            .find()
            .toArray()
    },

    async findUserById(id: ObjectId): Promise<UserDBType | null> {
        const user = await usersCollection.findOne({_id: id})  // findOne({$or: [{email: loginOrEmail}, {login: loginOrEmail},  ]})
        return user
    },  


}