import { Link, useLoaderData, useParams } from "react-router-dom";


const CardDetails = () => {


    const loadedData = useLoaderData()
    const { Subcategory, item, Price, Rating, PhotoUrl, Customization, Stock, Processing, Username, email, Description } = loadedData;

    return (
        <div className="card-body items-left text-left">

            <img src={PhotoUrl} className="object-cover object-center rounded-3xl w-full mb-4 h-[300px]" alt={item} />
            <p><span className='font-bold'>Description: </span>{Description}</p>
            <p><span className='font-bold'>Subcategory: </span>{Subcategory}</p>
            <p><span className='font-bold'>Item: </span>{item}</p>
            <p><span className='font-bold'>Rating: </span>{Rating}</p>
            <p><span className='font-bold'>Price: </span>{Price}</p>
            <p><span className='font-bold'>Customization: </span>{Customization}</p>
            <p><span className='font-bold'>Stock: </span>{Stock}</p>
            <p><span className='font-bold'>Processing: </span>{Processing}</p>
            <p><span className='font-bold'>Username: </span>{Username}</p>
            <p><span className='font-bold'>User-email: </span>{email}</p>

            <div className="card-actions">
                <Link to="/" className="btn text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"><button>Explore More</button></Link>

            </div>
        </div>
    );
};

export default CardDetails;