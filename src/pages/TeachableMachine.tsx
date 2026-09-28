import Layout from "@/components/site/Layout";
import { Clip, Photo } from "@/components/site/Media";
import { NextProject, ProjectHead, Section } from "@/components/site/Parts";
import { phoneGameSketch } from "@/content/phoneGameSketch";

import testDigitsVideo from "@/assets/tm/test-digits.mp4";
import testDigitsPoster from "@/assets/tm/test-digits.jpg";
import testResetVideo from "@/assets/tm/test-reset.mp4";
import testResetPoster from "@/assets/tm/test-reset.jpg";
import dartsVideo from "@/assets/tm/darts.mp4";
import dartsPoster from "@/assets/tm/darts.jpg";
import mouseVideo from "@/assets/tm/mouse-colors.mp4";
import mousePoster from "@/assets/tm/mouse-colors.jpg";
import walkerVideo from "@/assets/tm/random-walker.mp4";
import walkerPoster from "@/assets/tm/random-walker.jpg";
import footballVideo from "@/assets/tm/football.mp4";
import footballPoster from "@/assets/tm/football.jpg";
import fibonacciVideo from "@/assets/tm/fibonacci.mp4";
import fibonacciPoster from "@/assets/tm/fibonacci.jpg";
import perceptronGame from "@/assets/tm/perceptron-game.jpg";
import convolution1 from "@/assets/tm/convolution-1.jpg";
import convolution2 from "@/assets/tm/convolution-2.jpg";
import trainingCaptureVideo from "@/assets/tm/training-capture.mp4";
import trainingCapturePoster from "@/assets/tm/training-capture.jpg";
import trainingTestVideo from "@/assets/tm/training-test.mp4";
import trainingTestPoster from "@/assets/tm/training-test.jpg";
import modelClasses from "@/assets/tm/model-classes.jpg";

const objects = [
  ["Bottle", "0"],
  ["Shoe", "1"],
  ["Phone", "2"],
  ["Watch", "3"],
  ["Cap", "4"],
  ["Book", "5"],
  ["Socks", "6"],
  ["Nutella jar", "7"],
  ["Glasses", "8"],
  ["Wallet", "9"],
  ["“Surprise” card", "Clear the number"],
];

const sketches: { author: string; links: string[] }[] = [
  {
    author: "Paul Simonet",
    links: ["MqR-x1gnv", "Sb6SbSyhH", "qRP6NkLmH", "HHssgSsZ7", "Y_Q0Wh0IU"].map(
      (id) => `https://editor.p5js.org/paul.simonet92/sketches/${id}`,
    ),
  },
  {
    author: "Maxime Vial",
    links: ["_P0DYBP_V", "8WpmnWGUz", "nQOfo_OEd"].map((id) => `https://editor.p5js.org/VialMaxime/sketches/${id}`),
  },
  {
    author: "Alexandre Le Port",
    links: ["swOV6YrQu", "tUeJ_Fjkq", "RWCsgWKT2", "Ar_oe81HS", "nLctiyW5V"].map(
      (id) => `https://editor.p5js.org/alp2595/sketches/${id}`,
    ),
  },
  {
    author: "Valentin Boss",
    links: ["m1MD7McqC", "Vtxqf9Zop", "vN0UbPZUG", "HP-bs1U5F"].map(
      (id) => `https://editor.p5js.org/valentinbosseditor/sketches/${id}`,
    ),
  },
];

const TeachableMachine = () => (
  <Layout>
    <ProjectHead
      title="The Phone Number Game"
      lede="A browser game that recognises everyday objects through the webcam and turns each one into a digit, so you dial a phone number by holding things up to the camera."
      facts={[
        { label: "Team", value: "Maxime Vial, Paul Simonet, Alexandre Le Port" },
        { label: "Tools", value: "Teachable Machine, ml5.js, p5.js" },
        { label: "Model", value: "Image classifier, ten digit objects plus reset and empty classes" },
      ]}
    />

    <div className="hero">
      <Clip
        src={testDigitsVideo}
        poster={testDigitsPoster}
        label="Test of the game recognising objects and building a phone number"
        shape="tall"
        caption="Full test: each object held up to the webcam adds a digit to the number on screen."
      />
      <div className="prose">
        <h2>How the game works</h2>
        <p>
          A model trained in Teachable Machine classifies the webcam image continuously. Each of ten objects stands
          for a digit, and one extra card clears the number.
        </p>
        <p>
          A single frame is never enough to type a digit. The model's answer has to stay the same, with more than
          70% confidence, for 120 frames in a row, about two seconds. A progress bar fills while you hold the
          object still. This works like debouncing a push button in electronics: it filters out the flicker when the
          model hesitates between two classes.
        </p>
        <p>The number is capped at ten digits.</p>
      </div>
    </div>

    <Section id="training" title="Training the model">
      <div className="prose">
        <p>
          We captured about 300 images per object, turning it and moving it closer and further from the camera so the
          model learns the object rather than one particular photo. We picked objects that look very different from
          each other, for example the red Nutella jar and a black shoe, to reduce confusion between classes. A
          separate “nothing” class covers the empty frame, so the game ignores the moments between two objects.
        </p>
      </div>
      <div className="table-wrap table-wrap--narrow">
        <table>
          <thead>
            <tr>
              <th>Object</th>
              <th>Input</th>
            </tr>
          </thead>
          <tbody>
            {objects.map(([object, input]) => (
              <tr key={object}>
                <td>{object}</td>
                <td>{input}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="figures figures--3">
        <Clip src={trainingCaptureVideo} poster={trainingCapturePoster} label="Capturing training images of an object" caption="Capturing training images." shape="tall" />
        <Clip src={trainingTestVideo} poster={trainingTestPoster} label="Testing the classifier live" caption="Testing the classifier live." shape="tall" />
        <Photo src={modelClasses} alt="Teachable Machine interface with the list of classes" caption="The classes in Teachable Machine." shape="tall" />
      </div>
      <details>
        <summary>Show the p5.js sketch</summary>
        <pre>
          <code>{phoneGameSketch}</code>
        </pre>
      </details>
    </Section>

    <Section id="tests" title="Testing it">
      <div className="prose">
        <p>
          The first full test checked that digits were recognised in sequence and added to the number. Recognition
          was quick, but the prediction jumped around when an object was only partly in the frame. The second test
          focused on the reset card, which clears the number immediately.
        </p>
      </div>
      <div className="figures figures--3">
        <Clip src={testResetVideo} poster={testResetPoster} label="Test of the reset card" caption="The reset card clearing the number." shape="tall" />
      </div>
    </Section>

    <Section id="groundwork" title="What led up to it">
      <div className="prose">
        <p>
          The game came at the end of a series of shorter exercises. Two of them shaped it directly.
        </p>
        <h3>A dart counter that didn't work</h3>
        <p>
          Our first idea was to count darts scores automatically from a webcam. The zones of the board had too little
          contrast and the darts were hard to see. We first tried tracking specific colours, which was thrown off by
          shadows. That is why the final game uses a trained classifier, which looks at shapes and patterns rather
          than raw colour values, and objects chosen for their contrast.
        </p>
      </div>
      <div className="figures figures--3">
        <Clip src={dartsVideo} poster={dartsPoster} label="Attempt at detecting darts on a board" caption="The dart counter attempt." shape="tall" />
      </div>

      <div className="prose">
        <h3>Neural networks by hand</h3>
        <p>
          Before using a model, we played the part of one on paper. In the first exercise we were a perceptron with
          two inputs: compute a guess as <code>input1 × weight1 + input2 × weight2</code>, compare it with the right
          answer, and correct each weight with <code>new weight = old weight + (answer − guess) × input</code>. In the
          second, we were a convolution layer, sliding small grids of numbers (kernels) over an image written as a
          grid of brightness values to blur it, sharpen it or find its edges.
        </p>
      </div>
      <div className="figures figures--3">
        <Photo src={perceptronGame} alt="Cards and a die used for the perceptron exercise" caption="The perceptron exercise." shape="portrait" />
        <Photo src={convolution1} alt="Grid of pixel values on paper" caption="An image as a grid of values." shape="portrait" />
        <Photo src={convolution2} alt="Grid of values after applying a kernel" caption="The same grid after a filter." shape="portrait" />
      </div>

      <div className="prose">
        <h3>First steps in p5.js</h3>
        <p>
          Short sketches to learn the language: mapping the mouse position to colours, a random walker, a small
          football game with collision detection, and a Fibonacci spiral.
        </p>
      </div>
      <div className="figures figures--4">
        <Clip src={mouseVideo} poster={mousePoster} label="Colours following the mouse" caption="Mouse position mapped to colours." />
        <Clip src={walkerVideo} poster={walkerPoster} label="Random walker drawing a path" caption="Random walker." />
        <Clip src={footballVideo} poster={footballPoster} label="Football game in p5.js" caption="Football game." />
        <Clip src={fibonacciVideo} poster={fibonacciPoster} label="Fibonacci squares drawn one by one" caption="Fibonacci spiral." />
      </div>
    </Section>

    <Section id="links" title="Links">
      <ul className="link-list">
        <li>
          <a href="https://teachablemachine.withgoogle.com/models/16WwCqsb8/">Our trained model</a>{" "}
          <span>Teachable Machine</span>
        </li>
        {sketches.map((s) => (
          <li key={s.author}>
            {s.author}'s p5.js sketches:{" "}
            {s.links.map((url, i) => (
              <span key={url}>
                {i > 0 && ", "}
                <a href={url}>{i + 1}</a>
              </span>
            ))}
          </li>
        ))}
      </ul>
    </Section>

    <NextProject current="/teachable-machine" />
  </Layout>
);

export default TeachableMachine;
