import mongoose from "mongoose"
const { DB_HOST, DB_NAME, DB_USER, DB_PASS } = process.env

const uri = DB_HOST // mongodb://localhost:27017
const options = {
  dbName: DB_NAME,
  user: DB_USER,
  pass: DB_PASS,
}

export default mongoose.connect(uri, options)
