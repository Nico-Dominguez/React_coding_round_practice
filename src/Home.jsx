
import React from "react";
import "./index.css";
import Card from "./Components/Card";
import { buttonDetails, technicalRoundPreparation } from "./Utils";
import Marquee from "./Components/Marquee";
import Accordion from "./Components/Accordion";

const Home = () => {
  const { easy, medium, hard } = technicalRoundPreparation
  return (
    <div className="home min-h-screen flex flex-col items-center justify-center p-4 ">
      <Marquee/>
      <div>
      <Accordion category="Easy" questions={easy} />
      <Accordion category="Medium" questions={medium} />
      <Accordion category="Hard" questions={hard} />
    </div>
      <iframe
        src="https://github.com/sponsors/sameerkali/button"
        title="Sponsor sameerkali"
        height="32"
        width="114"
        style={{ border: "0", borderRadius: "6px", marginTop: "5rem" }}
      />

      <a
        href="https://github.com/sameerkali/React_coding_round_practice"
        target="_blank"
        rel="noopener noreferrer"
        className=" mt-5 mb-8 text-gray-300 bg-[#21262d] px-3 py-1 rounded-md no-underline hover:no-underline hover:bg-[#21262Dc3]"
      >
        ⭐ Star on GitHub
      </a>

      <h1 className="text-4xl sm:text-5xl md:text-6xl text-center font-bold mb-8 text-[#a29bfe]">
        Practice Interview Problems
      </h1>
      <div className="flex justify-center w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-6xl justify-items-center mb-10">
          {buttonDetails.map(({ name, description }) =>
            <Card
              key={name}
              name={name}
              description={description}
              linkName={name}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
