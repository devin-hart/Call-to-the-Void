// ***Query Selectors***
// Sine
const sineKnob = document.querySelector('#sine-knob');
const sineVolKnob = document.querySelector('#sine-vol-knob');
const sineOscVal = document.querySelector('#sine-osc-value');
const sineVolVal = document.querySelector('#sine-vol-value');

// Triangle
const triangleKnob = document.querySelector('#triangle-knob');
const triangleVolKnob = document.querySelector('#triangle-vol-knob');
const triangleOscVal = document.querySelector('#triangle-osc-value');
const triangleVolVal = document.querySelector('#triangle-vol-value');

// Sawtooth
const sawtoothKnob = document.querySelector('#sawtooth-knob');
const sawtoothVolKnob = document.querySelector('#sawtooth-vol-knob');
const sawtoothOscVal = document.querySelector('#sawtooth-osc-value');
const sawtoothVolVal = document.querySelector('#sawtooth-vol-value');

// Pulse
const pulseKnob = document.querySelector('#pulse-knob');
const pulseVolKnob = document.querySelector('#pulse-vol-knob');
const pwmKnob = document.querySelector('#pwm-knob');
const pulseOscVal = document.querySelector('#pulse-osc-value');
const pulseVolVal = document.querySelector('#pulse-vol-value');

// Lights
const sineLight = document.querySelector('#sine-light');
const triangleLight = document.querySelector('#triangle-light');
const sawtoothLight = document.querySelector('#sawtooth-light');
const pulseLight = document.querySelector('#pulse-light');

// Oscillators
const sineOsc = new Tone.Oscillator({ type : "sine",
                                      frequency : 0,
                                      volume: -64 }).toMaster().start();

const triangleOsc = new Tone.Oscillator({ type : "triangle",
                                          frequency : 0,
                                          volume: -64 }).toMaster().start();

const sawtoothOsc = new Tone.Oscillator({ type : "sawtooth",
                                          frequency : 0,
                                          volume: -64 }).toMaster().start();


const pulseOsc = new Tone.PWMOscillator({ frequency : 0,
                                          volume: -64,
                                          modulationFrequency : 0}).toMaster().start();



// ***Event Listeners***
// Frequency Knobs
sineKnob.addEventListener('input', () => {
  sineOsc.frequency.value = sineKnob.value;
  sineOscVal.textContent = sineKnob.value;
  console.log("Sine frequency: " + sineOsc.frequency.value);
});

triangleKnob.addEventListener('input', () => {
  triangleOsc.frequency.value = triangleKnob.value;
  triangleOscVal.textContent = triangleKnob.value;
  console.log("Triangle frequency: " + triangleOsc.frequency.value);
});

sawtoothKnob.addEventListener('input', () => {
  sawtoothOsc.frequency.value = sawtoothKnob.value;
  sawtoothOscVal.textContent = sawtoothKnob.value;
  console.log("Sawtooth frequency: " + sawtoothOsc.frequency.value);
});

pulseKnob.addEventListener('input', () => {
  pulseOsc.frequency.value = pulseKnob.value;
  pulseOscVal.textContent = pulseKnob.value;
  console.log("Pulse frequency: " + pulseOsc.frequency.value);
});

// Volume Knobs
sineVolKnob.addEventListener('input', () => {
  sineOsc.volume.value = sineVolKnob.value;
  sineVolVal.textContent = sineVolKnob.value;
  console.log("Sine volume: " + Math.ceil(sineOsc.volume.value));
  lightOn(sineVolKnob.value, sineLight);
});

triangleVolKnob.addEventListener('input', () => {
  triangleOsc.volume.value = triangleVolKnob.value;
  triangleVolVal.textContent = triangleVolKnob.value;
  console.log("Triangle volume: " + triangleOsc.volume.value);
  lightOn(triangleVolKnob.value, triangleLight);
});

sawtoothVolKnob.addEventListener('input', () => {
  sawtoothOsc.volume.value = sawtoothVolKnob.value;
  sawtoothVolVal.textContent = sawtoothVolKnob.value;
  console.log("Sawtooth volume: " + sawtoothOsc.volume.value);
  lightOn(sawtoothVolKnob.value, sawtoothLight);
});

pulseVolKnob.addEventListener('input', () => {
  pulseOsc.volume.value = pulseVolKnob.value;
  pulseVolVal.textContent = pulseVolKnob.value;
  console.log("Pulse volume: " + pulseOsc.volume.value);
  lightOn(pulseVolKnob.value, pulseLight);
});

// PWM
pwmKnob.addEventListener('input', () => {
  pulseOsc.modulationFrequency.value = pwmKnob.value;
  console.log("PWM: " + pulseOsc.modulationFrequency.value); });

function lightOn(knobVal, knobElement) {
  if (Math.ceil(knobVal) > -64) {
    knobElement.style.backgroundColor = "red";
  } else {
    knobElement.style.backgroundColor = "black";
  }
};
