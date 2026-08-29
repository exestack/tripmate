/* =========================================================
   TRIPMATE - SCRIPT.JS
   Your Trust, Our Responsibility
   ========================================================= */


/* =========================================================
   MOBILE MENU
   ========================================================= */

function toggleMenu() {
    const nav = document.getElementById("nav");

    if (nav) {
        nav.classList.toggle("show");
    }
}


/* Close mobile menu after clicking a link */

document.querySelectorAll("nav a").forEach(function(link) {

    link.addEventListener("click", function() {

        const nav = document.getElementById("nav");

        if (nav) {
            nav.classList.remove("show");
        }

    });

});


/* =========================================================
   FOOTER YEAR
   ========================================================= */

const yearElement = document.getElementById("year");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}


/* =========================================================
   TRIP BUDGET CALCULATOR
   ========================================================= */

function calculateBudget(event) {

    event.preventDefault();

    const destination =
        document.getElementById("destination").value.trim();

    const travellers =
        Number(document.getElementById("travellers").value);

    const days =
        Number(document.getElementById("days").value);

    const daily =
        Number(document.getElementById("daily").value);

    const result =
        document.getElementById("result");


    /* Validate values */

    if (
        destination === "" ||
        travellers < 1 ||
        days < 1 ||
        daily < 0
    ) {

        result.style.display = "block";

        result.innerHTML =
            "Please enter valid trip details.";

        return;
    }


    /* Calculate estimated budget */

    const total =
        travellers * days * daily;


    /* Display result */

    result.style.display = "block";

    result.innerHTML =
        "Estimated budget for <strong>" +
        escapeHTML(destination) +
        "</strong>: <strong>₹" +
        total.toLocaleString("en-IN") +
        "</strong>" +
        "<br>" +
        "<small>" +
        "This is an estimate only and may not include " +
        "transport, hotel, taxes or activity costs." +
        "</small>";
}


/* =========================================================
   SECURITY HELPER
   ========================================================= */

function escapeHTML(text) {

    return text.replace(
        /[&<>"']/g,
        function(character) {

            const characters = {

                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#039;"

            };

            return characters[character];
        }
    );
}


/* =========================================================
   WHATSAPP
   ========================================================= */

function openWhatsApp(message) {

    const phone =
        "917872827411";

    const url =
        "https://wa.me/" +
        phone +
        "?text=" +
        encodeURIComponent(message);

    window.open(
        url,
        "_blank"
    );
}


/* =========================================================
   TRIPMATE QUICK MESSAGE
   ========================================================= */

function contactTripMate() {

    openWhatsApp(
        "Hello TripMate, I need travel assistance."
    );

}


/* =========================================================
   CALL TRIPMATE
   ========================================================= */

function callTripMate() {

    window.location.href =
        "tel:+917872827411";

}


/* =========================================================
   EMAIL TRIPMATE
   ========================================================= */

function emailTripMate() {

    window.location.href =
        "mailto:tripmateone@yahoo.com";

}


/* =========================================================
   SCROLL TO TOP
   ========================================================= */

window.addEventListener(
    "scroll",
    function() {

        const button =
            document.getElementById("topButton");

        if (!button) return;

        if (window.scrollY > 400) {

            button.classList.add("visible");

        } else {

            button.classList.remove("visible");

        }

    }
);


/* =========================================================
   PAGE LOADED
   ========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    function() {

        console.log(
            "TripMate website loaded successfully."
        );

    }
);