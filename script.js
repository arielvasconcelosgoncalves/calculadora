function insert(num){
            var numero = document.getElementById('result').innerHTML;
            document.getElementById('result').innerHTML = numero + num;
    }
function insertOperator(num){
        var resultado = document.getElementById('result').innerHTML;
        if(resultado.charAt(resultado.length - 1) === '+' 
        || resultado.charAt(resultado.length - 1) === '-' 
        || resultado.charAt(resultado.length - 1) === '/' 
        || resultado.charAt(resultado.length - 1) === '*'){

            
        }
        else{
            var numero = document.getElementById('result').innerHTML;
            document.getElementById('result').innerHTML = numero + num;
        }
            
    }
function insertPoint(num){
            var resultado = document.getElementById('result').innerHTML;
        if(resultado.charAt(resultado.length - 1) === '.'){
          
        }
        else{
            var numero = document.getElementById('result').innerHTML;
            document.getElementById('result').innerHTML = numero + num;
        }
    }
function clean(){
            document.getElementById('result').innerHTML = "";
    }
function back(){
            var resultado = document.getElementById('result').innerHTML;
            document.getElementById('result').innerHTML = resultado.substring(0, resultado.length -1);
    }
function execute(){
        var resultado = document.getElementById('result').innerHTML;
        if(resultado)
        {
            document.getElementById('result').innerHTML = eval(resultado);
        }
        else
        {
            document.getElementById('result').innerHTML = ""
        }
    }