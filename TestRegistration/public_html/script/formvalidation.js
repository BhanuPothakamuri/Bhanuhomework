/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function validateForm()
{
    var fName = document.getElementById("txt_FName");
    
    if (!fName.value) {
        alert("FirstName is required");
        return false;
    }
    return true;
    
}

