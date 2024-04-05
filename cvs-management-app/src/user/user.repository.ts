import { User } from "./entities/user.entity";
import {Repository } from "typeorm";
@Repository(User)
export class UserRepository extends Repository<User>{
    async createU(username: string, email: string, password: string): Promise<User> {
        const user = new User();
        user.username=username;
        user.email=email;
        user.password=password;
        await this.save(user);
        return user;
      }
    
}