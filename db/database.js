import sql from "mysql2"

const db = sql.createConnection({
    host : 'localhost',
    user : 'root',
    password : '',
    database : 'forieng_keys'
    })

db.connect((err)=>{
    try {
        if (err) throw err;
        console.log("Connected to database");
    } catch (error) {
        console.log(error);
                
    }
})

export default db;