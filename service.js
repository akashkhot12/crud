const dao = require("./dao");

async function insertService(
    ID,
   name,
   lastname,
   jobType,
   sallary,
   email
){
     return await dao.insertData(
        ID,
        name,
        lastname,
        jobType,
        sallary,
        email
     )
}

// insertService(4,"john","loard","software eng","4 lacks","jhon2@gmail.com")

async function getDataService(ID){
    return await dao.getData(ID)
}

async function getEmailService(email){
    return await dao.getEmail(email);
}

async function getUpdateService( ID,
    name,
    lastname,
    jobType,
    sallary,
    email){
    
        return await dao.updateData( ID,
            name,
            lastname,
            jobType,
            sallary,
            email)
    }

    async function deleteService(ID){
        return await dao.deleteData(ID)
    }


    module.exports = {insertService,getDataService,getEmailService,getUpdateService,deleteService}