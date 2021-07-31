const User=require('../models/userModel');
const bcryt=require('bcryptjs');
const joi=require('joi');
const handlebars=require('handlebars');
var smtpTransport = require('nodemailer-smtp-transport');
const fs=require('fs');
const secretKey="meanstack2021";
var nodemailer = require('nodemailer');

var emailRegex = /^[-!#$%&'*+\/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;

let date_ob = new Date();
let date = ("0" + date_ob.getDate()).slice(-2);
let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
let year = date_ob.getFullYear();
let hours = date_ob.getHours();
let minutes = date_ob.getMinutes();
let seconds = date_ob.getSeconds();
var time=hours+":" + minutes;
var ddate=year + "-" + month + "-" + date;

function isEmailValid(email) {
    if (!email)
        return false;

    if(email.length>254)
        return false;

    var valid = emailRegex.test(email);
    if(!valid)
        return false;
    var parts = email.split("@");
    if(parts[0].length>64)
        return false;

    var domainParts = parts[1].split(".");
    if(domainParts.some(function(part) { return part.length>63; }))
        return false;

    return true;
}

exports.register=async (req,res)=>{
    if(isEmailValid(req.body.email)){
        const userSchema=joi.object({
            fullname:joi.string().required().min(4),
            email:joi.string().required()
            // phone: joi.number().integer().min(1000000000).max(9999999999).required(),
            
        })

        try{
            let userfields= await userSchema.validateAsync(req.body)       
            let user=await User.findOne({email:userfields.email});
            var name=userfields.fullname;
            if(!user){
    
                user=new User(userfields)
                await user.save();
                res.status(200).json({
                    message:"user registered successfully",
                    userData:user,
                    time: time,
                    date:ddate
                })                

                var readHTMLFile = function(path, callback) {
                    fs.readFile(path, {encoding: 'utf-8'}, function (err, html) {
                        if (err) {
                            throw err;
                            callback(err);
                        }
                        else {
                            callback(null, html);
                        }
                    });
                };

                var transporter = nodemailer.createTransport({
                    service: 'gmail',
                    auth: {
                      user: 'skillband303@gmail.com',
                      pass: 'skillband@123'
                    }
                });

            

                readHTMLFile('./email/card.html', function(err, html) {
                    var template = handlebars.compile(html);
                    var replacements = {
                         username: name,
                         date:ddate,
                         time:time

                    };
                    var htmlToSend = template(replacements);
                    var mailOptions = {
                        from: 'skillband303@gmail.com',
                        to : userfields.email,
                        subject : 'The Ultimate Performer',
                        html : htmlToSend
                     };
                    transporter.sendMail(mailOptions, function (error, response) {
                        if (error) {
                            console.log(error);
                            callback(error);
                        }
                    });
                });
                

                
            }else{
                res.status(400).json({
                    message:"user already registered with this email id",            
                })
            }
    
        }catch(err){
            res.status(500).json({
                message:"Something Went Wrong",
                error:err
            })
        }
    }else{
        res.status(500).json({
            message:"enter valid email"
        })
    }

    
    
    

}