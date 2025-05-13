function insert(num){
            var numero = document.getElementById('result').innerHTML;
            document.getElementById('result').innerHTML = numero + num;
    }
function clean(){
            document.getElementById('result').innerHTML = "";
    }
function back(){
            var resultado = document.getElementById('result').innerHTML;
            document.getElementById('reslt').innerHTML = resultado.substring(0, resultado.length -1);
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