


function vali()
{
    window.location.href='form.html'
let valid; 

    const nameRegex=/^[A-Za-z\s]+$/;
    const name=document.getElementById('name').value;
    if(!nameRegex.test(name))
    {
        valid=false;
        alert("Enter Your Write Name")
    }
    
    const mobileRegex=/^[0-9]{10}$/;
    const mobile=document.getElementById('mobile').value;
    if(!mobileRegex.test(mobile))
    {
        valid=false;
        alert("Enter 10 Digit No")
    }



    const emailRegex=/^[a-zA-Z0-9._-]+@[a-zA-z0-9.-]+\.[a-zA-Z]{2,6}$/;
    const email=document.getElementById('email').value;
    if(!emailRegex.test(name))
    {
        valid=false;
    
        alert("Enter Correct Email Address");   
    }
    
if(valid==false)
{
    alert("Enter Write Information")
}
else{
    alert("your Order Placed Sucessfully")
}

}
    
