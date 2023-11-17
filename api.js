const express = require("express");
const app = express();
const service = require("./service");
const router = express.Router();

router.post("/insertData", async (req, res) => {
  let ID = req.body.ID;
  let name = req.body.name;
  let lastname = req.body.lastname;
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



router.get("/getData/:ID", async (req, res) => {
  let ID = req.params.ID;
  let dbResponse = await service.getDataService(ID);
  if (dbResponse) {
    return res.status(200).json({ message: "success", message: dbResponse });
  } else {
    return res.status(404).json({ message: "fail" });
  }
});

router.post("/getEmail", async (req, res) => {
  let ID = req.body.ID;
  let name = req.body.name;
  let lastname = req.body.lastname;
  let jobType = req.body.jobType;
  let sallary = req.body.sallary;
  let email = req.body.email;
  let dbResponse = await service.getEmailService(email);
  // if (dbResponse) {
  //   return res.status(200).json({ message: "success", message: dbResponse });
  // } else {
  //   return res.status(404).json({ message: "fail" });
  // }
  console.log(dbResponse);
  try {
    if (dbResponse >= 0) {
      let result = await service.insertService(
        ID,
        name,
        lastname,
        jobType,
        sallary,
        email
      );
      res.status(200).json({
        status: "Success",
        message: "data inserted successfully",
        data: result,
      });
    } else {
      res.status(409).json({
        status: "fail",
        message: "email already exists",
      });
    }
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: error.message,
    });
  }
});

router.put("/updateData:ID", async (req, res) => {
  let ID = req.params.ID;
  let name = req.body.name;
  let lastname = req.body.lastname;
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

router.delete("/deleteData:ID", async (req, res) => {
  let ID = req.params.ID;
  const dbResponse = await service.deleteService(ID);
  if (dbResponse) {
    return res.status(200).json({ message: "success", message: dbResponse });
  } else {
    return res.status(404).json({ message: "fail" });
  }
});

module.exports = router;
