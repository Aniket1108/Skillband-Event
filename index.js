const logger=require('./middleware/logger');
const express=require('express');
const cors=require('cors');

const corsOption={
    "origin":"*"
}

const app=express();
const userRoutes=require('./routes/user')
const dbConn = require('./config/db.conn');

const port=process.env.PORT || 5000

app.use(cors(corsOption));
app.use(express.json());
app.use(logger);

app.use(userRoutes);

dbConn();

// heroku
if(process.env.NODE_ENV == "production"){
    app.use(express.static("client/build"));

}



app.listen(port,()=>{
    console.log(`server started at port ${port}`);
})
