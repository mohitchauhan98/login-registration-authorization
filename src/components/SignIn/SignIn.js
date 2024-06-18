import { useState } from "react";
import { Link , useNavigate } from "react-router-dom";
import Footer from "../Footer/Footer";
import { useDispatch } from "react-redux";
import { signInUser } from "../../store/Slice";

const SignIn = () => {
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [error,setError] = useState('')
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const submitHandler = (event) => {
    event.preventDefault()
    if(!email || !password){
      setError("Please fill in all the fields")
    }else {
      dispatch(signInUser({email , password}))
      setError("")
      setEmail("")
      setPassword("")
      console.log("Sign In Successfull")
      navigate('/dashboard')
    }
  }

  const handleChange = (event) => {
    const { name , value } = event.target
    if(name === "email") setEmail(value)
      else if(name === 'password') setPassword(value)
  }
  return (
    <div className="w-full">
      <div className="w-full bg-gray-100 pb-10">
        <form onSubmit = {submitHandler} className="w-[350px] mx-auto flex flex-col items-center">
          <div className="w-full border border-zinc-200 p-6 mt-10">
            <h2 className="font-titleFont text-3xl font-medium mb-4">Sign In</h2>
            <div className="flex flex-col gap-3">
              <div className="flex flex-col gap-2">
                <p className="text-sm font-medium">Email or mobile phone number</p>
                <input className = "w-full lowercase py-1 border border-zinc-400 px-2 text-base rounded-sm outline-none focus-within:border-[#e77600] focus-within:shadow-formInput duration-100" type="email" name="email" value={email} onChange={handleChange}/>
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-sm font-medium">Password</p>
                <input className = "w-full lowercase py-1 border border-zinc-400 px-2 text-base rounded-sm outline-none focus-within:border-[#e77600] focus-within:shadow-formInput duration-100" type="password" name="password" value={password} onChange={handleChange}/>
              </div>
              {error && <p className="text-red-500">{error}</p>}
              <button className="w-full py-1.5 text-sm font-normal rounded-sm bg-gradient-to-t from-[#f7dfa5] to-[#f0e54b] hover:bg-gradient-to-b border border-zinc-400 active:border-yellow-800 active:shadow-formInput">Sign In</button>
            </div>
          </div>
          <Link className = "w-full" to = "/registration">
            <button className="w-full py-1.5 mt-4 text-sm font-normal rounded-sm bg-gradient-to-t from-slate-200 to-slate-100 hover:bg-gradient-to-b border border-zinc-400 active:border-yellow-800 active:shadow-amazonInput">Create Your New Account</button>
          </Link>
        </form>
      </div>
      <Footer />
    </div>
  )
}

export default SignIn