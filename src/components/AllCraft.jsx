import { Link, useLoaderData } from "react-router-dom";



const AllCraft = () => {
    const loadedData = useLoaderData()
    console.log(loadedData)


    return (
        <div>
            <h2 className="text-4xl text-center font bold">All Art & Craft</h2>
            <p className="text-2xl text-center">Your daily life art & supplies, where creativity is priority</p>
            <div className="container p-2 mx-auto sm:p-4 text-gray-100 dark:text-gray-800">
                <h2 className="mb-4 text-2xl font-semibold leading-tight">Invoices</h2>
                <div className="overflow-x-auto">
                    <table className="min-w-full text-xs">
                        <colgroup>
                            <col />
                            <col />
                            <col />
                            <col />
                            <col />
                        </colgroup>
                        <thead className="bg-gray-700 dark:bg-gray-300">
                            <tr className="text-left">
                                <th className="p-3">Name</th>
                                <th className="p-3">Category</th>
                                <th className="p-3">Price</th>
                                <th className="p-3">Rating</th>
                                <th className="p-3 text-right">Details</th>
                            </tr>
                        </thead>

                        {
                            loadedData.map(data => <tbody key={data._id}>
                                <tr className="border-b border-opacity-20 border-gray-700 dark:border-gray-300 bg-gray-900 dark:bg-gray-50">
                                    <td className="p-3">
                                        <p>{data.Username}</p>
                                    </td>
                                    <td className="p-3">
                                        <p className="text-gray-400 dark:text-gray-600">{data.Subcategory}</p>
                                    </td>
                                    <td className="p-3">
                                        <p className="text-gray-400 dark:text-gray-600">{data.Price}</p>
                                    </td>
                                    <td className="p-3">
                                        <p className="text-gray-400 dark:text-gray-600">{data.Rating}</p>
                                    </td>
                                    <td className="p-3 text-right">
                                        <Link className="w-full" to={`/craft/${data._id}`}>
                                            <button className="btn btn-sm bg-[#D2B48C] text-white text-xs w-full mt-2 rounded-md">View Details</button>
                                        </Link>
                                    </td>
                                </tr>
                            </tbody>)
                        }

                    </table>
                </div>
            </div>
        </div>
    );
};

export default AllCraft;