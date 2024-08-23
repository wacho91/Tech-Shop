import { IoCloseOutline } from "react-icons/io5"

const Fopup = ({orderPopup, handleOrderPopup}) => {
  return (
    <>
    {
        orderPopup && (
            <div>
                <div className="h-screen w-screen fixed top-0 left-0 bg-black/50 z-50 backdrop-blur-sm">
                    <div className="w-[300px] fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 shadow-md 
                    bg-white dark:bg-gray-900 dark:text-white duration-200 rounded-md">
                        {/*Header Section*/}
                        <div className="flex items-center justify-between">
                            <h1>Order Now</h1>
                            <div>
                                <IoCloseOutline
                                onClick={handleOrderPopup}
                                className="text-2xl cursor-pointer "/>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
    </>
  )
}

export default Fopup
