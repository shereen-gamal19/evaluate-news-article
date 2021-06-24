// i will make a Configure the environment variables
//we will use dotenv packages 
const dotenv = require('dotenv');
dotenv.config();

//we will use and configure express package as a middle-ware and store it in the variable called express
const express = require('express')
//app is our instance
const app = express();
//we will make the path 'dist'
app.use(express.static("dist"));

const mockAPIResponse = require('./mockAPI.js');
// our port is on 8081
const PORT = 3000;

// we will staore the api meaningcloud in the variable called Calling_API_URL 

const Calling_API_URL = 'https://api.meaningcloud.com/sentiment-2.1'
// we will use cors packages for cross origin allowance and store it in the variable called cors
const cors = require("cors");
//to use cors
app.use(cors());
//our dependencies 
//we will configure express to use body-parser as a middle-ware and store it in the variable calles bodyParser
const bodyParser = require("body-parser");
app.use( bodyParser.urlencoded({extended:true,defer:true}));
app.use(bodyParser.json());
//we will use axios to make fetch calls
const axios = require('axios');


app.get('/', function (req, res) {
    // we removed the reference of 'path.resolve('src/client/views/index.html) because we don't need it and we added dist/index.html
    res.sendFile("dist/index.html")
})

//we will make a post request so that when we get the user's url that coming from the frontend and make submit then we will post this url on the server i.e we send the url to the backend and send the response to the client
// i put my api key in the variable called my_api_key
const my_api_key = process.env.MY_API_KEY;

app.post('/add-the-user-url', async (req, res) => {//we will use the route called add-the-user-url andd we will make an async function 
    try {// i will request the url from the body and store it in the variable called The_coming_url
        const The_coming_url = req.body.entered_url;
       
        //here i put my api key in the .env  file and put it in .ignore get file and store it in this file in the variable called my_API_KEY 
        // from https://www.npmjs.com/package/axios#installing we will install axios to fetch the data that coming from the api after calling it 
        //we fetch the data from the api by using axios.get
        //we will build the URL in this from and put it in the variable called The_response_from_api
        const The_response_from_api = await axios.get(`${Calling_API_URL}?key=${my_api_key}&url=${The_coming_url}&lang=en`);
        
        const {// our server will send this data to the client 
          
            
            agreement,
            subjectivity,
            confidence,
            irony,
            score_tag
        } = The_response_from_api.data;
        //we will console.log the   The_response_from_api.data

        console.log(The_response_from_api.data);
        // our response to the client  will be the following data
        res.send({
            
            
            agreement,
            subjectivity,
            confidence,
            irony,
            score_tag

        });//we will print response
        console.log(res);
  // if we get an error then we will print error
    } catch (error) {
        console.log(error.message)
        alert("please enter a valid url")
    }
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})

// designates what port the app will listen to for incoming requests
app.listen(PORT, (error) => {
    if (error) throw new Error(error)
    console.log(`Server listening on port ${PORT}!`)
})


