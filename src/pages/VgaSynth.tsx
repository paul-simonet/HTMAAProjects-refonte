import Layout from "@/components/site/Layout";
import { Photo, YouTube } from "@/components/site/Media";
import { NextProject, ProjectHead, Section } from "@/components/site/Parts";
import { vgaSketch } from "@/content/vgaSketch";

import screenOutput from "@/assets/vga/screen-output.jpg";
import vgaWiring from "@/assets/vga/vga-wiring.jpg";
import rpiPcb from "@/assets/vga/rpi-pcb.jpg";
import rpiComponents from "@/assets/vga/rpi-components.jpg";
import generatorSetup from "@/assets/vga/generator-setup.jpg";
import oscilloscope from "@/assets/vga/oscilloscope.jpg";
import schematic from "@/assets/vga/schematic.png";
import bytebeat from "@/assets/vga/bytebeat.mp3";

const patterns = [
  { id: "mCX0gqyyXhM", title: "Multicolour noise", kept: true, note: "Kept. Confirmed that pseudo-random noise could be pushed to the screen." },
  { id: "BTjgVa-C8ak", title: "Random patterns", kept: true, note: "Kept. Fast to compute, with a glitch-art look." },
  { id: "nUNMBoyrw08", title: "Fireworks", kept: false, note: "Dropped. Too many particles to store in the Uno's memory." },
  { id: "t42SMN7qEeU", title: "XOR carpet", kept: true, note: "Kept. A classic VGA effect that is very quick to draw." },
];

const VgaSynth = () => (
  <Layout>
    <ProjectHead
      title="VGA Synth"
      lede="An Arduino Uno that draws a rotating spiral and a ByteBeat waveform straight to a VGA monitor, with potentiometers to control the spiral."
      facts={[
        { label: "Team", value: "Maxime Vial, Paul Simonet, Alexandre Le Port" },
        { label: "Hardware", value: "Arduino Uno, VGA connector, resistors, potentiometers" },
        { label: "Software", value: "Arduino (C++), VGAX library, KiCad" },
        { label: "Lab equipment", value: "Oscilloscope, function generator, soldering station" },
      ]}
    />

    <div className="hero hero--wide">
      <YouTube
        id="WGuRBJCneys"
        title="VGA Synth demo"
        caption="Demo. The line across the screen is the ByteBeat waveform; turning the potentiometer changes the spiral behind it."
      />
    </div>

    <Section id="how" title="How it works">
      <div className="prose">
        <p>
          A VGA monitor expects precise timing pulses (horizontal and vertical sync) plus a voltage for each colour.
          We used the <a href="https://github.com/smaffer/vgax">VGAX library</a>, which produces a 120 × 60 pixel,
          four-colour image on an ATmega328P by generating the sync pulses from a hardware timer. Its frame buffer
          already takes 1,800 of the chip's 2,048 bytes of RAM, which constrained everything we drew afterwards.
        </p>
        <p>The sketch draws the screen one column at a time:</p>
        <ul>
          <li>
            The background is a spiral. Each pixel's colour comes from its distance to the centre plus a rotation
            angle.
          </li>
          <li>
            On top of it, the sketch plots the ByteBeat formula <code>t * (t &gt;&gt; 5 | t &gt;&gt; 8)</code> as a
            waveform, one value per column.
          </li>
          <li>
            Two potentiometers are read at the start of each sweep: one sets how fast the spiral turns, the other
            rotates it by hand.
          </li>
        </ul>
        <p>
          The sound in the demo does not come from the Arduino. It is a ByteBeat composition by Maxime, based on the
          same formula, added when the video was edited.
        </p>
        <audio controls preload="none" src={bytebeat} aria-label="ByteBeat soundtrack" />
      </div>
      <details>
        <summary>Show the full Arduino sketch</summary>
        <pre>
          <code>{vgaSketch}</code>
        </pre>
      </details>
    </Section>

    <Section id="raspberry" title="First attempt: a Raspberry Pi">
      <div className="prose">
        <p>
          The first plan was a Raspberry Pi Zero generating the VGA signal from its GPIO pins, with three
          potentiometers for red, green and blue. We drew the circuit in KiCad and gathered the components.
        </p>
        <p>
          It didn't work. The Pi runs Linux, and the operating system can interrupt our program at any moment to run
          something else. A VGA signal needs every pulse on time, so these interruptions made the image jitter. We
          switched to an Arduino, where our code is the only thing running on the chip.
        </p>
      </div>
      <div className="figures figures--2">
        <Photo src={rpiPcb} alt="KiCad layout of the Raspberry Pi board" caption="The Raspberry Pi circuit in KiCad." />
        <Photo src={rpiComponents} alt="Components laid out for the Raspberry Pi version" caption="Components for the Raspberry Pi version." shape="portrait" />
      </div>
    </Section>

    <Section id="build" title="The Arduino build">
      <div className="prose">
        <p>
          The Arduino's digital pins go to the VGA connector through resistors, which bring the 5 V colour outputs
          down to the roughly 0.7 V a VGA monitor expects. We soldered the connector ourselves.
        </p>
      </div>
      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Arduino pin</th>
              <th>Connected to</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>D3</td><td>Horizontal sync</td></tr>
            <tr><td>D9</td><td>Vertical sync</td></tr>
            <tr><td>D6, D7</td><td>Colour (two bits, four colours)</td></tr>
            <tr><td>A0, A1</td><td>Potentiometers: rotation speed and manual angle</td></tr>
          </tbody>
        </table>
      </div>
      <div className="figures">
        <Photo src={schematic} alt="Wiring diagram of the Arduino, breadboards, resistors and potentiometer" caption="Wiring diagram." />
      </div>
      <div className="figures figures--2">
        <Photo src={vgaWiring} alt="Wires soldered to a VGA connector" caption="The soldered VGA connector." shape="portrait" />
        <Photo src={screenOutput} alt="Monitor showing a pattern generated by the Arduino" caption="Output on the monitor." shape="portrait" />
      </div>
    </Section>

    <Section id="analog" title="Adding analog texture">
      <div className="prose">
        <p>
          To make the image less clean, we fed signals from a function generator into the colour line through a
          100 Ω resistor: a 63 kHz ramp and a 57 kHz pulse. Because these frequencies don't match the screen's
          timing, they add moving stripes and interference to the image. We used an oscilloscope to look at the signals
          going into the circuit.
        </p>
      </div>
      <div className="figures figures--2">
        <Photo src={generatorSetup} alt="Function generator connected to the circuit" caption="The function generator settings." shape="portrait" />
        <Photo src={oscilloscope} alt="Monitor showing interference stripes from the injected signal" caption="Interference stripes on the monitor." shape="portrait" />
      </div>
    </Section>

    <Section id="patterns" title="Patterns we tried">
      <div className="prose">
        <p>Before the spiral, we tested several visuals. Memory was the main reason to drop one.</p>
      </div>
      <div className="figures figures--2">
        {patterns.map((p) => (
          <YouTube
            key={p.id}
            id={p.id}
            title={p.title}
            caption={
              <>
                <strong>{p.title}.</strong>{" "}
                <span className={p.kept ? "verdict verdict--kept" : "verdict verdict--dropped"}>{p.note}</span>
              </>
            }
          />
        ))}
      </div>
    </Section>

    <Section id="problems" title="Problems and fixes">
      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Symptom</th>
              <th>Cause</th>
              <th>Fix</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>No image at all</td>
              <td>Dry solder joints on the VGA connector (pins 13 and 14)</td>
              <td>Reflowed the joints and checked continuity with a multimeter</td>
            </tr>
            <tr>
              <td>Black square in the centre</td>
              <td>Division by zero in the spiral calculation</td>
              <td>
                Added a guard, <code>if (abs(dx) &gt; 1)</code>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </Section>

    <Section id="files" title="Files">
      <ul className="link-list">
        <li>
          <a href="/downloads/vga_synth.ino" download>
            Arduino sketch
          </a>{" "}
          <span>vga_synth.ino</span>
        </li>
        <li>
          <a href="/downloads/schematic.png" download>
            Wiring diagram
          </a>{" "}
          <span>PNG</span>
        </li>
        <li>
          <a href="https://github.com/smaffer/vgax">VGAX library</a> <span>GitHub</span>
        </li>
        <li>
          <a href="https://dollchan.net/bytebeat/">ByteBeat player</a> <span>to try the formula in a browser</span>
        </li>
      </ul>
    </Section>

    <NextProject current="/vga-synth" />
  </Layout>
);

export default VgaSynth;
