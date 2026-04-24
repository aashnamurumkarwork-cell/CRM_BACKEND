import mysql2 from "mysql2/promise"
import { denv } from "./config.env.js"



const pool = mysql2.createPool({
    host:denv.HOST,
    user:denv.USER,
    password:denv.PASSWORD,
    database:denv.DATABASE

})

 export const connection = async () => {
  try {
    const conn = await pool.getConnection();
    console.log("✅ Database Connected Successfully");
    conn.release();
  } catch (error) {
    console.error("❌ Database Connection Failed:", error.message);
    process.exit(1); // stop server if DB is dead
  }
};

export default pool



