import getData from "../utility/getData";

function renderPlanet(data) {
    let obj;

    document.body.classList.length <= 0 ? obj = data[0] : obj = data;

    renderPlanetInfo(obj);
    populatePlanetData(obj);
}

function renderPlanetInfo(planet) {
    const rotationTime = document.querySelector('.js-rotation-time');
    const revolutionTime = document.querySelector('.js-revolution-time');
    const radius = document.querySelector('.js-radius');
    const averageTemp = document.querySelector('.js-average-temp');

    rotationTime.innerHTML = planet.rotation;
    revolutionTime.innerHTML = planet.revolution;
    radius.innerHTML = planet.radius;
    averageTemp.innerHTML = planet.temperature;
}

function populatePlanetData(planet, isChange, content) {
    document.body.classList.add(planet.name);
    const planetImgEle = document.querySelector('.js-planet-img');
    const planetImgGeoEle = document.querySelector('.js-planet-img-geo');
    const planetName = document.querySelector('.js-content-name');
    const planetOverview = document.querySelector('.ja-content-overview');
    const planetSource = document.querySelector('.js-content-source');
    const btnOverview = document.querySelector("[data-btn='overview']");

    if(!planetImgGeoEle.classList.contains('is-hidden')) {
        planetImgGeoEle.classList.add('is-hidden')
    }

    if(isChange) {
        if(content === 'structure') {            
            planetImgEle.src = planet.images.internal;
            planetOverview.innerHTML = planet.structure.content;
            planetSource.href = planet.structure.source;
        }else if(content === 'geology') {
            planetImgGeoEle.src = planet.images.geology;
            planetImgGeoEle.classList.remove('is-hidden')
            planetOverview.innerHTML = planet.geology.content;
            planetSource.href = planet.geology.source;
        }else{
            planetImgEle.src = planet.images.planet;
            planetOverview.innerHTML = planet.overview.content;
            planetSource.href = planet.geology.source;
        }
    }else{
        planetImgEle.classList = [];
        planetImgEle.classList.add('planet__img', 'js-planet-img')
        planetImgEle.classList.add('planet__img--' + planet.name.toLowerCase())
        btnOverview.classList.add('is-active');
        planetImgEle.src = planet.images.planet;
        planetOverview.innerHTML = planet.overview.content;
        planetSource.href = planet.geology.source;
    }
    
    planetName.innerHTML = planet.name;
}


function changePlanet() {

    const menuLink = document.querySelectorAll('.main-nav__menu-link');
    const mainNav = document.querySelector('.main-nav__menu');
    const mainEle = document.querySelector('.main-element');
    const burgerLine = document.querySelectorAll('.main-nav__burger-line');

    menuLink.forEach(ele => ele.addEventListener('click', function(e) {
        e.preventDefault();
        const dataName = ele.dataset.name;
        if(!document.body.classList.contains(dataName)) {

            document.body.classList.remove(...document.body.classList)
            document.body.classList.add(dataName)
           
            getData(function findPlanet(dataP) {
                const currentPlanet = dataP.find(element => element.name === dataName);
                renderPlanet(currentPlanet)
            });          
        }
        mainNav.classList.remove('is-active');
        mainEle.classList.remove('is-active');
        burgerLine.forEach(element => {
            element.classList.remove('is-active');
        });
       
        btnEle();
    }))
    
}

function infoMenu() {
    const btnInfo = document.querySelectorAll('.btn');
    btnInfo.forEach(ele => ele.addEventListener('click', function(e) {
        const dataBtn = ele.dataset.btn
        const imageEle = document.querySelector('.js-planet-img');

        getData(function findPlanet(dataP) {
            const currentPlanet = dataP.find(element => element.name === document.body.className);
            populatePlanetData(currentPlanet, true, dataBtn);

            btnInfo.forEach(elem =>  {
                elem.classList.remove('is-active');
            })

            ele.classList.add('is-active');
            if(ele.dataset.btn === 'geology') imageEle.src = currentPlanet.images.planet;            
        }); 
    }))
}

function btnEle() {
    const btnClass = document.querySelectorAll('.btn');

    btnClass.forEach(eleme =>  {
        eleme.classList.remove('is-active');   
    })   
}



export {renderPlanet, populatePlanetData, renderPlanetInfo, changePlanet, infoMenu};