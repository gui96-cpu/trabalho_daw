import mongoose from "mongoose";

const conecxao = await mongoose.connect("mongodb://aluno:aluno@cluster0-shard-00-00.zqepw.mongodb.net:27017,cluster0-shard-00-01.zqepw.mongodb.net:27017,cluster0-shard-00-02.zqepw.mongodb.net:27017/?ssl=true&replicaSet=atlas-cop1yy-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0")
//const conecxao = await mongoose.connect("mongodb://localhost:27017/ifstore');

export default conecxao