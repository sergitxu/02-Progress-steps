const progress = document.getElementById('progress');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const progressSteps = document.querySelectorAll('.progress__step');


let currentActive = 1;

console.log(progressSteps);

next.addEventListener('click', () => {
    currentActive++;
    if (currentActive > progressSteps.length) {
        currentActive = progressSteps.length;
    }
    updateProgress();
});
prev.addEventListener('click', () => {
    currentActive--;
    if (currentActive < 1) {
        currentActive = 1;
    }
    updateProgress();
});

function updateProgress() {
    // progressSteps[currentActive].classList.add('active');

    progressSteps.forEach((step, index) => {
        if (index < currentActive) {
            step.classList.add('active');
            // progress__bar.width = 20%;
        } else {
            step.classList.remove('active');
        }
    })
    if (currentActive === 1) {
        prev.disabled = true;
    } else if (currentActive === progressSteps.length) {
        next.disabled = true;
    } else {
        prev.disabled = false;
        next.disabled = false;
    }

    const activeSteps = document.querySelectorAll('.active');
    console.log(activeSteps.length);
    let percentage = (activeSteps.length - 1) / (progressSteps.length - 1) * 100 + '%';
    progress.style.width = percentage;

}

