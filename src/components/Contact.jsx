

const Contact = () => {
    return (
        <div className="grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 bg-gray-800 dark:bg-green-500 text-gray-100 dark:text-gray-800">
            <div className="flex flex-col justify-between">
                <div className="space-y-2">
                    <h2 className="text-4xl font-bold leading-tight lg:text-5xl">ArtisanVista</h2>
                    <div className="text-gray-400 dark:text-gray-600">Discover the Creativity at ArtisanVista.</div>
                </div>
                <img src="/public/paint-brush-2-svgrepo-com.svg" alt="" className="p-6 h-52 md:h-64" />
            </div>
            <form noValidate="" className="space-y-6">
                <div>
                    <label htmlFor="name" className="text-sm">Name</label>
                    <input id="name" type="text" placeholder="" className="w-full p-3 rounded bg-gray-800 dark:bg-gray-100" />
                </div>
                <div>
                    <label htmlFor="email" className="text-sm">Email</label>
                    <input id="email" type="email" className="w-full p-3 rounded bg-gray-800 dark:bg-gray-100" />
                </div>
                <div>
                    <label htmlFor="message" className="text-sm">Message</label>
                    <textarea id="message" rows="3" className="w-full p-3 rounded bg-gray-800 dark:bg-gray-100"></textarea>
                </div>
                <button type="submit" className="w-full p-3 text-sm font-bold tracking-wide uppercase rounded bg-yellow-400 dark:bg-yellow-600 text-gray-900 dark:text-gray-50">Send Message</button>
            </form>
        </div>
    );
};

export default Contact;