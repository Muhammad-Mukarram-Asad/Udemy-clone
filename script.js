function Open_Login_Div()
{
    // let login_btn = document.getElementsByClassName("btn-2");
    let login_div = document.getElementById("login_div");
    let cross_sign = document.getElementById("cross_sign_2");
    login_div.style.display = "block";

    setTimeout(() => {
        cross_sign.style.display = "block";
    }, 600);
}

function Open_Signup_Div()
{
    let signup_div = document.getElementById("signup_div");
    let cross_sign = document.getElementById("cross_sign_1");
    signup_div.style.display = "block";

    setTimeout(() => {
        cross_sign.style.display = "block";
    }, 600);
}


function Hide_Login_Div()
{
    let login_div = document.getElementById("login_div");
    let signup_div = document.getElementById("signup_div");
    login_div.style.display = "none" ? signup_div.style.display = "none":
    login_div.style.display = "none"  ;
}

function signUp()
{

    let login_div = document.getElementById("login_div");
    let signup_div = document.getElementById("signup_div");

    signup_div.style.display = "none";
    login_div.style.display = "block";
}

function signIn()
{
    swal({
        title: "Good job!",
        text: "You clicked the button!",
        icon: "success",
        button: "Aww yiss!",
      });

    //   swal({
    //     title: "Congratulations!",
    //     text: "Successfully data found.",
    //     icon: "success",
    //     button: "Aww yess!",
    //   });
}

