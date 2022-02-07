function multiply(a,b){

    var val = Math.abs(a)

    if(a == 0 || b == 0){
    return 0
    }else{

    for(var i = 1; i < Math.abs(b); i++){
    val += Math.abs(a); 
    }
    if(a < 0 || b < 0){
    return -val
    }else{
    return val;
    }
}
}

module.exports = multiply
