
var calculate = function (number) {
    var menit = Math.floor(number/60);
    var detik = number%60 ;
    console.log(menit + ": " + detik);
}

calculate(64);
calculate(124);
calculate(53);
calculate(88);
calculate(120);    
