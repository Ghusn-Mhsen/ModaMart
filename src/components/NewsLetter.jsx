

const NewsLetter = () => {
    const onSubmitHandler = (e) => {
        e.preventDefault();
    }
    return (
        <div className="text-center">
            <p className=" text-2xl  text-gray-900 font-bold">Subscribe now & get 20% off</p>
            <p className="text-gray-400 mt-3">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            <form onSubmit={onSubmitHandler} className="w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3">
                <input className="w-full sm:flex-1 outline-none " type="email" placeholder="Enter Your E-mail" required />
                <button type="submit" className="bg-black px-10 py-4 text-white text-xs ">SUBSCRIBE</button>
            </form>
        </div>
    )
}

export default NewsLetter