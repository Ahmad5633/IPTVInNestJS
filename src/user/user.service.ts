import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from './user.model';
// import { Stream, StreamDocument } from '../stream/stream.model';
import * as bcrypt from 'bcrypt';
@Injectable()
export class UserService {
    constructor(@InjectModel(User.name) private readonly userModel: Model<UserDocument>) {}

    async createUser(user: User): Promise<User> {
        const hashedPassword = await this.hashPassword(user.password);
        const createdUser = new this.userModel({ ...user, password: hashedPassword });
        console.log(createdUser);
        return await createdUser.save();
    }

    async findUserByEmail(email: string): Promise<User | null> {
        return this.userModel.findOne({ email }).exec();
    }

    async updateUser(id: string, updateUserDto: Partial<User>): Promise<User> {
        if (updateUserDto.password) {
            updateUserDto.password = await this.hashPassword(updateUserDto.password);
        }
        return this.userModel.findByIdAndUpdate(id, updateUserDto, { new: true }).exec();
    }

    async deleteUser(id: string): Promise<User> {
        return this.userModel.findByIdAndDelete(id).exec();
    }

    async getAllUsers(): Promise<User[]> {
        return this.userModel.find().exec();
    }

    async updatePasswordByEmail(email: string, newPassword: string): Promise<void> {
        const hashedPassword = await this.hashPassword(newPassword);
        await this.userModel.updateOne({ email }, { password: hashedPassword }).exec();
    }

    private async hashPassword(password: string): Promise<string> {
        const saltRounds = 10; 
        return bcrypt.hash(password, saltRounds);
    }

    async findOneByEmail(email: string): Promise<User | undefined> {
        return this.userModel.findOne({ email }).exec();
      }
    
      async validateUserPassword(password: string, hashedPassword: string): Promise<boolean> {
        return bcrypt.compare(password, hashedPassword);
      }
}





