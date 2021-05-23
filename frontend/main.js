window.addEventListener('DOMContentLoaded',(event) => {getVisitCount();})

const functionapi = 'http://localhost:7071/api/GetAzureResume';

const getVisitCount = () => {
    let count = 30
    fetch(functionapi).then(resp => {return resp.json()}).then(resp => {
        console.log("web call"); 
        count = resp.count;
        document.getElementById("counter").innerText = count    }).catch(function (error) {
            console.log(error);
        });

        return count;
}