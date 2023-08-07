var fs = require ('fs');
var data = fs.readFileSync('TableApi.json');
var elements= JSON.parse(data);
const express = require("express");
const app = express();

//to solve the cors issue
const cors = require('cors');
app.listen(process.env.PORT,
    ()=> console.log("server startdd at the port"));

    app.use(express.static('public'));
    app.use(cors());

    //when get request si made all data is called
    app.get("/elements",alldata);
    function alldata(request, response){
        response.send(elements);
    }
    app.get("/elements/:element/", searchElement);

    function searchElement(request, response){
        var word = request.params.element;
        word = word.charAt(0).toUpperCase()
        + word.slice(1).toLowerCase();

        if(element[word]){
            var reply = elements[word];
        }
        else{
            var reply = {
                status : "Not found"
            }
        }
        response.send(reply);
    }