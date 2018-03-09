// ***Query Selectors***
const sineSlider = document.querySelector('.sine-slider');
const sineVol = document.querySelector('.sine-vol-slider');

const triangleSlider = document.querySelector('.triangle-slider');
const triangleVol = document.querySelector('.triangle-vol-slider');

const sawtoothSlider = document.querySelector('.sawtooth-slider');
const sawtoothVol = document.querySelector('.sawtooth-vol-slider');

const pulseSlider = document.querySelector('.pulse-slider');
const pulseVol = document.querySelector('.pulse-vol-slider');

// ***Oscillators***
const sineOsc = new Tone.Oscillator({ type : "sine",
                                      frequency : sineSlider.value,
                                      volume: sineVol.value,
                                      detune : 0,
                                      phase : 0,
                                      partials : []}).toMaster().start();

const triangleOsc = new Tone.Oscillator({ type : "triangle",
                                          frequency : triangleSlider.value,
                                          volume: triangleVol.value,
                                          detune : 0,
                                          phase : 0,
                                          partials : []}).toMaster().start();

const sawtoothOsc = new Tone.Oscillator({ type : "sawtooth",
                                          frequency : sawtoothSlider.value,
                                          volume: sawtoothVol.value,
                                          detune : 0,
                                          phase : 0,
                                          partials : []}).toMaster().start();


const pulseOsc = new Tone.PWMOscillator({ frequency : pulseSlider.value,
                                          volume: pulseVol.value,
                                          detune : 0,
                                          phase  : 0,
                                          modulationFrequency : 0.4}).toMaster().start();

// ***Event Listeners***
  // Frequency Sliders
sineSlider.addEventListener('input', () => {
  sineOsc.frequency.value = sineSlider.value;
  console.log("Sine frequency: " + sineOsc.frequency.value); });

triangleSlider.addEventListener('input', () => {
  triangleOsc.frequency.value = triangleSlider.value;
  console.log("Triangle frequency: " + triangleOsc.frequency.value); });

sawtoothSlider.addEventListener('input', () => {
  sawtoothOsc.frequency.value = sawtoothSlider.value;
  console.log("Sawtooth frequency: " + sawtoothOsc.frequency.value); });

pulseSlider.addEventListener('input', () => {
  pulseOsc.frequency.value = pulseSlider.value;
  console.log("Pulse frequency: " + pulseOsc.frequency.value); });

  // Volume Sliders
sineVol.addEventListener('input', () => {
  sineOsc.volume.value = sineVol.value;
  console.log("Sine volume: " + sineOsc.volume.value); });

triangleVol.addEventListener('input', () => {
  triangleOsc.volume.value = triangleVol.value;
  console.log("Triangle volume: " + triangleOsc.volume.value); });

sawtoothVol.addEventListener('input', () => {
  sawtoothOsc.volume.value = sawtoothVol.value;
  console.log("Sawtooth volume: " + sawtoothOsc.volume.value); });

pulseVol.addEventListener('input', () => {
  pulseOsc.volume.value = pulseVol.value;
  console.log("Pulse volume: " + pulseOsc.volume.value); });
