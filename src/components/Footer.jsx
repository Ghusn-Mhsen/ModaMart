import { assets } from "../assets/assets"


const Footer = () => {
    return (
        <>
            <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
                <div >
                    <img className="w-32 mb-5" src={assets.logo} alt="Logo" />
                    <p className="w-full md:w-2/3 text-gray-600">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </div>

                <div>
                    <p className="mb-5 font-medium text-xl">COMPANY</p>
                    <ul className="flex flex-col gap-1 text-gray-600">
                        <li>Home</li>
                        <li>About US </li>
                        <li>Delivery</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>

                <div>
                    <p className="mb-5 font-medium text-xl">GET IN TOUCH</p>
                    <ul className="flex flex-col gap-1 text-gray-600">
                        <li>+1-000-000-0000</li>
                        <li>example@gmail.com </li>
                        <li>Instagram</li>
                    </ul>
                </div>
            </div>
            <div>
                <hr />
                <p className="py-5 text-sm text-center font-medium">Copyright 2024@- All Right Reserved.</p>
            </div>
        </>

    )
}

export default Footer