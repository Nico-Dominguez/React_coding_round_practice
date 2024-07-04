import { Link } from "react-router-dom";

const Card = ({
  name = "no name",
  description = `Because it's about motivating the doers. Because I'm here to follow my dreams and inspire others.`,
  linkName = "stopwatch"
}) => {
    return (
      // black UI
        // <div className="isolate aspect-video w-96 rounded-xl bg-[#a29bfe]/60 shadow-lg ring-1 ring-black/5">
         <div className="isolate aspect-video w-96 rounded-xl bg-[#000]/20 shadow-lg ring-1 ring-black/5 border border-slate-700	"> 
          <Link className="no-underline hover:no-underline" to={`/${linkName}`}>
            <div className="p-6">
              <h5 className="block mb-2 font-sans text-3xl antialiased font-semibold leading-snug tracking-normal text-white">
                {name}
              </h5>
              <p className="block text-sm font-sans antialiased font-light leading-relaxed text-inherit text-white">
                {description}
              </p>
              <p className="mt-16 flex-row-reverse flex  text-sm font-sans antialiased font-light leading-relaxed text-inherit text-white">
                Learn more
              </p>
            </div>
            
          </Link>
        </div>
      );
};

export default Card;
