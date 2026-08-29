const petals0Container = document.querySelector(".petals0");
const petals1Container = document.querySelector(".petals1");
const petals2Container = document.querySelector(".petals2");
const petals3Container = document.querySelector(".petals3");

const numberOfPetals = 12;

const angle = 360 / numberOfPetals;

for (let i = 0; i < numberOfPetals; i++) {

    const petal0 = document.createElement("div");
    const petal1 = document.createElement("div");
    const petal2 = document.createElement("div");

    petal0.classList.add("petal0");
    petal1.classList.add("petal1");
    petal2.classList.add("petal2");

    petal0.style.transform = `rotate(${i * angle}deg)`;
    petal1.style.transform = `rotate(${i * angle}deg)`;
    petal2.style.transform = `rotate(${i * angle}deg)`;

    petals0Container.appendChild(petal0);
    petals1Container.appendChild(petal1);
    petals2Container.appendChild(petal2);
}

for(let j = 0;j<25;j++){
    const petal3 = document.createElement("div");
    petal3.classList.add("petal3");
    petal3.style.transform = `rotate(${j*(360/24)}deg)`;
    petals3Container.appendChild(petal3);
}

