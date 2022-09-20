import mongoose from 'mongoose';

export class DbService {
  static async save(model: mongoose.Model<any>, data: any[]) {
    return model.insertMany(data);
  }
}
