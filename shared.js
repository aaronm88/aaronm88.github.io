const backdrop = document.querySelector('.backdrop')
const modal = document.querySelector('.modal__dataanalysis')
const dashboard_modal = document.querySelector('.modal__dashboarding');


var modalNoButton = document.querySelector(".modal__dataanalysis__action--negative")
var modalNoButton_dashboarding = document.querySelector(".modal__dashboarding__action--negative")

var datavizPlanButtons = document.querySelectorAll('.section-button__dataviz')
var dashboardingPlanButtons = document.querySelectorAll('.section-button__dashboarding')

console.log(datavizPlanButtons)

for (var i=0; i < datavizPlanButtons.length; i++) {
    datavizPlanButtons[i].addEventListener('click', function() {
        modal.style.display = "block";
        backdrop.style.display = "block";
    });
}

for (var i=0; i < dashboardingPlanButtons.length; i++) {
    dashboardingPlanButtons[i].addEventListener('click', function() {
        dashboard_modal.style.display = "block";
        backdrop.style.display = "block";
    });
}

backdrop.addEventListener("click", closeModal)
backdrop.addEventListener("click", closeModalDashboarding)
modalNoButton.addEventListener("click", closeModal)
modalNoButton_dashboarding.addEventListener("click", closeModalDashboarding)

function closeModal() {
    backdrop.style.display = "none";
    modal.style.display = "none";

}

function closeModalDashboarding() {
    backdrop.style.display = "none";
    dashboard_modal.style.display = "none";

}