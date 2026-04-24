import app from "./src/app.js";
import { port } from "./src/config/config.env.js";
import { connection } from "./src/config/config.db.js";


app.listen(port , ()=>{
    console.log(`http://localhost:${port}`)
    connection()
})


