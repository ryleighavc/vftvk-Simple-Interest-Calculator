/*Fetches the user interest rate input from the slider
and displays it for ease of use*/
function updateRate()
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval + "%";
}
//creates the main functionality and mathematical computation of the app
function compute()
{
  //defines object inputs for computation
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    //sets mathematical formulas
    var interest = principal * years * rate /100;
    var year = new Date().getFullYear()+parseInt(years);
    var amount = parseFloat(principal) + parseFloat(interest);
    /*tells the function the range of valid inputs then to display an alert
    should the user input an invalid quantity for the principal amount and
    brings focus to the invalid input*/
    var result;
    if (principal < 1) {
      result = alert('Enter a positive number');
      document.getElementById("principal").focus()
    /*displays the results for the user should all inputs be deturmined valid
    highlighting the important values*/
    } else {
      result = document.getElementById("result").innerHTML="If you deposit <mark> $"
        + principal + "</mark>,<br></br> at an interest rate of <mark>" + rate +
         "%</mark>.<br></br> You will recieve an amount of <mark>$" + amount +
        "</mark>, <br></br> in the year <mark>" + year + "</mark><br></br>";
      }
    }
