const ClientModel = require("../Model/ClientModel")

// C == Reate
exports.Create=(Req, Res)=>{
    let ReqBody = Req.body;
    ClientModel.create(ReqBody, (Error, Data)=>{
        if(Error){
            Req.status(400)
            Res.json({
                Status:"Create Fail (Error)",
                Data:Error
            })
        }else{
            Req.status(200)
            Res.json({
                Status:"Create Fail (Success)",
                Data:Data
            })
        }
    })
}








// R = Read
exports.Read=(Req, Res)=>{
    // let Query = Req.body;
    let Query = {};
    let Projection = "ClientID TodaysDate LastName FirstName ClientOrSomeoneElse PhonNumber EmailAddress DateOfBirth TrainingLocation Gender Handedness Midications Timezone Medication Supplements EmotionalSelfAwareness HaveYouEverRecivedOfFollowing"
    ClientModel.find(Query, Projection, (Error, Data)=>{
        if(Error){
            Req.status(400)
            Res.json({
                Status:"Read Fail (Error)",
                Data:Error
            })
        }else{
            Req.status(200)
            Res.json({
                Status:"Read Fail (Success)",
                Data:Data
            })
        }
    })
}


//U = Update
exports.Update =(Req, Res)=>{
    let Id = Req.params.id;
    let Query = {_id:Id};
    let ReqBody = Req.body;
    ClientModel.updateOne(Query, ReqBody, (Error, Data)=>{
        if(Error){
            Req.status(400)
            Res.json({
                Status:"Update Fail (Error)",
                Data:Error
            })
        }else{
            Req.status(200)
            Res.json({
                Status:"Update Fail (Success)",
                Data:Data
            })
        }
    })
}



// U = Delete
exports.Delete = (Req, Res)=>{
    let Id = Req.params.id;
    let Query = {_id : Id};
    ClientModel.remove(Query, (Error, Data)=>{
        if(Error){
            Req.status(400)
            Res.json({
                Status:"Update Fail (Error)",
                Data:Error
            })
        }else{
            Req.status(200)
            Res.json({
                Status:"Update Fail (Success)",
                Data:Data
            })
        }
    })
}