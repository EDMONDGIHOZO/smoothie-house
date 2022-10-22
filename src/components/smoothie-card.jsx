function SmoothieCard({title, method, rating}) {
    return (
        <div className="p-5 bg-white rounded-md shadow-lg">
            <h3 className="text-xl font-bold">{title}</h3>
            <p>{method}</p>
            <div className="-right-2 p-2 w-8 rounded-md text-center bg-gray-700 text-white -right-4 -top-3 mt-5">
                {rating}
            </div>
        </div>
    )
}

export default SmoothieCard;