const express = require("express");
const app = express();
const service = require("./service");
const router = express.Router();

router.post("/insertData", async (req, res) => {
  let ID = req.body.ID;
  let name = req.body.name;
  let lastname = req.bosy.lastname;
  let jobType = req.body.jobType;
  let sallary = req.body.sallary;
  let email = req.body.email;

  let dbResponse = await service.insertService(
    ID,
    name,
    lastname,
    jobType,
    sallary,
    email
  );
  console.log(dbResponse);
  res.status(200).json({ status: "success", message: dbResponse });
});

router.get("/getData:ID", async (req, res) => {
  let ID = req.params.ID;
  let dbResponse = await service.getDataService(ID);
  if (dbResponse) {
    return res.status(200).json({ message: "success", message: dbResponse });
  } else {
    return res.status(404).json({ message: "fail" });
  }
});

router.get("/getEmail:email", async (req, res) => {
  let email = req.params.email;
  let dbResponse = await service.getDataService(email);
  if (dbResponse) {
    return res.status(200).json({ message: "success", message: dbResponse });
  } else {
    return res.status(404).json({ message: "fail" });
  }
});

router.put("/updateData:ID",async(req,res)=>{
    let ID = req.params.ID;
  let name = req.body.name;
  let lastname = req.bosy.lastname;
  let jobType = req.body.jobType;
  let sallary = req.body.sallary;
  let email = req.body.email;

  let dbResponse = await service.insertService(
    ID,
    name,
    lastname,
    jobType,
    sallary,
    email
  );
  console.log(dbResponse);
  res.status(200).json({ status: "success", message: dbResponse });
})

router.delete("/deleteData:ID",async(req,res)=>{
    let ID = req.params.ID;
    const dbResponse = await service.deleteService(ID);
    if (dbResponse) {
        return res.status(200).json({ message: "success", message: dbResponse });
      } else {
        return res.status(404).json({ message: "fail" });
      }
})

module.exports = router;
