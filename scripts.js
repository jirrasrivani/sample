function loginjs()
            {
                   var username=document.getElementById("username");
                   var password=document.getElementById("password");                 
                   if(username.value.trim() =="" || password.value.trim()=="")
                   {
                       alert("Some fields Empty");
                       return false;
                   }
                   else
                   {
                        true;
                   }
            }
function registerjs()
             {
                    var username=document.getElementById("username");
                    var firstname=document.getElementById("firstname");
                    var lastname=document.getElementById("lastname");
                    var email=document.getElementById("email");
                    var occupation=document.getElementById("occupation");
                    var birthday=document.getElementById("birthday");
                    var password=document.getElementById("password");
                  
                    if(username.value.trim() =="" || firstname.value.trim() =="" || lastname.value.trim() =="" || email.value.trim() =="" || occupation.value.trim() =="" || birthday.value.trim() =="" || password.value.trim()=="")
                    {
                        alert("Some fields Empty");
                        return false;
                    }
                    else
                    {
                         true;
                    }
             }

  function paymentsjs()
             {
                 
                    var firstname=document.getElementById("firstname");
                    var lastname=document.getElementById("lastname");
                    var address=document.getElementById("address");
                    var city=document.getElementById("city");
                    var state=document.getElementById("state");
                    var pincode=document.getElementById("pincode");
 
 
                    var nameoncard=document.getElementById("nameoncard");
                    var creditcardnumber=document.getElementById("creditcardnumber");
                    var month=document.getElementById("month");
                    var year=document.getElementById("year");
                    var cvv=document.getElementById("cvv");
 
                  
                    if(firstname.value.trim() =="" || lastname.value.trim() =="" || address.value.trim() =="" || city.value.trim() =="" || state.value.trim() =="" || pincode.value.trim() =="" || nameoncard.value.trim()=="" || creditcardnumber.value.trim()=="" || month.value.trim()=="" ||year.value.trim()=="" ||cvv.value.trim()=="")
                    {
                        alert("Some fields are Empty");
                        return false;
                    }
                    else
                    {
                         true;
                    }
             }