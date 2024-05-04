import ProjectCard from "../../components/projects/ProjectCard";
import Layout from "../../hocs/layout/Layout";
import p1  from "../../assets/images/projects/p1.png";

const data = 
[
    {
        'id': '1',
        'description': 'something',
        'title': 'Marketing Agency',
        'url': p1
    },

]


const Projects = () => {
    return ( 
        <Layout>
            <div className='overflow-auto w-full h-full'>
                <div class="flex overflow-auto items-center justify-center">
                <div class="grid mt-8
                            grid-cols-1 gap-5 xl:grid-cols-2 2xl:grid-cols-3">
                <ProjectCard data={data}/>
                </div>
                </div>
            </div>
        
        </Layout>
    );
}
 
export default Projects;