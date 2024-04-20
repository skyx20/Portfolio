import Layout from "../../hocs/layout/Layout";
import Header from "../../components/home/Header";

const Home = () => {
    return ( 
        <Layout>
            <Header/>
            <div className="bg-white"> HOME </div>
        </Layout>
    );
}

export default Home;