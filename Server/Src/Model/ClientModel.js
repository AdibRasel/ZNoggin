const Mongoose = require("mongoose");
const DataSchema = Mongoose.Schema({
    ClientID:{type:String},
    TodaysDate:{type:String},
    LastName:{type:String},
    FirstName:{type:String},
    ClientOrSomeoneElse:{type:String},
    ContactName:{type:String},
    PhonNumber:{type:String},
    EmailAddress:{type:String},
    DateOfBirth:{type:String},
    TrainingLocation:{type:String},
    Gender:{type:String},
    Handedness:{type:String},
    Midications:{type:String},
    Timezone:{type:String},
    Medication:{type:String},
    Supplements:{type:String},
    EmotionalSelfAwareness:{type:String},
    HaveYouEverRecivedOfFollowing:{type:String},
    // createdDate:{type:String, default:Date.now()},
    CreateDate:{type:Date, default:Date.now()},
}, {versionKey:false});
const TaskModel = Mongoose.model("Client_Info",DataSchema);
module.exports = TaskModel;