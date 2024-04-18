// user.service.ts
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from './user.model';

@Injectable()
export class UserService {
    constructor(@InjectModel(User.name) private readonly userModel: Model<UserDocument>) {}

    async createUser(user: User): Promise<User> {
        const createdUser = new this.userModel(user);
        console.log(createdUser);
        return await createdUser.save();
    }

    async findUserByEmail(email: string): Promise<User | null> {
        return this.userModel.findOne({ email }).exec();
    }

    async updateUser(id: string, updateUserDto: Partial<User>): Promise<User> {
        return this.userModel.findByIdAndUpdate(id, updateUserDto, { new: true }).exec();
    }

    async deleteUser(id: string): Promise<User> {
        return this.userModel.findByIdAndDelete(id).exec();
    }

    async getAllUsers(): Promise<User[]> {
        return this.userModel.find().exec();
    }
}
