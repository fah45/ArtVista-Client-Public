import { Link, useLoaderData } from "react-router-dom";



const MyCraft = () => {
    const loadeddata = useLoaderData()
    console.log(loadeddata)
    return (
        <div className="bg-[#F4F3F0] p-24">
            <h2 className="text-4xl text-center font bold">My Art & Craft</h2>
            <p className="text-2xl text-center">Bring my thoughts to ensure the quality of art & craft</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-4">
                {
                    loadeddata.map(data =>
                        <div key={data._id} className="card card-compact  transition border-2  hover:scale-100 md:hover:scale-105 lg:hover:scale-105 border-opacity-30 border-blue-500 hover:border-blue-700  group hover:no-underline focus:no-underline bg-base-100 shadow-xl">
                            <figure className=" pt-3">
                                <img src={data.PhotoUrl} alt="shoes" className="rounded-xl w-[350px] h-[180px]" />
                            </figure>
                            <div className="card-body items-left text-left">
                                <h2 className="card-title">{data.Subcategory}</h2>

                                <p><span className='font-bold'>Item Name: </span>{data.item}</p>

                                <p><span className='font-bold'>Price: </span>{data.Price}</p>
                                <p><span className='font-bold'>Processing Time:</span>{data.Processing}</p>

                                <div className="card-actions w-full">
                                    <Link className="w-full" to={`/update/${data._id}`}>
                                        <button className="btn btn-sm bg-[#D2B48C] text-white text-xs w-full mt-2 rounded-md">Update</button>
                                    </Link>
                                    <Link className="w-full" to={`/`}>
                                        <button className="btn btn-sm bg-red-600 text-white text-xs w-full mt-2 rounded-md">Delete</button>
                                    </Link>
                                </div>
                            </div>
                        </div>)
                }
            </div>

        </div>
    );
};

export default MyCraft;