import "./style.css";

async function getCoordinates(
  city = "toronto",
  state = "ontario",
  country = "canada"
) {
  const response = await fetch(
    `https://api.openweathermap.org/geo/1.0/direct?q=${city},${state},${country}&limit=1&appid=66a674d8f9600a051999c1eecd78a9de`,
    {
      mode: "cors",
    }
  );
  const coordinatesData = await response.json();

  return coordinatesData;
}

async function getWeather(coordinatesData) {
  let lattitude = coordinatesData[0].lat;
  let longitude = coordinatesData[0].lon;

  const weatherResponse = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lattitude}&lon=${longitude}&units=metric&appid=66a674d8f9600a051999c1eecd78a9de`,
    {
      mode: "cors",
    }
  );

  const weatherData = await weatherResponse.json();

  return weatherData;
}

const getRelevantInfo = (weatherData) => {
  const feelsLike = weatherData.main.feels_like;
  const humidity = weatherData.main.humidity;
  const tempMax = weatherData.main.temp_max.toFixed(1);
  const temp = weatherData.main.temp;
  const tempMin = weatherData.main.temp_min.toFixed(1);

  const descriptionTitle = weatherData.weather[0].main;
  let des = weatherData.weather[0].description;
  const description = des.charAt(0).toUpperCase() + des.slice(1);

  const windSpeed = weatherData.wind.speed.toFixed(1);

  const relevantInfo = {
    feelsLike,
    humidity,
    tempMax,
    temp,
    tempMin,
    descriptionTitle,
    description,
    windSpeed,
  };

  return relevantInfo;
};

const splitIntoAdress = (location) => {
  let result = location.split(",").map(function (value) {
    return value.trim();
  });

  return result;
};

async function buildHomepage() {
  //Main Div
  const content = document.getElementById("content");
  content.innerHTML = "";

  //Contains temp and form
  const mainContent = document.createElement("div");
  mainContent.setAttribute("id", "mainContent");

  const form = document.createElement("form");
  form.setAttribute("id", "locationForm");

  const label = document.createElement("label");
  label.setAttribute("for", "location");
  label.innerHTML = "City, State, Country";

  const input = document.createElement("input");
  input.setAttribute("type", "text");
  input.setAttribute("name", "location");
  input.setAttribute("id", "location");
  input.setAttribute("placeholder", "City, State, Country");
  input.addEventListener("input", () => {
    label.classList.add("active");
    input.setAttribute("placeholder", "");
  });

  const temp = document.createElement("h");
  temp.setAttribute("id", "temp");

  form.append(label);
  form.append(input);

  mainContent.append(temp);
  mainContent.append(form);

  //Contains all other data
  const secondaryContent = document.createElement("div");
  secondaryContent.setAttribute("id", "secondaryContent");

  const secondaryContentContainer = document.createElement("ul");
  secondaryContentContainer.setAttribute("id", "secondaryContentContainer");

  //description, low+high, humidity, wind speed
  const description = document.createElement("li");
  description.setAttribute("id", "description");
  description.innerHTML = ``;
  secondaryContentContainer.append(description);

  const lowAndHigh = document.createElement("li");
  lowAndHigh.setAttribute("id", "lowAndHigh");
  lowAndHigh.innerHTML = ``;
  secondaryContentContainer.append(lowAndHigh);

  const humidity = document.createElement("li");
  humidity.setAttribute("id", "humidity");
  humidity.innerHTML = ``;
  secondaryContentContainer.append(humidity);

  const windSpeed = document.createElement("li");
  windSpeed.setAttribute("id", "windSpeed");
  windSpeed.innerHTML = ``;
  secondaryContentContainer.append(windSpeed);

  secondaryContent.append(secondaryContentContainer);

  content.append(mainContent);
  content.append(secondaryContent);
}

const addSeachFeature = () => {
  const locationForm = document.getElementById("locationForm");

  locationForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const location = document.getElementById("location").value;

    const addressArray = splitIntoAdress(location);

    const city = addressArray[0];
    const state = addressArray[1];
    const country = addressArray[2];

    getCoordinates(city, state, country).then(function (coordinatesData) {
      getWeather(coordinatesData)
        .then(function (weatherData) {
          const relevantInfo = getRelevantInfo(weatherData);
          return relevantInfo;
        })
        .then(function (relevantInfo) {
          displayData(relevantInfo);
        });
    });
  });
};

const displayData = (relevantInfo) => {
  document.getElementById("temp").innerHTML = `${relevantInfo.temp}&#186C`;

  document.getElementById(
    "description"
  ).innerHTML = `${relevantInfo.description}`;

  document.getElementById(
    "lowAndHigh"
  ).innerHTML = `Low of ${relevantInfo.tempMin}&#186C, high of ${relevantInfo.tempMax}&#186C`;

  document.getElementById(
    "humidity"
  ).innerHTML = `${relevantInfo.humidity}% humidity`;

  document.getElementById(
    "windSpeed"
  ).innerHTML = `${relevantInfo.windSpeed}km/hr wind speed`;
};

buildHomepage().then(function () {
  getCoordinates().then(function (coordinatesData) {
    getWeather(coordinatesData)
      .then(function (weatherData) {
        const relevantInfo = getRelevantInfo(weatherData);
        return relevantInfo;
      })
      .then(function (relevantInfo) {
        displayData(relevantInfo);
      });
  });
});

buildHomepage().then(addSeachFeature());

// let sentences = "hello,   my, name, is";
// let result = sentences.split(",").map(function (value) {
//   return value.trim();
// });

// console.log(result);

// getWeather("Toronto", "Ontario", "Canada")
//   .then(function (weatherData) {
//     getRelevantInfo(weatherData);
//   })
//   .catch(function (e) {
//     reject(Error("Data could not be found"));
//   });

// const fibs = (num) => {
//   let ar = [];
//   for (let i = 0; i < num; i++) {
//     if (ar.length === 0) {
//       ar.push(1);
//     }
//     if (ar.length === 1) {
//       ar.push(2);
//     } else {
//       ar.push(ar[i - 1] + ar[i]);
//     }
//   }

//   return ar;
// };

// console.log(fibs(4));
