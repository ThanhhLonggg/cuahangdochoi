var mongoose = require('mongoose');
var personSchema = mongoose.Schema(
{
    NameCustomer : String,
    Phonenumber : Number,
    Address: String,
    Feedback: String,
}
);
 var feedbackModel = mongoose.model("feedback",personSchema, "feedback" );

module.exports=feedbackModel;