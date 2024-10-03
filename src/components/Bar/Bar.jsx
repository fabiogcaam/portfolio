const Bar = ({ name, level }) => {


    let width = (level.toLowerCase() == "junior") ? "w-2/6" :
        (level.toLowerCase() == "mid") ? "w-3/6" :
            (level.toLowerCase() == "senior") && "w-5/6"

    return (

        <div className="w-9/12 h-10 bg-gray-200 flex mb-1">
            <div className="bg-blue-800 h-10 w-2/12 flex items-center justify-center">
                <h1 className="text-white item-center">{name}</h1>
            </div>
            <div className={`${width} h-full bg-blue-900`}>
            </div>
        </div>

    )


}

export default Bar