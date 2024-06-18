import React , {useState} from "react";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
import { useDispatch } from "react-redux";
import { registerUser } from "../../store/Slice";

const Registration = () => {
    const [name ,setName] = useState('');
    const [email , setEmail] = useState('');
    const [password , setPassword] = useState('');
    const [reEnterPassword , setReEnterPassword] = useState('')
    const [error, setError] = useState('');
    const dispatch = useDispatch()

    const submitHandler = (event) => {
        event.preventDefault();
        if (!email || !password || !name || !reEnterPassword) {
          setError("Please fill in all the fields.");
        } else if (password.length < 6) {
          setError("Password must be at least 6 characters long.");
        } else if (password !== reEnterPassword) {
          setError("Passwords do not match.");
        } else {
            dispatch(registerUser({ email, password }))
            .unwrap()
            .catch((error) => setError(error.error));
            setError("");
            setName('');
            setEmail('');
            setPassword('');
            setReEnterPassword('');
            console.log('Signed Up Successfully');
        }
    };

    const handleChange = (event) => {
        const {name , value} = event.target
        if(name === "email") setEmail(value);
        else if (name === "password") setPassword(value);
        else if (name === "name") setName(value);
        else if (name === "reEnterPassword") setReEnterPassword(value);
    }

    return(
        <div className="w-full">
            <div className="w-full bg-gray-100 pb-10">
                <form onSubmit = {submitHandler} className="w-[350px] mx-auto flex flex-col items-center">
                    <div className="w-full border border-zinc-200 p-6 mt-10">
                        <h2 className="font-titleFont text-3xl font-medium mb-4">Create Account</h2>
                        <div className="flex flex-col gap-3">
                        <div className="flex flex-col gap-2"> 
                                <p className="text-sm font-medium">Your Name</p>
                                <input className="w-full lowercase py-1 border border-zinc-400 px-2 text-base rounded-sm outline-none focus-within:border-[#e77600] focus-within:shadow-amazonInput duration-100" type = "text" value = {name} name = "name" onChange={handleChange}/>
                            </div>
                            <div className="flex flex-col gap-2"> 
                                <p className="text-sm font-medium">Email or mobile phone number</p>
                                <input className="w-full lowercase py-1 border border-zinc-400 px-2 text-base rounded-sm outline-none focus-within:border-[#e77600] focus-within:shadow-amazonInput duration-100" type = "email" value = {email} name = "email" onChange={handleChange}/>
                            </div>
                            <div className="flex flex-col gap-2"> 
                                <p className="text-sm font-medium">Password</p>
                                <input className="w-full lowercase py-1 border border-zinc-400 px-2 text-base rounded-sm outline-none focus-within:border-[#e77600] focus-within:shadow-amazonInput duration-100" type = "password" value = {password} name = "password" onChange={handleChange} />
                            </div>
                            <div className="flex flex-col gap-2"> 
                                <p className="text-sm font-medium">Re-enter Password</p>
                                <input className="w-full lowercase py-1 border border-zinc-400 px-2 text-base rounded-sm outline-none focus-within:border-[#e77600] focus-within:shadow-amazonInput duration-100" type = "password" value = {reEnterPassword} name = "reEnterPassword" onChange={handleChange} />
                            </div>
                            {error && <p className="text-red-500">{error}</p>}
                            <button className="w-full py-1.5 text-sm font-normal rounded-sm bg-gradient-to-t from-[#f7dfa5] to-[#f0e54b] hover:bg-gradient-to-b border border-zinc-400 active:border-yellow-800 active:shadow-amazonInput">Continue</button>
                        </div>
                        <div>
                            <p className="text-xs text-black mt-2">Already have an account ? 
                                <Link to = "/">
                                    <span className="text-xs text-blue-600 hover:text-orange-600 hover:underline underline-offset-1 cursor-pointer duration-100">Sign in</span>
                                </Link>
                            </p>
                        </div>
                    </div>
                </form>
            </div>
            <Footer />
        </div>
    )
}

export default Registration