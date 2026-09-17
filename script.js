// Mobile Menu

function toggleMenu() {
    const menu = document.querySelector(".nav-links");
    menu.classList.toggle("active");
}


// Appointment Form

document
    .getElementById("appointmentForm")
    .addEventListener("submit", function(event) {

        event.preventDefault();

        const name = document.getElementById("name").value;
        const phone = document.getElementById("phone").value;
        const service = document.getElementById("service").value;
        const date = document.getElementById("date").value;

        if (name === "" || phone === "" || service === "" || date === "") {
            alert("Please fill all required fields.");
            return;
        }

        alert(
            "Thank you, " + name +
            "!\nYour appointment request has been submitted."
        );

        this.reset();
    });


// Set minimum appointment date as today

const dateInput = document.getElementById("date");

const today = new Date();
const year = today.getFullYear();
const month = String(today.getMonth() + 1).padStart(2, "0");
const day = String(today.getDate()).padStart(2, "0");

dateInput.min = `${year}-${month}-${day}`;