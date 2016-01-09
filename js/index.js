document.documentElement.className = 'js';



function commafy( num){
  var parts = (''+(num<0?-num:num)).split("."), s=parts[0], L, i=L= s.length, o='';
  while(i--){ o = (i===0?'':((L-i)%3?'':',')) 
                  +s.charAt(i) +o }
  return (num<0?'-':'') + o + (parts[1] ? '.' + parts[1] : ''); 
}
function dateDiff() {
    var born = new Date("March 10, 2015 21:30")
  
    var created = born
    today = new Date()

    var one_sec = 1000
    var one_min = 1000 * 60
    var one_hour = 1000 * 60 * 60
    var one_day = 1000 * 60 * 60 * 24
    var one_week = 1000 * 60 * 60 * 24 * 7
    //var one_month = 1000 * 60 * 60 * 24 * 7

    var x;
    var y;

    Math.ceil((today.getTime() - created.getTime()) / (one_day)) > 1 ? x = " Days" : x = " Day";
    Math.ceil((today.getTime() - created.getTime()) / (one_week)) > 1 ? y = " Weeks" : y = " Week";

    document.getElementById("secs").innerHTML = commafy(Math.ceil((today.getTime() - created.getTime()) / (one_sec)))  + " Seconds";
    document.getElementById("mins").innerHTML = commafy(Math.ceil((today.getTime() - created.getTime()) / (one_min))) + " Minutes";
    document.getElementById("hours").innerHTML = commafy(Math.ceil((today.getTime() - created.getTime()) / (one_hour))) + " Hours";
    document.getElementById("days").innerHTML = commafy(Math.ceil((today.getTime() - created.getTime()) / (one_day))) + x;
    document.getElementById("weeks").innerHTML = commafy(Math.ceil((today.getTime() - created.getTime()) / (one_week))) + y;
    
    var months = moment(20150310, "YYYYMMDD").fromNow(true); 
    document.getElementById("months").innerHTML = months;

    setTimeout(function() {
        dateDiff();
    }, 1000);
}

window.onload = dateDiff();