import { Helmet } from "react-helmet-async";


const CraftCard = () => {
    return (
        <div>
            <Helmet>
                <title>ArtisanVista</title>
            </Helmet>
            <div className="card card-compact  transition border-2  hover:scale-100 md:hover:scale-105 lg:hover:scale-105 border-opacity-30 border-blue-500 hover:border-blue-700  group hover:no-underline focus:no-underline bg-base-100 shadow-xl">
                <figure className=" pt-3">
                    {/* <img src={} alt="Shoes" className="rounded-xl w-[350px] h-[180px]" /> */}
                </figure>
                <div className="card-body items-left text-left">
                    <h2 className="card-title">{}</h2>

                    <p><span className='font-bold'>Area: </span>{}</p>

                    <p><span className='font-bold'>Status: </span>{}</p>
                    <p><span className='font-bold'>Price:</span>{}</p>

                    <div className="card-actions">
                        {/* <Link to={`/estate/${id}`} className="btn text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"><button>View Property</button></Link> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CraftCard;