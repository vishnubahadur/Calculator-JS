const disp = document.querySelector("#disp");
let btn = document.querySelectorAll("button");
let prevNum;
let total=0;
let output = "0";
function keyval(key){
 if(isNaN(key)){
    handleSymbol(key);}
 else{
    handleNumber(key);
 }
 disp.value = output;  
}
function handleSymbol(symbol){
     switch(symbol){
        case "C":
            output= '0';
            total=0;
            break;
        case "=":
             if(prevNum === null ){ 
                return;
             }
            handleOperation(parseFloat(output));
            prevNum = null;
            output = total;
            total = 0;
            break;
        case '.':
            output+=".";
            break;
        case '+':
        case '-':
        case 'x':
        case "/":
            handleMath(symbol);
            break;
     }
}
function handleMath(symbol){
    if(output ==="0"){
        return
    }
    const intOutput = parseFloat(output);
    if (total === 0){
        total = intOutput;
    }
    else{
        handleOperation(intOutput);
    }
    prevNum = symbol;
    output = '0';
}
function handleOperation(intOutput){
    if(prevNum ==="+"){
        total+=intOutput;
    }
    else if(prevNum ==="-"){
        total-=intOutput;
    }
    else if(prevNum ==="x"){
        total*=intOutput;
    }
    else if(prevNum == "/"){
        total/=intOutput;
    }
}
function handleNumber(numberString){
    if(output=='0'){
        output = numberString;
    }
    else{
        output+=numberString;
    }
}
function init(){
    btn.forEach((btns)=>{
        btns.addEventListener("click",(e)=>{
            keyval(e.target.innerText);
        })
    })
    
}
init();