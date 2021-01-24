/* Converts a number from 0 - 11 to a month string */
function monthToName(month) {
    var months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ];
    return month < 12 && month >= 0 ? months[month] : "";
}

/* Changes style properties to show and hide dialogs */
function toggleDialog(dialog, toggleProperty) {
    if (toggleProperty == "show") {
        dialog.style.display = "block";
        dialog.style.animation = "show 0.3s forwards"
    }
    else if (toggleProperty == "hide") {
        dialog.style.animation = "hide 0.3s forwards"
        setTimeout(function(){ 
            dialog.style.display = "none"; 
        }, 500);
    }

}

/* Returns a percentage based on the number of hours in the day
so that the sky color can change in lightness */
function getSkyLightness(min, max, date) {
    var hour = date.getHours();
    var lightness = Math.ceil(hour <= 12 ? hour / 24 * 100 : Math.abs(100 - hour / 24 * 100)) * 2;
    return lightness >= 50 ? Math.min(max,lightness) : Math.max(min, lightness);
}

/* Returns a percentage based on the number of hours in the day
so that the land color can change in lightness */
function getLandLightness(min, max, date) {
    var hour = date.getHours();
    var lightness = Math.ceil(hour <= 12 ? hour / 24 * 100 : Math.abs(100 - hour / 24 * 100)) * 1;
    return lightness > 50 ? Math.min(max,lightness) : Math.max(min, lightness);
}

/* Create a Particle with physical attributes to behave like
rain, snow, autumn leaves, wind, etc */
function Particle(
    x,
    y,
    size,
    speedX,
    speedY,
    mass,
    gravity,
    gravitySpeed,
    wind,
    windSpeed,
    opacity,
    opacityGrowthRate,
    reflectiveHue) {

    this.x = x;
    this.y = y;
    this.size = size;
    this.speedX = speedX;
    this.speedY = speedY;
    this.mass = mass;
    this.gravity = gravity;
    this.gravitySpeed = gravitySpeed;
    this.wind = wind;
    this.windSpeed = windSpeed;
    this.opacity = opacity;
    this.opacityGrowthRate = opacityGrowthRate;
    this.reflectiveHue = reflectiveHue;
}

/* Creates a Season with climate attributes */
function Season(
    name,
    start,
    end,
    hueMin,
    hueMax,
    saturation,
    lightness,
    particleSize,
    minLandLightness,
    maxLandLightness,
    minSkyLightness,
    maxSkyLightness,
    precipitationWeight,
    windRange,
    density,
    skyHue,
    skySaturation,
    landHue,
    landSaturation) {

    this.name = name;
    this.start = start;
    this.end = end;
    this.hueMin = hueMin;
    this.hueMax = hueMax;
    this.saturation = saturation;
    this.lightness = lightness;
    this.particleSize = particleSize;
    this.minLandLightness = minLandLightness;
    this.maxLandLightness = maxLandLightness;
    this.minSkyLightness = minSkyLightness;
    this.maxSkyLightness = maxSkyLightness;
    this.precipitationWeight = precipitationWeight;
    this.windRange = windRange;
    this.density = density;
    this.skyHue = skyHue;
    this.skySaturation = skySaturation;
    this.landHue = landHue;
    this.landSaturation = landSaturation;
}

/* Creates a set of Seasons - Winter, Spring, Summer, Fall,
and then gets the current season based on today's date */
function getSeason(date) {

    let winter = new Season(
        "Winter",
        new Date("12/21/2020"), 
        new Date("03/19/2021"),
        /* hue min */
        170,
        /* hue max */
        240,
        /* saturation */
        50,
        /* lightness */
        85,
        /* particle size */
        3,
        /* min land lightness */
        92,
        /* max land lightness */
        98,
        /* min sky lightness */
        20,
        /* max sky lightness */
        85,
        /* precipitation weight */
        0.01,
        /* wind range */
        0.01,
        /* density */
        100,
        /* sky hue */
        225,
        /* sky saturation */
        65,
        /* land hue */
        225,
        /* land saturation */
        10
    );

    let spring = new Season(
        "Spring",
        new Date("03/20/2021"), 
        new Date("06/20/2021"),
        /* hue min */
        130,
        /* hue max */
        230,
        /* saturation */
        100,
        /* lightness */
        75,
        /* particle size */
        2,
        /* min land lightness */
        20,
        /* max land lightness */
        80,
        /* min sky lightness */
        20,
        /* max sky lightness */
        80,
        /* precipitation weight */
        0.5,
        /* wind range */
        0,
        /* density */
        300,
        /* sky hue */
        215,
        /* sky saturation */
        85,
        /* land hue */
        110,
        /* land saturation */
        50
    );

    let summer = new Season(
        "Summer",
        new Date("06/21/2021"), 
        new Date("09/21/2021"),
        /* hue min */
        0,
        /* hue max */
        255,
        /* saturation */
        80,
        /* lightness */
        45,
        /* particle size */
        2,
        /* min land lightness */
        20,
        /* max land lightness */
        90,
        /* min sky lightness */
        20,
        /* max sky lightness */
        85,
        /* precipitation weight */
        0.5,
        /* wind range */
        0,
        /* density */
        300,
        /* sky hue */
        200,
        /* sky saturation */
        95,
        /* land hue */
        130,
        /* land saturation */
        60
    );

    let autumn = new Season(
        "Autumn",
        new Date("09/22/2021"), 
        new Date("12/20/2021"),
        /* hue min */
        0,
        /* hue max */
        50,
        /* saturation */
        80,
        /* lightness */
        65,
        /* particle size */
        10,
        /* min land lightness */
        20,
        /* max land lightness */
        90,
        /* min sky lightness */
        20,
        /* max sky lightness */
        90,
        /* precipitation weight */
        0.025,
        /* wind range */
        0.03,
        /* density */
        50,
        /* sky hue */
        220,
        /* sky saturation */
        75,
        /* land hue */
        35,
        /* land saturation */
        50
    );
    
    if (winter.start.getTime() <= date.getTime() && winter.end.getTime() >= date.getTime()) {
        return winter;
    }
    
    else if (spring.start.getTime() <= date.getTime() && spring.end.getTime() >= date.getTime()) {
        return spring;
    }
    
    else if (summer.start.getTime() <= date.getTime() && summer.end.getTime() >= date.getTime()) {
        return summer;
    }
    
    else return autumn;
    
}

function initializeScene(date, hoursValue, monthsValue) {

    /* Greet with day of the week */
    // document.getElementById("greeting").innerHTML = greetWithDay(date);

    /* Get the current season */
    let season = getSeason(date);

    /* Update month and hour display */
    var hours = date.getHours();
    var month = date.getMonth();
    hoursValue.innerHTML = hours === 0 && "12am" || hours < 12 && hours + "am" || hours === 12 && "12pm" || hours - 12 + "pm";
    monthsValue.innerHTML = season.name + " in " + monthToName(month);

    /* Set up SVG */
    var canvasContainer = document.getElementById("canvas-container");
    canvasContainer.innerHTML = '<canvas id="canvas" width=1600 height=800></canvas><svg id="land" xmlns="http://www.w3.org/2000/svg" width="400" height="100" viewBox="0 0 400 100"><rect x="90" y="29" width="7" height="36" rx="3.5" fill="#FBE6ED"/><rect x="262" y="46" width="5" height="17" rx="2.5" fill="#A5F3BB"/><path id="land-swoop" d="M3.86046 60.3564L0 63V84C0 92.8366 7.16345 100 16 100H384C392.837 100 400 92.8366 400 84V36L292.607 50.8128C258.439 55.5257 223.633 51.412 191.504 38.8636C129.252 14.5494 59.003 22.5957 3.86046 60.3564Z" /><rect x="187" y="35" width="9" height="21" rx="4" fill="#FBE6ED"/><rect x="48" y="19" width="5" height="21" rx="2.5" fill="#D9EDFF"/><rect x="375" y="32" width="4" height="17" rx="2" fill="#D9EDFF"/><rect x="98" y="57" width="4" height="16" rx="2" fill="#E2C6FF"/><rect x="308" y="70" width="5" height="12" rx="2.5" fill="#E6E4FF"/></svg>';

    /* Set season colors */
    document.getElementById("land-swoop").style.fill = "hsl(" + season.landHue + ", " + season.landSaturation + "%, " + getLandLightness(season.minLandLightness, season.maxLandLightness, date) + "%)";
    document.getElementById("canvas-container").style.background = "hsl(" + season.skyHue + ", " + season.skySaturation + "%, " + getSkyLightness(season.minSkyLightness, season.maxSkyLightness, date) + "%)";

    /* Create our cool seasonal canvas */
    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");
    var width = canvas.width;
    var height = canvas.height;

    var particles = [];

    for (var i = 0; i < season.density; i++) {
        var newParticle = new Particle(
            // x
            width * Math.random(),
            // y
            -height * Math.random(),
            // size
            season.particleSize + Math.random() * 10,
            // speed x
            0,
            // speed y
            0,
            // mass
            0.1 + Math.random(),
            // gravity
            season.precipitationWeight,
            // gravity speed
            0,
            // wind
            season.windRange * -1 + Math.random() * season.windRange * 2,
            // wind speed
            0,
            // opacity
            Math.random(),
            // opacity growth rate
            0.1,
            // Reflective hue
            season.hueMin + Math.ceil(Math.random() * season.hueMax),

        );

        particles.push(newParticle);
    }

    // /* Wind direction change */
    var windDirection = 1;
    function direction() {
        windDirection = Math.round(-1 + Math.random() * 2);
    }
    setInterval(direction,5000);

    /* Precipitation style & behavior */
    function update(progress) {

        for (var i = 0; i < particles.length; i++) {
            particles[i].gravitySpeed += particles[i].gravity * particles[i].mass;
            particles[i].windSpeed += (particles[i].wind / particles[i].mass) * windDirection;
            particles[i].x += particles[i].speedX + particles[i].windSpeed;
            particles[i].y += particles[i].speedY + particles[i].gravitySpeed;
            particles[i].opacity += season.opacityGrowthRate;

            /* If the precipitation falls out of the screen */
            if (particles[i].y > height || particles[i].x > width || particles[i].x < 0) {
                /* Reset attributes */
                particles[i].speedY = 0;
                particles[i].speedX = 0;
                particles[i].gravitySpeed = 0;
                particles[i].windSpeed = 0;
                // particles[i].opacity = 0;
                
                /* Reset position */
                if (particles[i].y > height) {
                    particles[i].y = Math.ceil(height * Math.random()) - height;
                }
                if (particles[i].x > width) {
                    particles[i].x = Math.ceil(width * Math.random());
                }
                if (particles[i].x <= 0) {
                    particles[i].x = Math.ceil(width * Math.random());
                }
            }
        }
    }

    /* Draw the precipitation */
    function draw() {

        /* Clear the scene */
        context.clearRect(0, 0, width, height);

        /* Redraw the precipitation in a new location */
        for (var i = 0; i < particles.length; i++) {
            context.fillStyle = "hsl(" + particles[i].reflectiveHue + ", " + season.saturation + "%, " + season.lightness + "%)";
            context.fillRect(particles[i].x, particles[i].y, particles[i].size, particles[i].size);
        }
    }

    /* Loop the precipitation */
    function loop(timestamp) {
        var progress = (timestamp - lastRender);
        update(progress);
        draw();
        lastRender = timestamp;
        window.requestAnimationFrame(loop);
    }

    var lastRender = 0;
    window.requestAnimationFrame(loop);
}

window.onload = () => {

    var hoursInput = document.getElementById("hours");
    var hoursValue = document.getElementById("hours-value");
    var monthsInput = document.getElementById("months");
    var monthsValue = document.getElementById("months-value");
    var resetButton = document.getElementById("reset");
    var showTimeButton = document.getElementById("show-time-menu");
    var hideTimeButton = document.getElementById("hide-time-menu");
    var timeMenu = document.getElementById("time-menu");

    var date = new Date();
    var hours = date.getHours();
    var month = date.getMonth();

    hoursInput.value = hours;
    monthsInput.value = month;

    initializeScene(date, hoursValue, monthsValue);

    showTimeButton.onclick = function() {
        toggleDialog(timeMenu, "show");
    }

    hideTimeButton.onclick = function() {
        toggleDialog(timeMenu, "hide");
    }

    monthsInput.onchange = function(e) {
        var newDate = new Date(date.getFullYear(), e.target.value, date.getDay(), hoursInput.value, date.getMinutes(), date.getSeconds(), date.getMilliseconds());
        resetButton.disabled = false;
        initializeScene(newDate, hoursValue, monthsValue);
    }
    hoursInput.onchange = function(e) {
        var newDate = new Date(date.getFullYear(),monthsInput.value, date.getDay(), e.target.value, date.getMinutes(), date.getSeconds(), date.getMilliseconds());
        resetButton.disabled = false;
        initializeScene(newDate, hoursValue, monthsValue);
    }

    resetButton.onclick = function() {
        var newDate = new Date();
        resetButton.disabled = true;
        hoursInput.value = date.getHours();
        monthsInput.value = date.getMonth();
        initializeScene(newDate, hoursValue, monthsValue);
    }
};