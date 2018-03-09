// ***Query Selectors***
const sineKnob = document.querySelector('#sine-knob');
const sineVolKnob = document.querySelector('#sine-vol-knob');

const triangleKnob = document.querySelector('#triangle-knob');
const triangleVolKnob = document.querySelector('#triangle-vol-knob');

const sawtoothKnob = document.querySelector('#sawtooth-knob');
const sawtoothVolKnob = document.querySelector('#sawtooth-vol-knob');

const pulseKnob = document.querySelector('#pulse-knob');
const pulseVolKnob = document.querySelector('#pulse-vol-knob');
const pwmKnob = document.querySelector('#pwm-knob')

// ***Oscillators***
const sineOsc = new Tone.Oscillator({ type : "sine",
                                      frequency : 0,
                                      volume: -64,
                                      detune : 0,
                                      phase : 0,
                                      partials : []}).toMaster().start();

const triangleOsc = new Tone.Oscillator({ type : "triangle",
                                          frequency : 0,
                                          volume: 0,
                                          detune : 0,
                                          phase : 0,
                                          partials : []}).toMaster().start();

const sawtoothOsc = new Tone.Oscillator({ type : "sawtooth",
                                          frequency : 0,
                                          volume: -64,
                                          detune : 0,
                                          phase : 0,
                                          partials : []}).toMaster().start();


const pulseOsc = new Tone.PWMOscillator({ frequency : 0,
                                          volume: -64,
                                          detune : 0,
                                          phase  : 0,
                                          modulationFrequency : 0}).toMaster().start();

// ***Event Listeners***
  // Frequency Knobs
sineKnob.addEventListener('input', () => {
  sineOsc.frequency.value = sineKnob.value;
  console.log("Sine frequency: " + sineOsc.frequency.value); });

triangleKnob.addEventListener('input', () => {
  triangleOsc.frequency.value = triangleKnob.value;
  console.log("Triangle frequency: " + triangleOsc.frequency.value); });

sawtoothKnob.addEventListener('input', () => {
  sawtoothOsc.frequency.value = sawtoothKnob.value;
  console.log("Sawtooth frequency: " + sawtoothOsc.frequency.value); });

pulseKnob.addEventListener('input', () => {
  pulseOsc.frequency.value = pulseKnob.value;
  console.log("Pulse frequency: " + pulseOsc.frequency.value); });

  // Volume Knobs
sineVolKnob.addEventListener('input', () => {
  sineOsc.volume.value = sineVolKnob.value;
  console.log("Sine volume: " + sineOsc.volume.value); });

triangleVolKnob.addEventListener('input', () => {
  triangleOsc.volume.value = triangleVolKnob.value;
  console.log("Triangle volume: " + triangleOsc.volume.value); });

sawtoothVolKnob.addEventListener('input', () => {
  sawtoothOsc.volume.value = sawtoothVolKnob.value;
  console.log("Sawtooth volume: " + sawtoothOsc.volume.value); });

pulseVolKnob.addEventListener('input', () => {
  pulseOsc.volume.value = pulseVolKnob.value;
  console.log("Pulse volume: " + pulseOsc.volume.value); });

  // PWM
pwmKnob.addEventListener('input', () => {
  pulseOsc.modulationFrequency.value = pwmKnob.value;
  console.log("PWM Duty Cycle: " + pulseOsc.modulationFrequency.value); });
