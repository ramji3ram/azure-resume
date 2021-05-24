window.addEventListener('DOMContentLoaded',(event) => {getVisitCount();})

const functionconnectionstrinapi = "https://az2406.azurewebsites.net/api/GetAzureResume?code=qvwkLoZpVUpR/71/sF7aV9GmKAjnqnfCJSx/d8Dv6TIUDRZfEmMGgA==";
const functionapi = 'http://localhost:7071/api/GetAzureResume';

const getVisitCount = () => {
    let count = 30
    fetch(functionconnectionstrinapi).then(resp => {return resp.json()}).then(resp => {
        console.log("web call"); 
        count = resp.count;
        document.getElementById("counter").innerText = count    }).catch(function (error) {
            console.log(error);
        });

        return count;
}