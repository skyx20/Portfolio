import { Link } from "react-router-dom";

const ProjectCard = ({ data }) => {
  console.log("THIS IS THE DATA FOR PROJECT CARD", data);
  return (
    <>
      {data.map((data) => (
        <div
          key={data.id}
          class=" rounded-lg group relative items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30"
        >
          <div class="h-80 w-full">
            <img
              class="h-full w-full scale-70 transition-transform duration-500 group-hover:scale-90"
              src={data.img}
              alt={data.title}
            />
          </div>
          {/* TODO: make a onClick function for mobile devices */}
          <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-gray-500 group-hover:from-black/10 group-hover:via-black/30 group-hover:to-black/70"></div>
          <div class="absolute inset-0 flex translate-y-[50%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
            <h1 class="mb-12 sm:mb-8  font-dmserif text-3xl font-bold text-white">
              {data.title}
            </h1>
            <div id="link-section" className="flex flex-col gap-2">
              {data.url_deploy ? (
                <Link
                  to={data.url_deploy}
                  target="_blank"
                  class="rounded-full bg-neutral-900 py-2 hover:cursor-pointer hover:bg-neutral-800 transition duration-300 ease-in-out hover:scale-105 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60"
                >
                  Visit
                </Link>
              ) : null}
              <Link
                to={data.url_github}
                target="_blank"
                class="rounded-full bg-neutral-900 py-2 hover:cursor-pointer hover:bg-neutral-800 transition duration-300 ease-in-out hover:scale-105 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60"
              >
                Github
              </Link>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default ProjectCard;
