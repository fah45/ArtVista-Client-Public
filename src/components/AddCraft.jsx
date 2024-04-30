import { useContext } from 'react';
import Swal from 'sweetalert2'
import { AuthContext } from '../Provider/AuthProvider';

const AddCraft = () => {
    const { user, loading } = useContext(AuthContext)

    console.log(user)

    const handleAddCraft = event => {
        event.preventDefault();

        const form = event.target;

        const Subcategory = form.Subcategory.value;
        const item = form.item.value;
        const Price = form.Price.value;
        const Rating = form.Rating.value;
        const PhotoUrl = form.PhotoUrl.value;
        const Customization = form.Customization.value;
        const Stock = form.Stock.value;
        const Processing = form.Processing.value;
        const Username = form.Username.value;
        const email = form.email.value;
        const Description = form.Description.value;

        const newArt = { Subcategory, item, Price, Rating, PhotoUrl, Customization, Stock, Processing, Username, email, Description }
        console.log(newArt);

        // send the data to the server
        fetch('http://localhost:5000/craft', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newArt)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'User Added Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })

                }
            })

    }

    if (loading) {
        return <p>Loading</p>
    }

    return (
        <div className="bg-[#F4F3F0] p-24">
            <h2 className="text-4xl text-center font bold">Add Art & Craft</h2>
            <p className="text-2xl text-center">Bring your thoughts to ensure our quality craft supplies</p>
            <section className="p-6 bg-[#F4F3F0] text-gray-50 dark:text-gray-900">
                <form onSubmit={handleAddCraft} noValidate="" action="" className="container flex flex-col mx-auto space-y-12">
                    <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm bg-[#F4F3F0]">

                        <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="Subcategory name" className="text-sm">Subcategory name</label>
                                <input id="Subcategory name" name="Subcategory" type="text" placeholder="Subcategory" className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 dark:black-50 focus:ring-violet-400 focus:dark:ring-violet-600 border-gray-700 dark:border-gray-300" />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="item name" className="text-sm">item name</label>
                                <input id="item name" type="text" name="item" placeholder="item" className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 dark:black-50 focus:ring-violet-400 focus:dark:ring-violet-600 border-gray-700 dark:border-gray-300" />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="price" className="text-sm">Price</label>
                                <input id="price" type="text" name="Price" placeholder="Price" className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 dark:black-50 focus:ring-violet-400 focus:dark:ring-violet-600 border-gray-700 dark:border-gray-300" />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="Rating" className="text-sm">Rating</label>
                                <input id="Rating" type="text" name="Rating" placeholder="Rating" className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 dark:black-50 focus:ring-violet-400 focus:dark:ring-violet-600 border-gray-700 dark:border-gray-300" />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="Photo" className="text-sm">Photo</label>
                                <input id="Photo" type="Photo" name="PhotoUrl" placeholder="PhotoUrl" className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 dark:black-50 focus:ring-violet-400 focus:dark:ring-violet-600 border-gray-700 dark:border-gray-300" />
                            </div>
                            <div className="col-span-full">
                                <label htmlFor="Customization" className="text-sm">Customization</label>
                                <input id="Customization" type="text" name="Customization" placeholder="Customization" className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 dark:black-50 focus:ring-violet-400 focus:dark:ring-violet-600 border-gray-700 dark:border-gray-300" />
                            </div>
                            <div className="col-span-full sm:col-span-2">
                                <label htmlFor="Stock Status" className="text-sm">Stock Status</label>
                                <input id="Stock Status" type="text" name="Stock" placeholder="Stock" className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 dark:black-50 focus:ring-violet-400 focus:dark:ring-violet-600 border-gray-700 dark:border-gray-300" />
                            </div>
                            <div className="col-span-full sm:col-span-2">
                                <label htmlFor="Processing Time" className="text-sm">Processing Time</label>
                                <input id="Processing Time" type="text" name="Processing" placeholder="Processing" className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 dark:black-50 focus:ring-violet-400 focus:dark:ring-violet-600 border-gray-700 dark:border-gray-300" />
                            </div>
                        </div>
                        <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="username" className="text-sm">User Name</label>
                                <input id="username" type="text" name="Username" defaultValue={user.displayName} placeholder="Username" className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 dark:black-50 focus:ring-violet-400 focus:dark:ring-violet-600 border-gray-700 dark:border-gray-300" />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="user email" className="text-sm">User Email</label>
                                <input id="user email" type="text" name="email" defaultValue={user.email} placeholder="email" className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 dark:black-50 focus:ring-violet-400 focus:dark:ring-violet-600 border-gray-700 dark:border-gray-300" />
                            </div>
                            <div className="col-span-full">
                                <label htmlFor="Short Description" className="text-sm">Short Description</label>
                                <textarea id="Short Description" name="Description" placeholder="Description" className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 dark:black-50 focus:ring-violet-400 focus:dark:ring-violet-600 border-gray-700 dark:border-gray-300"></textarea>
                            </div>
                            <div className="col-span-full">
                                <div className="flex items-center space-x-2">
                                    <button type="submit" className="px-4 py-2 border rounded-md border-gray-100 dark:border-gray-800 bg-green-400 w-full">AddCraft</button>
                                </div>
                            </div>
                        </div>
                    </fieldset>
                </form>
            </section>
        </div>

    );
};

export default AddCraft;