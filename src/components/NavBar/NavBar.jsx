import { IoMdSearch } from "react-icons/io"


const MenuLinks = [
    {
        id: 1,
        name: 'Home',
        link: "/#"
    },

    {
        id: 2,
        name: 'Shop',
        link: "/#shop"
    },

    {
        "id": 3,
        "name": "About",
        "link": "/#about"
    },

    {
        id: 4,
        name: 'Blogs',
        link: "/#blogs"
    },
]

const NavBar = () => {
  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40">
        <div className="py-4">
            <div className="container flex justify-between items-center">
                {/*Logo ans Links Section*/}
                <div className="flex items-center gap-4">
                    <a 
                        className="text-primary font-semibold tracking-widest text-2xl uppercase sm:text-3xl"
                        href="#"
                    >
                        Tech-Shop
                    </a>
                    {/*Menu Items*/}
                    <div className="hidden lg:block">
                        <ul className="flex items-center gap-4">
                            {
                                MenuLinks.map((data, index) => (
                                    <li key={index}>
                                        <a 
                                            className="inline-block px-4 font-semibold text-gray-500 hover:text-black dark:text-white duration-200"
                                            href={data.link}
                                        >
                                            {" "}
                                            {data.name}
                                        </a>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
                {/*Navbar right Section*/}
                <div className="flex justify-between items-center gap-4">
                    {/*Search bar Section*/}
                    <div className="relative group hidden sm:block">
                        <input type="text" 
                            placeholder="Search"
                            className="search-bar"
                        />
                        <IoMdSearch  className="text-xl text-gray-600 group-hover:text-primary
                         dark:text-gray-400 absolute top-1 translate-y-1 right-3 duration-200"/>
                    </div>
                    {/*Dark Mode Section*/}
                </div>
            </div>
        </div>
    </div>
  )
}

export default NavBar
