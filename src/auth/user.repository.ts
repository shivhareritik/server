import { EntityRepository, Repository } from "typeorm";
import { User } from "./user.entity";
import * as bcrypt from 'bcrypt'
import { authCredentialDto } from "./dto/authCredentials.dto";

@EntityRepository(User)
export class userRepository extends Repository<User> {
    async signup(authCredentialDto: authCredentialDto): Promise<User> {
        const {password, userName} = authCredentialDto;
        // const exist = this.findOne({userName});
        // if(exist) {

        // }
        const user = new User()
        user.salt = await bcrypt.genSalt();
        user.password = await this.hashPassword(password, user.salt);
        user.userName = userName;
        console.log(user)
        try {
            await user.save();
            
        } catch (error) {
            console.log(error.code)            
        }
        return user;
    }

    private async hashPassword(password, salt): Promise<string> {
        return bcrypt.hash(password, salt);
    }

    async validateUserPassword(authCredentialDto: authCredentialDto): Promise<any> {
        const {password, userName} = authCredentialDto;
        // const user = new User()
        const user = await this.findOne({userName})       
        if(user && await this.validatePassword(user.salt, password, user.password)) {
            return user;
        } else {
            return null;
        }
    }

    async validatePassword(salt, password: string, psw): Promise<boolean> {
        const hash = await bcrypt.hash(password, salt)
        return hash == psw
    }

}