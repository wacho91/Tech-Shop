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
import Fopup from "./components/Fopup/Fopup"
import { useState } from "react"
import AOS from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react"

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

  const [orderPopup, setOrderPopup] = useState(false)

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  }

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
      offset: 100
    })
    AOS.refresh()
  },[])

  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200 overflow-hidden">
      <NavBar handleOrderPopup={handleOrderPopup}/>
      <Hero handleOrderPopup={handleOrderPopup}/>
      <Category />
      <Category2 />
      <Services />
      <Banner data={BannerData} />
      <Products />
      <Banner data={BannerData2}/>
      <Blog />
      <Partners />
      <Footer />
      <Fopup orderPopup={orderPopup} handleOrderPopup={handleOrderPopup} />
    </div>
  )
}

export default App
