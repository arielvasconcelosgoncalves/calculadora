let displayResult = false;
const MAX_LENGHT = 15;

function insert(num){

    if (displayResult === true){

            document.getElementById('result').innerHTML = num;
            displayResult = false;

    }else{

        current = document.getElementById('result').innerHTML;
        if (current.length < MAX_LENGHT){
        document.getElementById('result').innerHTML = current + num;
        }
        
    }

}
function insertOperator(num){
    let current = document.getElementById('result').innerHTML;

    if(current.length < MAX_LENGHT){
        if(current.charAt(current.length - 1) === '+' 
        || current.charAt(current.length - 1) === '-' 
        || current.charAt(current.length - 1) === '/' 
        || current.charAt(current.length - 1) === '*'){

        }
        else if(displayResult === true){
            
            document.getElementById('result').innerHTML = num;
            displayResult = false;

        }
        else{
            
            document.getElementById('result').innerHTML = current + num;
        } 
    }  
}
function insertPoint(num){
    let current = document.getElementById('result').innerHTML;

    if(current.length < MAX_LENGHT){
        if(current.charAt(result.length - 1) === '.'){
            
        }
        else{
            document.getElementById('result').innerHTML = current + num;
        }
    }
}
function clean(){
    document.getElementById('result').innerHTML = "";
}
function back(){
    let current = document.getElementById('result').innerHTML;
    document.getElementById('result').innerHTML = current.substring(0, current.length -1);
}
function execute(){
    let current = document.getElementById('result').innerHTML;
    if(current)
    {
        document.getElementById('result').innerHTML = eval(current);
        displayResult = true;
    }
    else
    {
        document.getElementById('result').innerHTML = ""
    }
}