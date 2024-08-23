import Banner from "./components/Banner/Banner"
import Category from "./components/Category/Category"
import Category2 from "./components/Category/Category2"
import Hero from "./components/Hero/Hero"
import NavBar from "./components/NavBar/NavBar"
import Services from "./components/Services/Services"

import headphone from "./assets/hero/headphone.png" 
import smartwatch2 from "./assets/category/smartwatch2-removebg-preview.png"
import Products from "./components/Products/Products"
import Blog from "./components/Blog/Blog"
import Partners from "./components/Partners/Partners"
import Footer from "./components/Footer/Footer"

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

const BannerData2 = {
  discount: "30% OFF",
  date: "20 Agu to 31 Agu",
  title: "Happy Hours",
  image: smartwatch2,
  title2: "Smart Solo",
  title3: "Winter Sale",
  title4 :" Lorem ipsum, dolor sit amet consentur adipisicing elit. Eaque reiciendis",
  bgColor: "#2dcc6f"
}

function App() {

  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200 overflow-hidden">
      <NavBar />
      <Hero />
      <Category />
      <Category2 />
      <Services />
      <Banner data={BannerData} />
      <Products />
      <Banner data={BannerData2}/>
      <Blog />
      <Partners />
      <Footer />
    </div>
  )
}

export default App
