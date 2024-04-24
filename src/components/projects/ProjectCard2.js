
const ProjectCard2 = () => {
    return(
        <div className='overflow-auto w-full h-full grid gap-2 lg:grid-cols-3 p-4'>
                <div class="sm:1/2 md:w-2/3 md:h-2/3 lg:w-80 lg:h-80 rounded-md p-2 cursor-pointer shadow-lg hover:shadow-xl justify-center items-center transform hover:scale-105 duration-300">
                    <img src="https://images.unsplash.com/photo-1463320898484-cdee8141c787?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt="" />
                    <div class="p-4 bg-white">
                        <h1 class="mt-2 font-bold text-2xl">Marketin Agency</h1>
                        <p>Description ..</p>
                    </div>
                </div>
            <div class="sm:1/2 md:w-2/3 md:h-2/3 lg:w-80 lg:h-80 bg-gray-100 ">
                <div class=" rounded-md p-2 cursor-pointer shadow-lg hover:shadow-xl transform hover:scale-105 duration-300">
                    <img src="https://images.unsplash.com/photo-1463320898484-cdee8141c787?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt="" />
                    <div class="p-4 bg-white">
                        <h1 class="mt-2 font-bold text-2xl">Marketin Agency</h1>
                        <p>Description ..</p>
                    </div>
                </div>
            </div>  
        </div>
    )
}
export default ProjectCard2;