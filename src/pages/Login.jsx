import { useState } from "react"

const Login = () => {

  const [currentState, setCurrentState] = useState('Login');
  const onSubmitHandler = (e) => {
    e.preventDefault();
  }

  return (
    <form onSubmit={onSubmitHandler} className=" flex flex-col items-center  w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800">
      <div>
        <p className="inline-flex items-center gap-2  mb-2  mt-10 font-bold text-2xl">{currentState}</p>
        <hr className="border-none h-[1.5px] w-15 bg-gray-800 " />
      </div>
      {currentState === 'Login' ? '' : <input className="w-full px-3 py-2 border  border-gray-800" type="text" placeholder="Name" required />}
      <input className="w-full px-3 py-2 border  border-gray-800" type="email" placeholder="E-mail" required />
      <input className="w-full px-3 py-2 border  border-gray-800" type="password" placeholder="Password" required />
      <div className=" w-full flex justify-between text-sm mt-[-8px] ">
        <p className="cursor-pointer font-bold">Forget Your Password </p>
        {
          currentState === 'Login'
            ? <p onClick={() => setCurrentState('Sign Up')} className="cursor-pointer font-bold">Create Account</p>
            : <p onClick={() => setCurrentState('Login')} className="cursor-pointer font-bold">Login Here </p>
        }
      </div>
      <button className="bg-black text-white font-light  px-8 py-2 mt-4">{currentState === 'Login' ? 'Sign In' : 'Sign Up'}</button>
    </form>
  )
};

export default Login
