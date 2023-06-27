function updateTime() {
  // Los Angeles
  let losAngelesElement = document.querySelector("#los-angeles");

  let losAngelesDateElement = losAngelesElement.querySelector(" .date");
  let losAngelesTimeElement = losAngelesElement.querySelector(" .time");

  let losAngelesTime = moment().tz("America/Los_Angeles");

  losAngelesDateElement.innerHTML = losAngelesTime.format("MMMM Do YYYY");

  losAngelesTimeElement.innerHTML = losAngelesTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );
  // Paris
  let parisElement = document.querySelector("#paris");

  let parisDateElement = parisElement.querySelector(" .date");
  let parisTimeElement = parisElement.querySelector(" .time");

  let parisTime = moment().tz("Europe/Paris");

  parisDateElement.innerHTML = parisTime.format("MMMM Do YYYY");

  parisTimeElement.innerHTML = parisTime.format("h:mm:ss [<small>]A[</small>]");

  // Singapore

  let singaporeElement = document.querySelector("#singapore");

  let singaporeDateElement = singaporeElement.querySelector(" .date");
  let singaporeTimeElement = singaporeElement.querySelector(" .time");

  let singaporeTime = moment().tz("Asia/Singapore");

  singaporeDateElement.innerHTML = singaporeTime.format("MMMM Do YYYY");

  singaporeTimeElement.innerHTML = singaporeTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );

  // Buenos Aires

  let buenosAiresElement = document.querySelector("#buenos-aires");

  let buenosAiresDateElement = buenosAiresElement.querySelector(" .date");
  let buenosAiresTimeElement = buenosAiresElement.querySelector(" .time");

  let buenosAiresTime = moment().tz("America/Buenos_Aires");

  buenosAiresDateElement.innerHTML = buenosAiresTime.format("MMMM Do YYYY");

  buenosAiresTimeElement.innerHTML = buenosAiresTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );
}

updateTime();
setInterval(updateTime, 1000);
