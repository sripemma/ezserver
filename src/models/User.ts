import * as mongoose from 'mongoose';

interface IUser{
    first_name:string;
    last_name:string;
    email:string;
}

interface IUserModel extends IUser, mongoose.Document{};
var userSchema = new mongoose.Schema({
    first_name: String,
    last_name: String,
    email: String,
    password: String
});

var User = mongoose.model<IUserModel>("User", userSchema);

export = User;