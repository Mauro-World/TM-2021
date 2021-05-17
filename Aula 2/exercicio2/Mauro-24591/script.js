// Your JS Script here
let addNumbers=[];

function pushArray() {
    const number=document.getElementById('numbers').value;
    addNumbers.push(number);
    document.getElementById('arrayNumbers').innerText=addNumbers.toString();
    document.getElementById('numbers').value='';
}

    if(addNumbers.length>=5) {
        document.getElementById('calculateMaxNumber').style.display="Block";
    }

function calculateMaxNumber() {
    if(addNumbers.length>=5) {
        const maxNumber = addNumbers.reduce((a, b) => Math.max(a, b));
        const maxNumberCopy = addNumbers.reduce(function(a, b){
           return Math.max(a, b);
        });
        const maxNumberCopy2 = Math.max.apply(Math, addNumbers);

        document.getElementById('maxNumber').innerText= maxNumber+"é igual "+ maxNumberCopy + "=" + maxNumberCopy2;
    }
}