import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const projects = [
  {
    name: "NeuraChat",
    category: "AI / Full Stack",
    tech: "Next.js, NestJS, LangChain, Socket.io, OpenAI API",
    image: "/images/placeholder.webp",
    url: "https://neura-chat-h7nj.vercel.app/"
  },
  {
    name: "SkilLink",
    category: "Full Stack",
    tech: "React, Node.js, Express.js, MongoDB, Socket.io",
    image: "/images/placeholder.webp",
    url: null
  },
  {
    name: "Flappy Bird",
    category: "Systems / Low-Level",
    tech: "x86 Assembly, COAL, DOS Interrupts, BIOS Video",
    image: "/images/placeholder.webp",
    url: null
  },
  {
    name: "Tetris",
    category: "Systems / C++",
    tech: "C++, OOP, Terminal I/O, Windows Console API",
    image: "/images/placeholder.webp",
    url: null
  }
];

const Work = () => {
  useGSAP(() => {
    let translateX: number = 0;
    function setTranslateX() {
      const box = document.getElementsByClassName("work-box");
      const rectLeft = document
        .querySelector(".work-container")!
        .getBoundingClientRect().left;
      const rect = box[0].getBoundingClientRect();
      const parentWidth = box[0].parentElement!.getBoundingClientRect().width;
      let padding: number =
        parseInt(window.getComputedStyle(box[0]).padding) / 2;
      translateX = rect.width * box.length - (rectLeft + parentWidth) + padding;
    }

    setTranslateX();

    let timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".work-section",
        start: "top top",
        end: "bottom top",
        scrub: true,
        pin: true,
        pinType: !ScrollTrigger.isTouch ? "transform" : "fixed",
        id: "work",
      },
    });

    timeline.to(".work-flex", {
      x: -translateX,
      duration: 40,
      delay: 0.2,
    });
  }, []);
  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">
          {projects.map((project, index) => (
            <div className="work-box" key={index}>
              <div className="work-info">
                <div className="work-title">
                  <h3>0{index + 1}</h3>

                  <div>
                    <h4>{project.name}</h4>
                    <p>{project.category}</p>
                  </div>
                </div>
                <h4>Tools and features</h4>
                <p>{project.tech}</p>
                {project.url && (
                  <a href={project.url} target="_blank" style={{ color: '#fff', textDecoration: 'underline', marginTop: '8px', display: 'inline-block' }}>
                    View Live
                  </a>
                )}
              </div>
              <WorkImage image={project.image} alt={project.name} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
