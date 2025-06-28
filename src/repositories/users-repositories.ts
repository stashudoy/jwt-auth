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
}