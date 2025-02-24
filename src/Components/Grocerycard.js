

export default function Grocerycard({foodData}){
     

    return(
        <div className="flex-none mt-10 mb-10">
        <a href={foodData?.action?.link}>
        <img className="w-40 h-40 object-cover" src={"https://media-assets.swiggy.com/swiggy/image/upload/"+foodData?.imageId}></img>
        <h2 className="text-center text-sm font-bold">{foodData?.action?.text}</h2>
        </a>
        {/* <h1 style={{ color: 'black', fontSize: '20px' }}>{foodData.action.text}</h1> */}
        </div>
    )
}