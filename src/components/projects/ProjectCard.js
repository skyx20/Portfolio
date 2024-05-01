

const ProjectCard = ({data}) => {
    return ( 
      <>
        {data.map((data)=>
        (<div key={data.id} class= " group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
          <div class="h-80 w-full">
            <img class="h-full w-full scale-70 object-cover transition-transform duration-500 group-hover:scale-90" src={data.url} alt={data.title} />
          </div>
          <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-gray-500 group-hover:from-black/10 group-hover:via-black/30 group-hover:to-black/70"></div>
          <div class="absolute inset-0 flex translate-y-[50%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
            <h1 class="font-dmserif text-3xl font-bold text-white">{data.title}</h1>
            <p class="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">{data.description}</p>
            <button class="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">See More</button>
          </div>
        </div>))}
      </>
);
}

export default ProjectCard;