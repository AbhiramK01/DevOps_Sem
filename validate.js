function validate()
{
    const name=document.getElementById("name").value.trim();
    const fname=document.getElementById("fname").value.trim();
    const mname=document.getElementById("mname").value.trim();
    const email=document.getElementById("mail").value.trim();
    const pno=document.getElementById("pno").value.trim();
    const gender=document.querySelector('input[name="gender"]:checked');
    const edu=document.getElementById("edu").value;

    if(!gender){
        alert("Please select your gender.");
        return;
    }

    if(name=='' || fname=='' || mname=='' || email=='' || pno=='' || edu=='')
    {
        alert("Plese fill all the options!");
        return;
    }

    const emailPattern=/@.*\.com$/;
    if(!emailPattern.test(email))
    {
        alert("Please enter a valid email.");
        return;
    }

    if(isNaN(pno) || pno.length!=10)
    {
        alert("Please enter a valid phone number.");
        return;
    }

    document.write("Entered details are:<br>"+
        "Name: "+name+
    "Gender:"+gender.value);

    alert("User registerd successfully!");
    return;

}