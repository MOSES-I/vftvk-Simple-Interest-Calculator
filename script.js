function compute()        <!--For interest calculation and displaying it-->
{
var principal = document.getElementById("principal").value;
if (principal<=0)                        <!-- For alerting, if entered negative and 0 values--> 
{
alert("Enter a positive number");
var check = document.getElementById("principal");
check.focus();
return false;
}

var rate = document.getElementById("rate").value;
var years = document.getElementById("years").value;
var interest = principal * years * rate / 100 ;
var year = new Date().getFullYear()+parseInt(years); 
document.getElementById("result").innerHTML="If you deposit <mark>"+principal+"</mark> , \n at an interest rate of "+rate+"%. \n You will receive an amount of "+interest+", \n in the year "+year;
}

function updateRate()              <!-- To display the value of slider -->
{
var rateval = document.getElementById("rate").value;
document.getElementById("rate_val").innerText=rateval;
}
