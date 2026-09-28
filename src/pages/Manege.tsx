import Layout from "@/components/site/Layout";
import { Clip, Photo } from "@/components/site/Media";
import { NextProject, ProjectHead, Section } from "@/components/site/Parts";

import aquarium from "@/assets/manege/aquarium.jpg";
import finalVideo from "@/assets/manege/final.mp4";
import finalPoster from "@/assets/manege/final.jpg";
import rhinoFish from "@/assets/manege/rhino-fish.jpg";
import laserCutter from "@/assets/manege/laser-cutter.jpg";
import cricut from "@/assets/manege/cricut.jpg";
import starFold from "@/assets/manege/star-fold.jpg";
import fusionFlange from "@/assets/manege/fusion-flange.jpg";
import carouselDrawing from "@/assets/manege/carousel-drawing.jpg";
import laserFile from "@/assets/manege/laser-file.jpg";
import laserCutVideo from "@/assets/manege/laser-cut.mp4";
import laserCutPoster from "@/assets/manege/laser-cut.jpg";
import cricutCutVideo from "@/assets/manege/cricut-cut.mp4";
import cricutCutPoster from "@/assets/manege/cricut-cut.jpg";
import firstTestVideo from "@/assets/manege/first-test.mp4";
import firstTestPoster from "@/assets/manege/first-test.jpg";
import fishParts from "@/assets/manege/fish-parts.jpg";
import assembly from "@/assets/manege/assembly.jpg";
import assembledVideo from "@/assets/manege/assembled-test.mp4";
import assembledPoster from "@/assets/manege/assembled-test.jpg";
import vuvuzelaSlicer from "@/assets/manege/vuvuzela-slicer.jpg";
import vuvuzelaVideo from "@/assets/manege/vuvuzela-test.mp4";
import vuvuzelaPoster from "@/assets/manege/vuvuzela-test.jpg";

const Manege = () => (
  <Layout>
    <ProjectHead
      title="Le Manège de Poséidon"
      lede="A hand-cranked carousel of cardboard fish, designed and built in five days while learning the lab's machines from scratch."
      facts={[
        { label: "When", value: "20 to 24 October 2025, five days" },
        { label: "Team", value: "Maxime Vial, Paul Simonet, Alexandre Le Port" },
        { label: "Machines", value: "Laser cutter, Cricut, Bambu Lab 3D printer" },
        { label: "Software", value: "Rhino, Fusion 360" },
      ]}
    />

    <div className="hero">
      <Clip
        src={finalVideo}
        poster={finalPoster}
        label="The finished carousel turning"
        shape="tall"
        caption="The finished carousel, turned by hand in front of the lab's aquarium."
      />
      <div className="prose">
        <h2>The idea</h2>
        <p>
          The fabrication week had two goals: learn the lab's machines, and use them on one object by Friday. We
          wanted something that moves, so we chose a carousel whose fish look like they are swimming.
        </p>
        <p>
          The fish are cut from cardstock on the Cricut and sit on the arms of a laser-cut plywood star. A crank
          turns the central pillar, made of two parts that slot into each other. As the star turns, the wave-shaped
          wall around the base makes the fish rise and fall.
        </p>
        <p>
          The lab's aquarium was the starting point for the theme, which is why the final photos were taken in front
          of it.
        </p>
      </div>
    </div>

    <Section id="process" title="How we built it">
      <ol className="steps">
        <li className="step">
          <div>
            <h3>Learning the tools</h3>
            <p className="when">Monday</p>
            <div className="prose">
              <p>
                We started with introductions to the Cricut and the laser cutter, and drew the first fish silhouettes
                as vectors in Rhino. On the laser cutter we tested power and speed settings on thin plywood, including
                score lines that let a flat piece fold without breaking. A folding star was our first test of that
                technique.
              </p>
            </div>
            <div className="figures figures--3">
              <Photo src={rhinoFish} alt="Fish outlines drawn in Rhino" caption="Fish outlines drawn as vectors in Rhino." shape="portrait" />
              <Photo src={laserCutter} alt="The laser cutter with a plywood sheet" caption="First laser cutting tests on thin plywood." shape="portrait" />
              <Photo src={cricut} alt="The Cricut cutting machine" caption="The Cricut, used for all the cardstock parts." shape="portrait" />
            </div>
            <div className="figures">
              <Photo src={starFold} alt="The folding star drawn in Rhino, top and perspective views" caption="The folding star in Rhino, drawn to test cutting and folding on the laser cutter." />
            </div>
          </div>
        </li>

        <li className="step">
          <div>
            <h3>3D modelling and plans</h3>
            <p className="when">Tuesday</p>
            <div className="prose">
              <p>
                Tuesday covered 3D modelling. We practised by measuring a door handle, drawing it in orthographic
                views, then modelling parts in Fusion 360 with extrusions, holes and fillets. In the afternoon we used
                the same method on our own project and drew the carousel's top and front views, which set the
                dimensions for the cutting files.
              </p>
            </div>
            <div className="figures figures--2">
              <Photo src={fusionFlange} alt="A flange modelled in Fusion 360" caption="Practice part in Fusion 360." shape="portrait" />
              <Photo src={carouselDrawing} alt="Hand drawing of the carousel, top and front views" caption="Top and front views of the carousel." shape="portrait" />
            </div>
          </div>
        </li>

        <li className="step">
          <div>
            <h3>Cutting the parts</h3>
            <p className="when">Wednesday</p>
            <div className="prose">
              <p>
                We finished the files for the central star, cut it from plywood on the laser cutter, and cut the
                wave-shaped wall on the Cricut at the same time. By the end of the day we could fit the star into the
                wall and check that both turned together, which confirmed the basic mechanism before we built the
                fish.
              </p>
            </div>
            <div className="figures figures--4">
              <Photo src={laserFile} alt="Preparing the laser cutting file on a computer" caption="Preparing the star's cutting file." shape="tall" />
              <Clip src={laserCutVideo} poster={laserCutPoster} label="Laser cutter cutting the plywood star" caption="Laser cutting the star (2× speed)." shape="tall" />
              <Clip src={cricutCutVideo} poster={cricutCutPoster} label="Cricut cutting the cardboard wall" caption="The Cricut cutting the wall." shape="tall" />
              <Clip src={firstTestVideo} poster={firstTestPoster} label="First fit of the star inside the wall" caption="First fit: star and wall turning together." shape="tall" />
            </div>
          </div>
        </li>

        <li className="step">
          <div>
            <h3>Assembly and first full test</h3>
            <p className="when">Thursday</p>
            <div className="prose">
              <p>
                Each fish is made of several scored and folded cardstock pieces glued together, so assembly took most
                of the day. Once the fish were on the star we ran the first test of the complete carousel: crank,
                pillar, wall and fish moved together as planned.
              </p>
            </div>
            <div className="figures figures--3">
              <Photo src={fishParts} alt="Folded cardstock fish parts on a table" caption="The folded parts of one fish." shape="tall" />
              <Photo src={assembly} alt="The team sorting parts on a workbench" caption="Sorting the cut parts before gluing." shape="tall" />
              <Clip src={assembledVideo} poster={assembledPoster} label="First test of the assembled carousel" caption="First test of the full carousel." shape="tall" />
            </div>
          </div>
        </li>

        <li className="step">
          <div>
            <h3>Adjustments and documentation</h3>
            <p className="when">Friday</p>
            <div className="prose">
              <p>
                We adjusted the mechanism so it turned smoothly, filmed and photographed the result, and wrote the
                first version of this documentation.
              </p>
            </div>
            <div className="figures figures--3">
              <Photo src={aquarium} alt="The finished carousel in front of the aquarium" caption="The finished carousel." shape="tall" />
            </div>
          </div>
        </li>
      </ol>
    </Section>

    <Section id="vuvuzela" title="What didn't work: the vuvuzela">
      <div className="prose">
        <p>
          On Thursday, while the fish were being glued, we tried a side project on the Bambu Lab printer: a vuvuzela
          modelled in Fusion 360 and printed in several parts. The print came out without problems, but the
          instrument made no sound at all.
        </p>
      </div>
      <div className="figures figures--3">
        <Photo src={vuvuzelaSlicer} alt="Vuvuzela parts in the Bambu Lab slicer" caption="The parts in the slicer." shape="tall" />
        <Clip src={vuvuzelaVideo} poster={vuvuzelaPoster} label="Trying to play the printed vuvuzela" caption="The test. No sound." shape="tall" />
      </div>
    </Section>

    <NextProject current="/manege" />
  </Layout>
);

export default Manege;
