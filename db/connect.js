import mongoose from 'mongoose'

const connectDB = (url) => {
  console.log(url)
  return mongoose.connect('mongodb+srv://lokesh:P.lokeshn25@cluster0.rf9diux.mongodb.net/?retryWrites=true&w=majority')
}
export default connectDB
