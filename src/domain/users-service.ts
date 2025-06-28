import { ObjectId } from 'mongodb';
import { usersReposytory } from '../repositories/users-repositories';
import { UserDBType } from './../repositories/db';
import bcrypt from 'bcrypt'


export const usersService = {
    async createUser(login: string, email: string, password: string): Promise<UserDBType>
    {
       const passwordSalt = await bcrypt.genSalt(10)
       const passwordHash = await this._generateHash(password, passwordSalt)
       let user = ({_id: new ObjectId(), login, email, passwordHash, passwordSalt})
       return usersReposytory.createUser(user)
   },
   
    async checkCredentials(login: string, password: string):Promise<boolean> {
        const user = await usersReposytory.findByLogin(login)
        if(!user) return false
        const passwordHash = await this._generateHash(password, user.passwordSalt)
        if(user.passwordHash !== passwordHash){
            return false
        }
        return true
    },

    async _generateHash(password: string, salt: string) {
        const hash = await bcrypt.hash(password, salt)
        return hash
    },


    async findUsers(): Promise<UserDBType[]> {
        return usersReposytory.getAllUsers()
    },

    async findUserByLogin(login: string): Promise<UserDBType | null> {

        return usersReposytory.findByLogin(login)
    },

    async findUserById(id: ObjectId): Promise<UserDBType | null> {

        return usersReposytory.findUserById(id)
    }




}