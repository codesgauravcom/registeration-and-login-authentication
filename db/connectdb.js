import mongoose from 'mongoose';

const DB = 'mongodb+srv://gaurav:gauravsingh@cluster0.eaywv.mongodb.net/logindata?retryWrites=true&w=majority'

mongoose.connect( DB ||'mongodb://localhost:27017/test', {useNewUrlParser: true,useUnifiedTopology: true, })
.then(() => console.log('mongo db connected'))
.catch(err => console.log(err));

const connectDB = async (DATABASE_URL) => {
 try {
  const DB_OPTIONS = {
   dbName: 'blogdb',
  }
  await mongoose.connect(DATABASE_URL, DB_OPTIONS);
  console.log('Connected Successfully..');
 } catch (err) {
  console.log(err);
 }
}

export default connectDB