/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function validate()
{
		var Fname = document.getElementById("Fname");
		var Lname = document.getElementById("Lname");
		var Uname = document.getElementById("Uname");
		var pass  = document.getElementById("pass");
                var result = true;
		
		if (Fname.value ===  null || Fname.value === "")
		{
                       result = false;
                       alert ("Firstname cannot be null ra edawa");
                       return(result);
		}
           return (result);
		
}