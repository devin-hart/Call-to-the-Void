# Call to the Void
## JavaScript Drone Synthesizer

Call to the Void is a 4 oscillator drone synthesizer using the Web Audio
API through the Tone.js framework.

### What's a drone?
According to Merriam Webster a drone is a deep sustained or monotonous sound. By this definition a drone may sound dull but in practice drones are very important to creating atmosphere in music and movie soundtracks. Drones in combination with other drones can create eerie to pleasant atmospheric sounds.

### Why a drone synth?
Drone synths are a simple concept that can quickly create some interesting results by just turning a few knobs. There are also 100s of different online keyboard synthesizers on the internet and if you're not familiar with playing the piano these synthesizers aren't much fun beyond pressing each key and hearing each sound for a minute or two. So with Call to the Void you may get another 2 or 3 minutes of enjoyment out of this drone synth than you would another keyboard synthesizer! :D

## Display
### Oscillators Knobs

The left side knobs control a different oscillators frequency.
Frequency range goes from 16-370 hz or ~C0 - ~F#3 (note/octave.)
This range was chosen based on the Grendel Drone Commander 1 frequency range.

### Volume Knobs
The right side knobs control a different oscillators volume.
Volume ranges goes from -64 dB (inaudible)  to 0 dB (loudest) based on sound
mixer level ranges.

### PWM Knob
The Pulse oscillator has a PWM (Pulse Width Modulation) knob which controls the
duty cycle of the Pulse oscillator from 0 - 100.
In depth explanation can be found [here.](https://www.keithmcmillen.com/blog/simple-synthesis-part-6-pulse-width-modulation/)

### Lights
The center lights will trigger red for "on" when the volume value is > -64dB for it's corresponding oscillator and black for "off" when the volume value is = -64 db.

### Value boxes
The value boxes display the corresponding oscillator's frequency or volume.  

## Built with:
- HTML
- CSS
- Vanilla JavaScript

#### JavaScript framework/library:
- [Tone.js](https://tonejs.github.io/)
- [Input-Knobs.js](https://github.com/g200kg/input-knobs)

Thank you to [Devon Gardner](https://github.com/Gradner) for helping me get my lights feature working properly.
