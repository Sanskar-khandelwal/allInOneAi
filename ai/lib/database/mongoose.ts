import mongoose, {Mongoose} from "mongoose"

const MONGO_URI = "mongodb+srv://dovesam04:SDFGT5Gyi2nmZ17k@cluster0.iywnj1s.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
console.log("this is mongouri", MONGO_URI)

interface MongooseConnection {
    conn: Mongoose | null;
    promise: Promise<Mongoose> | null;

}


let cached : MongooseConnection = (global as any).mongoose

if(!cached){
    cached = (global as any).mongoose = { conn: null, promise: null}
}

export const connectToDatabase = async () => {
    if(cached.conn) return cached.conn;

    if(!MONGO_URI) throw new Error("MONGODB URI IS NOT DEFINED")

    cached.promise = cached.promise || mongoose.connect(MONGO_URI, {
        dbName: "allinOneAi",
        bufferCommands: false
    })

    cached.conn = await cached.promise

    return cached.conn

}