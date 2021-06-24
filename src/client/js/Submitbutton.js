// we will import  validateUrl function from checkURL.js file 
import { validateUserUrl } from "./checkUserURL";
//from https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
//here we make a post request to post the response that coming from the server to the client by making an async function called postthecomingData
 async  function postthecomingData (ourData = {} ) { //the function take an object data as parameter
    //we will make variable called response to wait to fetch the response that coming from the server by entering the url and the port of the server
    const response = await fetch("http://localhost:3000/add-the-user-url",{//the method is post
        method: 'POST',
        credentials: 'same-origin',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        },// the coming data  will be in JSON
        body: JSON.stringify(ourData)
    }); //the response will be in json
    return response.json()
}
//we will make an async function that called SubmitButton that will take the data from the server after making a post to it on the client and converting it to the JSON
async function SubmitButton (event) {
    event.preventDefault()    
    // we will get the value of input url and use if statement to pass this value to the validateUserUrl function
    const entered_url = document.getElementById("artical-url").value;
    if (validateUserUrl(entered_url)) {//if the url is valid then we will post the url in the backend
  // post function take the url and data which is the url from the user and the data that coming from the api(maening cloud) and the data from the entered url and send them to the frontend or the browser
        postthecomingData({entered_url}).then
            (ourData=>{ // we will get the data and post it on the client or send it to the frontend
                
                document.getElementById("myAgreement").innerHTML = `Our Agreement is: ${ourData.agreement}`,
                document.getElementById("mySubjectivity").innerHTML = `Our Subjectivity is: ${ourData.subjectivity}`,
                document.getElementById("myConfidence").innerHTML = `Our Confidence is: ${ourData.confidence}`,
                document.getElementById("myIrony").innerHTML = `Our Irony: ${ourData.irony}`,
                document.getElementById("myScore_tag").innerHTML = `Our Score_tag: ${ourData.score_tag}`
                
            });
        
    } 
    else {// if the user doesn't enter a valid url then we will show alert or message to till him to enter a valid url
       alert ("Please enter a valid url");
    }
}
//we will export SubmitButton to import and use it 
export { SubmitButton}

