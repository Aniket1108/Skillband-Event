const mongoose=require('mongoose');
const dbConfig=require('./db.config');

const dbConn = async()=>{
  await mongoose.connect(dbConfig.uri,{useNewUrlParser:true,useUnifiedTopology:true},()=>{
    console.log('connected to database');
  })
}
  
module.exports = dbConn;
  