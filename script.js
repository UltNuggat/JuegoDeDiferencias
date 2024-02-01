var aciertos=0;
var sonido = new Audio();
sonido.src = "SonidoBoton.mp3";
var msg
document.getElementById("curtainActive").addEventListener("click", curtain)
document.getElementById("unos").addEventListener("click", encontrada1 );
document.getElementById("dos").addEventListener("click", encontrada1 );
document.getElementById("tres").addEventListener("click", encontrada1 );
document.getElementById("cuatro").addEventListener("click", encontrada1 );
document.getElementById("cinco").addEventListener("click", encontrada1 );
document.getElementById("seis").addEventListener("click", encontrada1 );
document.getElementById("siete").addEventListener("click", encontrada1);

function curtain() {
    var curtainElement = document.getElementById("curtain");
    curtainElement.classList.toggle("curtain-open");
    var boton = document.getElementById("curtainActive");
    boton.style.display = 'none';
	startTimer();
  if(localStorage.highscore == undefined){
    localStorage.highscore = 0;
  }

}

var timerScore=0;
var app = document.getElementById("app");


function encontrada1(event) {
	const { alert, warning, info } = COLOR_CODES;
	aciertos++;
	sonido.play();
	
	var x = event.target.id;
    document.getElementById(x).style.opacity=0.9;

	document.getElementById(x).removeEventListener("click", encontrada1);
	x=x + 'b';
	
    document.getElementById("demo").innerHTML = "Aciertos " + aciertos;
	document.getElementById(x).style.opacity=0.9;

	document.getElementById("metro").value = aciertos*15;
	
	var i = 'images/termo' + aciertos + '.png';
	if (aciertos==1){
	document.getElementById("historia").innerHTML = "Esta obra de arte fue pintada por Bartolomé Esteban Murillo en el año 1672.";
	document.getElementById('termo').src=i;
	msg = new SpeechSynthesisUtterance('Esta obra de arte fue pintada por Bartolomé Esteban Murillo en el año 1672. ');

  msg.lang= "es-ES";
	window.speechSynthesis.speak(msg);	
	if(timePassed >= 30){
		startTimer();
	}
timerScore =timerScore + timeLeft * 1000;
	timePassed = -1;
	document
	  .getElementById("base-timer-path-remaining")
      .classList.remove(warning.color);
    document
      .getElementById("base-timer-path-remaining")
      .classList.remove(alert.color);
	  document
	  .getElementById("base-timer-path-remaining")
      .classList.add(info.color);
      document.getElementById("Mscore").innerHTML = "Puntuación Máxima: " + localStorage.highscore;
      document.getElementById("Pscore").innerHTML = "Tu puntuación: " + (aciertos * 1000  + timerScore);
      

      
}
	else if(aciertos==2){
	document.getElementById("historia").innerHTML = "Dentro de la obra, Murillo representa a Cristo realizando su primer milagro, en el que convierte el agua en vino. ";
	document.getElementById('termo').src=i;
	msg = new SpeechSynthesisUtterance('Dentro de la obra, Murillo representa a Cristo realizando su primer milagro, en el que convierte el agua en vino.')

  msg.lang= "es-ES";  window.speechSynthesis.speak(msg);	

if(timePassed >= 30){
		startTimer();
	}
  timerScore =timerScore + timeLeft * 1000;
	document
	  .getElementById("base-timer-path-remaining")
      .classList.remove(warning.color);
    document
      .getElementById("base-timer-path-remaining")
      .classList.remove(alert.color);
	  document
	  .getElementById("base-timer-path-remaining")
      .classList.add(info.color);
timePassed = -1;
document.getElementById("Mscore").innerHTML = "Puntuación Máxima: " + localStorage.highscore;
document.getElementById("Pscore").innerHTML = "Tu puntuación: " + (aciertos * 1000  + timerScore);

	  }
	else if(aciertos==3){
	document.getElementById("historia").innerHTML = " Murillo ha descrito este episodio bíblico como si tuviera lugar en su propia ciudad, Sevilla. ";
	document.getElementById('termo').src=i;
  msg = new SpeechSynthesisUtterance(" Murillo ha descrito este episodio bíblico como si tuviera lugar en su propia ciudad, Sevilla.")
  msg.lang= "es-ES";
  window.speechSynthesis.speak(msg);	
	if(timePassed >= 30){
		startTimer();
	}
  timerScore =timerScore + timeLeft * 1000;
	timePassed = -1;
	document
	  .getElementById("base-timer-path-remaining")
      .classList.remove(warning.color);
    document
      .getElementById("base-timer-path-remaining")
      .classList.remove(alert.color);
	  document
	  .getElementById("base-timer-path-remaining")
      .classList.add(info.color);
      document.getElementById("Mscore").innerHTML = "Puntuación Máxima: " + localStorage.highscore;
document.getElementById("Pscore").innerHTML = "Tu puntuación: " + (aciertos * 1000  + timerScore);

	  	}
	else if(aciertos==4){
	document.getElementById("historia").innerHTML = "Las bodas de Caná es una de las pocas pinturas conocidas de la España moderna temprana que representa una figura negra.";
	document.getElementById('termo').src=i;
  msg = new SpeechSynthesisUtterance("Las bodas de Caná es una de las pocas pinturas conocidas de la España moderna temprana que representa una figura negra.")
  msg.lang= "es-ES";
  window.speechSynthesis.speak(msg);	
	if(timePassed >= 30){
		startTimer();
	}
  timerScore =timerScore + timeLeft * 1000;
	timePassed = -1;
	document
	  .getElementById("base-timer-path-remaining")
      .classList.remove(warning.color);
    document
      .getElementById("base-timer-path-remaining")
      .classList.remove(alert.color);
	  document
	  .getElementById("base-timer-path-remaining")
      .classList.add(info.color);
      document.getElementById("Mscore").innerHTML = "Puntuación Máxima: " + localStorage.highscore;
      document.getElementById("Pscore").innerHTML = "Tu puntuación: " + (aciertos * 1000  + timerScore);
      
	}
	else if(aciertos==5){
	document.getElementById("historia").innerHTML = "Sevilla fue un importante centro para el comercio de esclavos a principios del período moderno, y es probable que este niño fuera esclavizado en el país.";
	document.getElementById('termo').src=i;
  msg = new SpeechSynthesisUtterance("Sevilla fue un importante centro para el comercio de esclavos a principios del período moderno, y es probable que este niño fuera esclavizado en el país.")
  msg.lang= "es-ES";
  window.speechSynthesis.speak(msg);	
	if(timePassed >= 30){
		startTimer();
	}
  timerScore =timerScore + timeLeft * 1000;
	timePassed = -1;
	document
	  .getElementById("base-timer-path-remaining")
      .classList.remove(warning.color);
    document
      .getElementById("base-timer-path-remaining")
      .classList.remove(alert.color);
	  document
	  .getElementById("base-timer-path-remaining")
      .classList.add(info.color);
      document.getElementById("Mscore").innerHTML = "Puntuación Máxima: " + localStorage.highscore;
      document.getElementById("Pscore").innerHTML = "Tu puntuación: " + (aciertos * 1000 + timerScore);
      
	}
	else if(aciertos==6){
	document.getElementById("historia").innerHTML = "Actualmente se encuentra en el Museo Metropolitano de Arte de Nueva York.";
	document.getElementById('termo').src=i;
  msg = new SpeechSynthesisUtterance("Actualmente, se encuentra en el Museo Metropolitano de Arte de Nueva York.")
  msg.lang= "es-ES";
  window.speechSynthesis.speak(msg);	
	if(timePassed >= 30){
		startTimer();
	}
  timerScore =timerScore + timeLeft * 1000;
	timePassed = -1;
	document
	  .getElementById("base-timer-path-remaining")
      .classList.remove(warning.color);
    document
      .getElementById("base-timer-path-remaining")
      .classList.remove(alert.color);
	  document
	  .getElementById("base-timer-path-remaining")
      .classList.add(info.color);
      document.getElementById("Mscore").innerHTML = "Puntuación Máxima: " + localStorage.highscore;
      document.getElementById("Pscore").innerHTML = "Tu puntuación: " + (aciertos * 1000  + timerScore);
      
	}
	else if(aciertos==7){
    timerScore =timerScore + timeLeft * 1000;
	document.getElementById("historia").innerHTML = "Es de estilo barroco y la técnica utilizada fue óleo sobre lienzo.";
	document.getElementById('termo').src=i;
  msg = new SpeechSynthesisUtterance("Es de estilo barroco y la técnica utilizada fue óleo sobre lienzo.")
  msg.lang= "es-ES";
  window.speechSynthesis.speak(msg);	
	document
.getElementById("base-timer-path-remaining")
.classList.remove(warning.color);
document
.getElementById("base-timer-path-remaining")
.classList.remove(alert.color);
document
.getElementById("base-timer-path-remaining")
.classList.remove(info.color);
if ( (aciertos * 1000  + timerScore ) > localStorage.highscore){
localStorage.highscore = (aciertos * 1000  + timerScore) ;
}
document.getElementById("Mscore").innerHTML = "Puntuación Máxima: " + localStorage.highscore;
document.getElementById("Pscore").innerHTML = "Tu puntuación: " + (aciertos * 1000  + timerScore);
	}
	}
	
	
	


const FULL_DASH_ARRAY = 283;
const WARNING_THRESHOLD = 15;
const ALERT_THRESHOLD = 7.5;

const COLOR_CODES = {
  info: {
    color: "green"
  },
  warning: {
    color: "orange",
    threshold: WARNING_THRESHOLD
  },
  alert: {
    color: "red",
    threshold: ALERT_THRESHOLD
  }
};

const TIME_LIMIT = 30;
let timePassed = 0;
let timeLeft = TIME_LIMIT;
let timerInterval = null;
let remainingPathColor = COLOR_CODES.info.color;
//circulo y su aplicacion- por chat gpt
document.getElementById("app").innerHTML = `
<div class="base-timer">
  <svg class="base-timer__svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <g class="base-timer__circle">
      <circle class="base-timer__path-elapsed" cx="50" cy="50" r="45"></circle>
      <path
        id="base-timer-path-remaining"
        stroke-dasharray="283"
        class="base-timer__path-remaining ${remainingPathColor}"
        d="
          M 50, 50
          m -45, 0
          a 45,45 0 1,0 90,0
          a 45,45 0 1,0 -90,0
        "
      ></path>
    </g>
  </svg>
  <span id="base-timer-label" class="base-timer__label">${formatTime(
    timeLeft
  )}</span>
</div>
`;

function onTimesUp() {
	if(aciertos==7){
return;
}
  clearInterval(timerInterval);
  
}

function startTimer() {
	if(aciertos==7){
return;
}
  timerInterval = setInterval(() => {
    timePassed = timePassed += 1;
    timeLeft = TIME_LIMIT - timePassed;
    document.getElementById("base-timer-label").innerHTML = formatTime(
      timeLeft
    );
    
    setRemainingPathColor(timeLeft);

    if (timeLeft === 0) {
      onTimesUp();
    }
	setCircleDasharray();
  }, 700);
}

function formatTime(time) {
    if (aciertos == 7) {
        return "0:00";
    }

    let minutes = Math.floor(time / 60);
    let seconds = time % 60;

    if (seconds < 10) {
        seconds = `0${seconds}`;
    }

    return `${minutes}:${seconds}`;
}


function setRemainingPathColor(timeLeft) {
	if(aciertos==7){
return;
}
  const { alert, warning, info } = COLOR_CODES;
  if (timeLeft <= alert.threshold) {
    document
      .getElementById("base-timer-path-remaining")
      .classList.remove(warning.color);
    document
      .getElementById("base-timer-path-remaining")
      .classList.add(alert.color);
  } else if (timeLeft <= warning.threshold) {
    document
      .getElementById("base-timer-path-remaining")
      .classList.remove(info.color);
    document
      .getElementById("base-timer-path-remaining")
      .classList.add(warning.color);
  }
}

function calculateTimeFraction() {
	if(aciertos==7){
return;
}
  const rawTimeFraction = timeLeft / TIME_LIMIT;
  return rawTimeFraction - (1 / TIME_LIMIT) * ( 1-rawTimeFraction);
}

function setCircleDasharray() {
	if(aciertos==7){
return;
}
  const circleDasharray = `${(
    calculateTimeFraction() * FULL_DASH_ARRAY
  ).toFixed(0)} 283`;
  document
    .getElementById("base-timer-path-remaining")
    .setAttribute("stroke-dasharray", circleDasharray);
}