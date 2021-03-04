// Your JS Script here

function readInput () {
    const textFromInput=document.getElementById('texto').value;
    if(textFromInput){
        document.getElementById('viewInput').innerText=textFromInput;
        document.getElementById('texto').value='';
    }else {
        alert("write som");
    }
}

