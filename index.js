const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const chalk = require('chalk')
const pdf = require('html-pdf');
const options = { format: 'Letter' };




var server = app.listen(8081, function () {
    var host = server.address().address
    var port = server.address().port
    console.log("Example app listening at http://%s:%s", host, port)
 })



 app.get('/generate_pdf',function(req,res){


    exports.pdf= function(req,res){
    
     res.render('path to your tempalate', {
        /Users/admin/Documents/assignment/input.html
    }, function (err, HTML) {
        pdf.create(HTML, options).toFile('./downloads/solutions.pdf', function (err, result) {
            if (err) {
                return res.status(400).send({
                    message: errorHandler.getErrorMessage(err)
                });
            }
        })
    });

}



 })