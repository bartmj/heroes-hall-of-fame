class Hero {

    powerCount = 10;

    constructor(name) {
        this.name = name;
    }

    getCurrentPowerCount() {
        return this.powerCount;
    }

    train() {
        this.powerCount += 10;
    }

};

const heroes = [];

const getHero = (name) => {
    let newHero = new Hero(name);
    return newHero;
}

const hulk = getHero("Hulk");
const geralt = getHero("Geralt");
const spiderman = getHero("Spiderman");

heroes.push(hulk);
heroes.push(geralt);
heroes.push(spiderman);

window.onload = function () {
    renderAllHeroesData();
};

const findHeroByName = (name) => {
    for (let i = 0; i < heroes.length; i++) {
        if (heroes[i].name === name) {
            return heroes[i];
        }
    }
}

const trainHero = (name) => {
    let hero = findHeroByName(name);
    hero.train();
    renderCurrentPowerCount(name);
}

const renderCurrentPowerCount = (name) => {
    let hero = findHeroByName(name);
    document.getElementById(name + "-power").innerHTML = hero.powerCount;
}

const removeHero = (name) => {
    for (let i = 0; i < heroes.length; i++) {
        if (heroes[i].name === name) {
            heroes.splice(i, 1);
        }
    }
    renderAllHeroesData();
}

const addHero = () => {
    let name = document.getElementById("hero").value;
    if (!name.match(/\S/g)) {
        alert("Name can not be empty");
        return;
    }
    document.getElementById("hero").value = "";
    let newHero = getHero(name);
    heroes.push(newHero);
    renderAllHeroesData();
}

const renderAllHeroesData = () => {
    document.getElementById('hero-count').innerHTML = heroes.length;
    document.querySelector('.hero-container').innerHTML = heroes.map(hero =>
        heroTemplate(hero)).join('')
}

const heroTemplate = hero =>
    `<div class="hero">
          <p>Name: ${hero.name}</p>
          <p>Power: <span id="${hero.name}-power">${hero.powerCount}</span></p>
          <button onclick="trainHero('${hero.name}')">Power Up Hero</button></br>
          <button id="remove-btn" onclick="removeHero('${hero.name}')">Remove a Hero</button>
     </div>`;
