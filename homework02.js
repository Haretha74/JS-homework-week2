var quistion =prompt("after how many days can we meet again?");
var newDate = new Date(Date.now()+quistion*24*60*60*1000);
var result = "So see you on:"

document.write('</em><br/>');
document.write(result,newDate);
