
function printFizzBuzz(firstNumber) {

  var tempValue = "";
  for (i = 1; i <= firstNumber; i++)
  {
	if (i%15 === 0)
	{
	    tempValue +=  "<br />" + "FizzBuzz";
	}
	else if (i%3 === 0)
	{
	    tempValue +=  "<br />" + "Fizz";
	}
	else if (i%5 === 0)
	{
	    tempValue +=  "<br />" + "Buzz";
	}
	else
	{
	    tempValue +=  "<br />" + i;
	}
	
  }
//  return tempValue;


document.write("Input is: " + firstNumber);
document.write("<br /><br />FizzBuzz Result is: " + tempValue);

}

