function validateForm(){

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;

    if(name === ""){
        alert("Please enter your name");
        return false;
    }

    if(email === ""){
        alert("Please enter your email");
        return false;
    }

    if(phone.length !== 10){
        alert("Phone number must contain 10 digits");
        return false;
    }

    alert("Registration Successful!");
    return true;
}

function searchEvents() {

    let input = document.getElementById("searchInput").value.toLowerCase();

    let cards = document.getElementsByClassName("event-card");

    for (let i = 0; i < cards.length; i++) {

        let text = cards[i].innerText.toLowerCase();

        if (text.includes(input)) {
            cards[i].style.display = "block";
        } else {
            cards[i].style.display = "none";
        }
    }
}