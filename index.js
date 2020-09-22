/**index.js to dynamically added data from a form to the next page */


let form = document.getElementById('form');  //get the form instance

/**function to validate all the given input */
function FormValidation() {
    /**variables to hold inputs */
let first = form.elements["f_name"].value;
let last = form.elements["l_name"].value;
let emails = form.elements["email"].value;
let number = form.elements["num"].value;
let adres = form.elements["Addres"].value;

/**regex for email, name and number */
let Emailtest = /^[\w.\.+w.+\-]+@ashesi.edu.gh$/;   //email should end with @ashesi.edu.gh
let Nametest= /^[a-z0-9_\-]+$/i;        //name should be a string excluding other characters
let Numtest= /^\([0-9]{1,3}\) [0-9]{9}$/; //number should start with a country code which can be 1 to 3 numbers followed by 9 digits

/**carry out the tests */
        if (first === "" || !Nametest.test(first)) {
            window.alert("first name is empty or invalid!! it should be string");
            document.getElementById("first").style.border = "2px solid red"; //border the text box if there is an error
            return false;
        }


        if (last === "" || !Nametest.test(last)) {
            window.alert("last name is empty or invalid!! it should be string");
            document.getElementById("last").style.border = "2px solid red";
            return false;
        }
        if (emails === "" || !Emailtest.test(emails)) {
            window.alert("Email is empty or invalid, it should be an ashesi email!!");
            document.getElementById("email").style.border = "2px solid red";
            return false;
            
        }

        if (number === "" || !Numtest.test(number)) {
            window.alert(" Empty or invalid number field, remember to add country code followed by 9 digits!!");
            document.getElementById("number").style.border = "2px solid red";
            return false;
        }

        if (adres === "") {
            window.alert("address can not be empty!!");
            document.getElementById("address").style.border = "2px solid red";
            return false;
        }
}

/**function to store the date in the local storage */
function storedata() {
    /**variables to hold all the inputs */
    let first = form.elements["f_name"].value + " "+ form.elements["m_name"].value + " "+form.elements["l_name"].value; 
    let emails = form.elements["email"].value;
    let gendeer= form.elements["gender"].value;
    let number = form.elements["num"].value;
    let adres = form.elements["Addres"].value;

    /**localhostage variables to be set to the inputs */
    window.localStorage.setItem("fn", first);
    window.localStorage.setItem("ge", gendeer)
    window.localStorage.setItem("ph", number);
    window.localStorage.setItem("em", emails);
    window.localStorage.setItem("ad", adres);
}
    /**add the data to the cv page */
    document.getElementById("fname1").innerHTML=window.localStorage.getItem("fn")  ;
    document.getElementById("gender1").innerHTML=window.localStorage.getItem("ge");
    document.getElementById("number1").innerHTML=window.localStorage.getItem("ph");
    document.getElementById("email1").innerHTML=window.localStorage.getItem("em");
    document.getElementById("address1").innerHTML=window.localStorage.getItem("ad");
    

    
 
   

