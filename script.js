const petals0Container = document.querySelector(".petals0");
const petals1Container = document.querySelector(".petals1");

const numberOfPetals = 12;

const angle = 360 / numberOfPetals;

for (let i = 0; i < numberOfPetals; i++) {

    const petal0 = document.createElement("div");
    const petal1 = document.createElement("div");

    petal0.classList.add("petal0");
    petal1.classList.add("petal1");

    petal0.style.transform = `rotate(${i * angle}deg)`;
    petal1.style.transform = `rotate(${i * angle}deg)`;

    petals0Container.appendChild(petal0);
    petals1Container.appendChild(petal1);
}

