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

const insertData = async(
   ID,
   name,
   lastname,
   jobType,
   sallary,
   email
)=>{
   const pool = new Pool(db.database);
   const insert =  `insert into public.workers(ID,name,lastname,jobType,sallary,email)
   values(${ID},'${name}','${lastname}','${jobType}','${sallary}','${email}')`; 

   const result = await pool.query(insert);
   let message="data is inserted";
   if (result.affectedRows) {
      message:message;
   }
   console.log("data is inserted");
   pool.end();
   return result;
  
}

// insertData(5,"lokesh","khot","web develeoper",2700,"lokesh@@gmail.com")

const getData = async(id)=>{
   const pool = new Pool(db.database);
   const showData = ` select * from public.workers WHERE Id = ${id}`
   const result  = await pool.query(showData);
   let message="showing data on console"
   if (result.affectedRows) {
      message:message;
   }
   console.log(result.rows);
   pool.end();
   return result.rows
}
// getData(2)

const getEmail = async(email)=>{
   const pool = new Pool(db.database);
   const showData = `select * from public.workers WHERE email = ' '`
   let result = await pool.query(showData);
   if (result.affectedRows) {
      message:result
   }
   console.log(result.rows);
   pool.end()
   
   return result.rows
}

// getEmail("chetna@gmail.com")

const updateData = async(
   ID,
   name,
   lastname,
   jobType,
   sallary,
   email
   )=>{
      const pool = new Pool(db.database);
      const update = `UPDATE public.workers SET name = '${name}', lastname ='${lastname}', jobType='${jobType}', sallary ='${sallary}', email='${email}' WHERE ID = ${ID}`;
      const result = await pool.query(update);
      let message ="update a data";
      if (result.affectedRows) {
         message:result
      }
      pool.end();
      console.log("updated data successfully");
      console.log(result.rows);
      return result.rows
   }

   // updateData(2,"laddu","bhanarkar","computers",25000,"chetna@getMaxListeners.com",)


   const deleteData = async(ID)=>{
      const pool = new Pool(db.database);
      const deletedetails = `DELETE FROM public.workers Where ID = ${ID}`;
      const result = await pool.query(deletedetails);
      let message ="delete data sucessfully";
      if (result.affectedRows) {
         message:message
      }
      pool.end();
      return result.rows
   }


   module.exports={insertData,getData,getEmail,updateData,deleteData}
