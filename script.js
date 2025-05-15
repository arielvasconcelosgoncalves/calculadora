let displayResult = false;

function insert(num){

    if (displayResult === true){

            document.getElementById('result').innerHTML = num;
            displayResult = false;

    }else{

        number = document.getElementById('result').innerHTML;
        document.getElementById('result').innerHTML = number + num;
        
    }


    
}
function insertOperator(num){
    let result = document.getElementById('result').innerHTML;
    if(result.charAt(result.length - 1) === '+' 
    || result.charAt(result.length - 1) === '-' 
    || result.charAt(result.length - 1) === '/' 
    || result.charAt(result.length - 1) === '*'){

    }
    else if(displayResult === true){
        
        document.getElementById('result').innerHTML = num;
        displayResult = false;

    }
    else{
        let number = document.getElementById('result').innerHTML;
        document.getElementById('result').innerHTML = number + num;
    }   
}
function insertPoint(num){
    let result = document.getElementById('result').innerHTML;
    if(result.charAt(result.length - 1) === '.'){
        
    }
    else{
        let number = document.getElementById('result').innerHTML;
        document.getElementById('result').innerHTML = number + num;
    }
}
function clean(){
    document.getElementById('result').innerHTML = "";
}
function back(){
    let result = document.getElementById('result').innerHTML;
    document.getElementById('result').innerHTML = result.substring(0, result.length -1);
}
function execute(){
    let result = document.getElementById('result').innerHTML;
    if(result)
    {
        document.getElementById('result').innerHTML = eval(result);
        displayResult = true;
    }
    else
    {
        document.getElementById('result').innerHTML = ""
    }
}