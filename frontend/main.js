window.addEventListener('DOMContentLoaded',(event) => {getVisitCount();})

const functionapi = '';

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