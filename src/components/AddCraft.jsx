

const AddCraft = () => {
    return (
        <div className="bg-[#F4F3F0] p-24">
            <h2 className="text-4xl text-center font bold">Add Art & Craft</h2>
            <p className="text-2xl text-center">Bring your thoughts to ensure our quality craft supplies</p>
            <section className="p-6 bg-[#F4F3F0] text-gray-50 dark:text-gray-900">
                <form noValidate="" action="" className="container flex flex-col mx-auto space-y-12">
                    <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm bg-[#F4F3F0]">

                        <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="Subcategory name" className="text-sm">Subcategory name</label>
                                <input id="Subcategory name" type="text" placeholder="Subcategory name" className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 dark:text-gray-50 focus:ring-violet-400 focus:dark:ring-violet-600 border-gray-700 dark:border-gray-300" />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="item name" className="text-sm">item name</label>
                                <input id="item name" type="text" placeholder="item name" className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 dark:text-gray-50 focus:ring-violet-400 focus:dark:ring-violet-600 border-gray-700 dark:border-gray-300" />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="price" className="text-sm">Price</label>
                                <input id="price" type="text" placeholder="Price" className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 dark:text-gray-50 focus:ring-violet-400 focus:dark:ring-violet-600 border-gray-700 dark:border-gray-300" />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="Rating" className="text-sm">Rating</label>
                                <input id="Rating" type="text" placeholder="Rating" className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 dark:text-gray-50 focus:ring-violet-400 focus:dark:ring-violet-600 border-gray-700 dark:border-gray-300" />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="Photo" className="text-sm">Photo</label>
                                <input id="Photo" type="Photo" placeholder="PhotoUrl" className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 dark:text-gray-50 focus:ring-violet-400 focus:dark:ring-violet-600 border-gray-700 dark:border-gray-300" />
                            </div>
                            <div className="col-span-full">
                                <label htmlFor="Customization" className="text-sm">Customization</label>
                                <input id="Customization" type="text" placeholder="Customization" className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 dark:text-gray-50 focus:ring-violet-400 focus:dark:ring-violet-600 border-gray-700 dark:border-gray-300" />
                            </div>
                            <div className="col-span-full sm:col-span-2">
                                <label htmlFor="Stock Status" className="text-sm">Stock Status</label>
                                <input id="Stock Status" type="text" placeholder="Stock Status" className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 dark:text-gray-50 focus:ring-violet-400 focus:dark:ring-violet-600 border-gray-700 dark:border-gray-300" />
                            </div>
                            <div className="col-span-full sm:col-span-2">
                                <label htmlFor="Processing Time" className="text-sm">Processing Time</label>
                                <input id="Processing Time" type="text" placeholder="Processing Time" className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 dark:text-gray-50 focus:ring-violet-400 focus:dark:ring-violet-600 border-gray-700 dark:border-gray-300" />
                            </div>
                        </div>
                        <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="username" className="text-sm">User Name</label>
                                <input id="username" type="text" placeholder="Username" className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 dark:text-gray-50 focus:ring-violet-400 focus:dark:ring-violet-600 border-gray-700 dark:border-gray-300" />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="user email" className="text-sm">User Email</label>
                                <input id="user email" type="text" placeholder="User email" className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 dark:text-gray-50 focus:ring-violet-400 focus:dark:ring-violet-600 border-gray-700 dark:border-gray-300" />
                            </div>
                            <div className="col-span-full">
                                <label htmlFor="Short Description" className="text-sm">Short Description</label>
                                <textarea id="Short Description" placeholder="Short Description" className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 dark:text-gray-50 focus:ring-violet-400 focus:dark:ring-violet-600 border-gray-700 dark:border-gray-300"></textarea>
                            </div>
                            <div className="col-span-full">
                                <div className="flex items-center space-x-2">
                                    <button type="button" className="px-4 py-2 border rounded-md border-gray-100 dark:border-gray-800 bg-green-400 w-full">Add</button>
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