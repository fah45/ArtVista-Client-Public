import { Helmet } from "react-helmet-async";
import { Link, useLoaderData } from "react-router-dom";


const CraftCard = ({craft}) => {


    // const loadedData = useLoaderData()
    // console.log(loadedData)
    const { _id, Subcategory, item, Price, Rating, PhotoUrl, Customization, Stock, Processing, Username, email, Description } = craft;

    // fetch(`https://art-craft-server-rho.vercel.app/craft/${_id}`)
    //     .then(res => res.json())
    //     .then(data => {
    //         console.log(data)
    //     })



    return (
        <div>
            <Helmet>
                <title>ArtisanVista</title>
            </Helmet>
            <div className="card card-compact  transition border-2  hover:scale-100 md:hover:scale-105 lg:hover:scale-105 border-opacity-30 border-blue-500 hover:border-blue-700  group hover:no-underline focus:no-underline bg-base-100 shadow-xl">
                <figure className=" pt-3">
                    <img src={PhotoUrl} alt="shoes" className="rounded-xl w-[350px] h-[180px]" />
                </figure>
                <div className="card-body items-left text-left">
                    <h2 className="card-title">{Subcategory}</h2>

                    <p><span className='font-bold'>Item Name: </span>{item}</p>

                    <p><span className='font-bold'>Price: </span>{Price}</p>
                    <p><span className='font-bold'>Processing Time:</span>{Processing}</p>

                    <div className="card-actions w-full">
                        <Link className="w-full" to={`/craft/${_id}`}>
                            <button className="btn btn-sm bg-[#D2B48C] text-white text-xs w-full mt-2 rounded-md">View Details</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CraftCard;