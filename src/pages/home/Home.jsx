import "./home.scss"
import Sidebar from "../../components/layout/sidebar/Sidebar"
import Navbar from "../../components/layout/navbar/Navbar"

const Home = () => {
  return (
    <div className="home">
        <Sidebar/>
        <div className="homeContainer">
            <Navbar/>
            home container
        </div>
    </div>
  )
}

export default Home