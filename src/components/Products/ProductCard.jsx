

const ProductCard = ({data}) => {
    if (!data || !Array.isArray(data)) {
      return <div>No data available</div>;
    }
  
    return (
      <div className="mb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 place-items-center">
          {/*Card Section*/}
          {data.map((item, index) => (
              <div key={index}>
                  <div>
                      <img 
                        src={item.img} 
                        alt="" 
                        className="h-[180px] w-[260px] object-cover rounded-md"
                    />
                  </div>
                  <div className="leading-7">
                    <h2 className="font-semibold">{item.title}</h2>
                    <h2 className="font-bold">${item.price}</h2>
                  </div>
              </div>
          ))}
        </div>
      </div>
    )
  }

export default ProductCard
