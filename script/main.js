const viewWelcome = document.getElementById("view-welcome");
const viewQuestions = document.getElementById("view-questions");


const welcomeForm = document.getElementById("form-welcome");

welcomeForm.addEventListener("submit", (event) =>{
    event.preventDefault();

    const data = new FormData(welcomeForm);

    const username = data.get("username");

    alert("Bienvenidx, " + username);

    viewWelcome.classList.add("hidden");
    viewQuestions.classList.remove("hidden");
});
