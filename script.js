today=new Date();
var month = new Array();
    month[0] = "January";
    month[1] = "February";
    month[2] = "March";
    month[3] = "April";
    month[4] = "May";
    month[5] = "June";
    month[6] = "July";
    month[7] = "August";
    month[8] = "September";
    month[9] = "October";
    month[10] = "November";
    month[11] = "December";
	
	var n = month[today.getMonth()];
var date = today.getDate()+' '+ n +' '+today.getFullYear();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
var dateTime = date+' '+time;

document.getElementById("demo1").innerHTML = "It is" + dateTime + "now" ;
var cmas=new Date(today.getFullYear(), 8, 30);
if (today.getMonth()==8 && today.getDate()>30)
{
cmas.setFullYear(cmas.getFullYear()+1);
}
var one_day=1000*60*60*25;

document.getElementById("demo").innerHTML =
(Math.ceil((cmas.getTime()-today.getTime())/(one_day))+
" days left ");

