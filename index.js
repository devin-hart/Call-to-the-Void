const sineSlider = document.querySelector('.sine-slider');
const sineVolSlider = document.querySelector('.sine-vol-slider');
var x = 0;
const sineVol = new Tone.Volume(x);
// const squareVol = new Tone.Volume(0);

const squareSlider = document.querySelector('.square-slider');

const sawtoothSlider = document.querySelector('.sawtooth-slider');

const triangleSlider = document.querySelector('.triangle-slider');

const test = document.querySelector('.test');

const sineSynth = new Tone.Synth({
  "oscillator" :
  { "type": "sine" }}).toMaster();

sineSynth.chain(sineVol, Tone.Master);
const squareSynth = new Tone.Synth({
  "oscillator" :
  { "type": "square" }}).toMaster();
  // squareSynth.chain(squareVol, Tone.Master);

const sawtoothSynth = new Tone.Synth({
  "oscillator" :
  { "type": "sawtooth" }}).toMaster();

const triangleSynth = new Tone.Synth({
  "oscillator" :
  { "type": "triangle" }}).toMaster();

const testSynth = new Tone.DuoSynth( { "voice0" :
  { "oscillator" : { "type" : "triangle" } } },
  { "voice1" :
  { "oscillator" : { "type" : "sine" } } } ).toMaster();

sineSlider.addEventListener('input', () => { console.log(sineSlider.value); });
sineSlider.addEventListener('input', () => { sineSynth.triggerAttackRelease(sineSlider.value, "3600"); });

sineVolSlider.addEventListener('input', () => { console.log(sineVolSlider.value); });
sineVolSlider.addEventListener('input', () => { x = sineVolSlider.value; });


squareSlider.addEventListener('input', () => { console.log(squareSlider.value); });
squareSlider.addEventListener('input', () => { squareSynth.triggerAttackRelease(squareSlider.value, "3600"); });

sawtoothSlider.addEventListener('input', () => { console.log(sawtoothSlider.value); });
sawtoothSlider.addEventListener('input', () => { sawtoothSynth.triggerAttackRelease(sawtoothSlider.value, "3600"); });

triangleSlider.addEventListener('input', () => { console.log(triangleSlider.value); });
triangleSlider.addEventListener('input', () => { triangleSynth.triggerAttackRelease(triangleSlider.value, "3600"); });

test.addEventListener('click', () => { testSynth.triggerAttackRelease("D2", "3600"); });
