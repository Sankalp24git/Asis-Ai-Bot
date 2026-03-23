let box = document.querySelector(".box");
let btn = document.querySelector("button");

const speakFunc = (input) => {
  let speakInput = new SpeechSynthesisUtterance(input);
  speakInput.rate = 1;
  speakInput.pitch = 1;
  speakInput.volume = 1;
  speakInput.lang = "en-In";
  // speakInput.lang='hin-In';
  window.speechSynthesis.speak(speakInput);
};

window.onload = () => {
  // speakFunc("Hello just for code");
  // greetingFunc();
};

const greetingFunc = () => {
  let date = new Date();
  let hour = date.getHours();
  if (hour >= 0 && hour < 12) {
    speakFunc("Good Morning, How can i help you !");
  } else if (hour >= 12 && hour < 16) {
    speakFunc("Good Afternoon, How can i help you !");
  } else {
    speakFunc("Good Evening, How can i help you !");
  }
};

const startVoiceInput = () => {
  if ("webkitSpeechRecognition" in window) {
    let recognition = new webkitSpeechRecognition();
    recognition.lang = "en-US";
    recognition.onresult = (e) => {
      //   console.log(e.result[0][0].transcript);
      let spokenText = e.results[0][0].transcript;
      handleCommand(spokenText.toLowerCase());
      box.classList.remove("btn-box");
      btn.innerHTML = `<i class="fa-solid fa-microphone-lines-slash"></i>`;
    };
    recognition.start();
  } else {
    alert("Your Browser does not support voice input !");
  }
};

btn.onclick = () => {
  box.classList.add("btn-box");
  btn.innerHTML = `<i class="fa-solid fa-microphone-lines"></i>`;
  startVoiceInput();
};

const handleCommand = (command) => {
  console.log(command);
  if (
    command.includes("hello") ||
    command.includes("hii") ||
    command.includes("hey") ||
    command.includes("hi")
  ) {
    speakFunc("Hello sir, How can i help you !");
  } else if (
    command.includes("who are you") ||
    command.includes("developed") ||
    command.includes("hu r u") ||
    command.includes("what you do") ||
    command.includes("what is your name")
  ) {
    speakFunc(
      "I am Virtual Assistance Asis Ai, developed by Sankalp Gahlot,I do A virtual assistant provides administrative services to clients remotely",
    );
  } else if (
    command.includes("youtube") ||
    command.includes("Youtube") ||
    command.includes("channel") ||
    command.includes("yt")
  ) {
    speakFunc("Opening... Youtube Channel");
    window.open("https://www.youtube.com/");
  } else if (command.includes("Google") || command.includes("google")) {
    speakFunc("Opening... Website");
    window.open("https://www.google.com/");
  } else if (
    command.includes("Facebook") ||
    command.includes("facebook") ||
    command.includes("fb")
  ) {
    speakFunc("Opening... Facebook");
    window.open("https://www.facebook.com/");
  } else if (
    command.includes("what is my name") ||
    command.includes("my name")
  ) {
    speakFunc("Engineer Sankalp Gahlot");
  } else if (
    command.includes("instagram") ||
    command.includes("Insta") ||
    command.includes("ig")
  ) {
    speakFunc("Opening... Instagram");
    window.open("https://www.instagram.com/");
  } else if (command.includes("calculator") || command.includes("cal")) {
    speakFunc("Opening... Calculator");
    window.open("calculator://");
  } else if (
    command.includes("system setting") ||
    command.includes("setting")
  ) {
    speakFunc(
      "Sorry, I cannot open system settings from the browser. Please open it manually.To open settings, press Windows key and type settings.",
    );
  } else if (command.includes("tell me time") || command.includes("time")) {
    let time = new Date().toLocaleString(undefined, {
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
    });
    speakFunc(time);
  } else if (command.includes("tell me date") || command.includes("date")) {
    let date = new Date().toLocaleString(undefined, {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
    speakFunc(date);
  } else {
    speakFunc(`This is What i found on internet regarding ${command}`);
    window.open(`https://www.google.com/search?q=${command}`);
  }
};
