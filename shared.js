const backdrop = document.querySelector('.backdrop')
console.log(backdrop);

const dataviz_modal = document.querySelector('.dataviz__modal')
const dashboard_modal = document.querySelector('.dashboarding__modal');
const ai_modal = document.querySelector('.ai__modal');
const fullstack_modal = document.querySelector('.fullstack__modal');
const pm_modal = document.querySelector('.pm__modal');
const consulting_modal = document.querySelector('.consulting__modal');


const datavizModalNoButton = document.querySelector(".modal__action--negative")
const dashboardingModalNoButton = document.querySelector(".dashboarding-modal__action--negative")
const aiModalNoButton = document.querySelector(".ai-modal__action--negative")
const fullstackModalNoButton = document.querySelector(".fullstack-modal__action--negative")
const pmModalNoButton = document.querySelector(".pm-modal__action--negative")
const consultingNoButton = document.querySelector(".consulting-modal__action--negative")

const datavizPlanButtons = document.querySelectorAll('.section-button__dataviz')
const dashboardingPlanButtons = document.querySelectorAll('.section-button__dashboarding')
const aiPlanButtons = document.querySelectorAll('.section-button__ai')
const fullstackPlanButtons = document.querySelectorAll('.section-button__fullstack')
const pmPlanButtons = document.querySelectorAll('.section-button__pm')
const consultingPlanButtons = document.querySelectorAll('.section-button__consulting')



for (var i=0; i < datavizPlanButtons.length; i++) {
    datavizPlanButtons[i].addEventListener('click', function() {
        dataviz_modal.style.display = "block";
        backdrop.style.display = "block";
    });
}

for (var i=0; i < dashboardingPlanButtons.length; i++) {
    dashboardingPlanButtons[i].addEventListener('click', function() {
        dashboard_modal.style.display = "block";
        backdrop.style.display = "block";
    });
}


for (var i=0; i < aiPlanButtons.length; i++) {
    aiPlanButtons[i].addEventListener('click', function() {
        ai_modal.style.display = "block";
        backdrop.style.display = "block";
    });
}


for (var i=0; i < fullstackPlanButtons.length; i++) {
    fullstackPlanButtons[i].addEventListener('click', function() {
        fullstack_modal.style.display = "block";
        backdrop.style.display = "block";
    });
}


for (var i=0; i < pmPlanButtons.length; i++) {
    pmPlanButtons[i].addEventListener('click', function() {
        pm_modal.style.display = "block";
        backdrop.style.display = "block";
    });
}

for (var i=0; i < consultingPlanButtons.length; i++) {
    consultingPlanButtons[i].addEventListener('click', function() {
        consulting_modal.style.display = "block";
        backdrop.style.display = "block";
    });
}

backdrop.addEventListener("click", closeModal)

datavizModalNoButton.addEventListener("click", closeModal)
dashboardingModalNoButton.addEventListener("click", closeModal)
aiModalNoButton.addEventListener("click", closeModal)
fullstackModalNoButton.addEventListener("click", closeModal)
pmModalNoButton.addEventListener("click", closeModal)
consultingNoButton.addEventListener("click", closeModal)

function closeModal() {
    backdrop.style.display = "none";
    dataviz_modal.style.display = "none";
    dashboard_modal.style.display = "none";
    ai_modal.style.display = "none";
    fullstack_modal.style.display = "none";
    pm_modal.style.display = "none";
    consulting_modal.style.display = "none";

}

// function closeModalDashboarding() {
//     backdrop.style.display = "none";
//     dashboard_modal.style.display = "none";

// }