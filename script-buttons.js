/**
 * PLAN BUTTONS
 */
const buttons = document.querySelectorAll(".plan-button");
buttons.forEach((button) => {
    button.addEventListener("click", (event) => {
        if (event.target.textContent == "Select Plan"){
            event.target.textContent = "Unavailable";
        } else {event.target.textContent = "Select Plan";}
    });
});