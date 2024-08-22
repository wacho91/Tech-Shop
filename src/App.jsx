import Banner from "./components/Banner/Banner"
import Category from "./components/Category/Category"
import Category2 from "./components/Category/Category2"
import Hero from "./components/Hero/Hero"
import NavBar from "./components/NavBar/NavBar"
import Services from "./components/Services/Services"

import headphone from "./assets/hero/headphone.png" 

const BannerData = {
  discount: "30% OFF",
  date: "20 Agu to 31 Agu",
  title: "Fine Smile",
  image: headphone,
  title2: "Air Solo Bass",
  title3: "Winter Sale",
  title4 :" Lorem ipsum, dolor sit amet consentur adipisicing elit. Eaque reiciendis",
  bgColor: "#f42c37"
}

function App() {

  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200 overflow-hidden">
      <NavBar />
      <Hero />
      <Category />
      <Category2 />
      <Services />
      <Banner data={BannerData}/>
    </div>
  )
}

export default App
