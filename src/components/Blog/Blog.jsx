
import Heading from "../Shared/Heading"

import Img1 from "../../assets/blogs/blog-1.jpg"
import Img2 from "../../assets/blogs/blog-2.jpg"
import Img3 from "../../assets/blogs/blog-3.jpg"

const BlogData = [
    {
        id: 1,
        title: "How to choose perfect smartwatch",
        subtitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, doloremque.",
        published: "Aug 21 2024 by Dishlad",
        image: Img1,
        aosDelay: "0"
    },

    {
        id: 2,
        title: "How to choose perfect gadget",
        subtitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, doloremque",
        published: "Aug 21 2024 by Satya",
        image: Img2,
        aosDelay: "200"
    },

    {
        id: 3,
        title: "How to choose perfect VR headset",
        subtitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, doloremque",
        published: "Aug 21 2024 by Sahir",
        image: Img3,
        aosDelay: "400"
    }
]

const Blog = () => {
  return (
    <div className="my-12">
      <div className="container">
        {/*Headind Section*/}
        <Heading title="Recent News" subtitle={"Explore Our Blogs"} />
      
        {/*Blog Section*/}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 gap-y-8 sm:gap-4 md:gap-7">
            {/*Blog Card*/}
            {
                BlogData.map((data) => (
                    <div data-aos="fade-up" data-aos-delay={data.aosDelay} key={data.id} className="bg-white dark:bg-gray-900">
                        <div>
                            {/*Image Section*/}
                            <div className="overflow-hidden rounded-2xl mb-2">
                                <img 
                                    src={data.image} 
                                    alt="image" 
                                    className="w-full h-[220px] object-cover rounded-2xl hover:scale-105 duration-500"
                                />
                            </div>
                            {/*Content Section*/}
                            <div className="space-y-2">
                                <p className="text-xs text-gray-500">{data.published}</p>
                                <p className="font-bold line-clamp-1">{data.title}</p>
                                <p className="line-clamp-2 text-sm text-gray-600 dark:text-gray-400">{data.subtitle}</p>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
      </div>
    </div>
  )
}

export default Blog
