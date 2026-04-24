import dotenv from "dotenv"

dotenv.config()

export const port=process.env.PORT

// database
 export const denv = {
    HOST:process.env.HOST,
    USER:process.env.USER,
    PASSWORD:process.env.PASSWORD,
    DATABASE:process.env.DATABASE
 }

