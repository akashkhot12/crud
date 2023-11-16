const {Pool,Client,Query}= require("pg");
const db  = require("./connections");
const { create } = require("domain");

const query = async(req,res)=>{
   const pool = new Pool(db.database);
   const result  = pool.query(sql,(err,res)=>{
       if (err) {
          throw err 
       }
        return result;
   })
}

const createTable = async()=>{
   const pool = new Pool(db.database);
   const generateTable  = `CREATE TABLE IF NOT EXISTS public.workers (
       Id INT PRIMARY KEY,
       name VARCHAR(50) NOT NULL,
       lastname VARCHAR(50),
       jobType VARCHAR(50),
       sallary VARCHAR(100),
       email varchar(50) UNIQUE
     );`

     const result  = pool.query(generateTable);
     console.log("your table was created");
     pool.end();

}

// createTable();