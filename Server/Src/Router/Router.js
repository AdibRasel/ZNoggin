const Express = require("express");
const Controller = require("../Controller/Controller");
const Router = Express.Router();



// C == Create 
Router.post("/Create", Controller.Create)

// R == Read 
Router.get("/Read", Controller.Read)

// U == Update
Router.post("/Update/:id", Controller.Update)

// D == Delete 
Router.post("/Delete", Controller.Delete)



module.exports = Router