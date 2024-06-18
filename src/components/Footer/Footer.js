const Footer = () => {
  return (
    <div className="w-full bg-gradient-to-t from-white via-white to-zinc-200 flex flex-col gap-4 justify-center items-center py-10">
        <div className="flex items-center gap-6">
            <p className="text-xs text-blue-600 hover:text-orange-600 hover:underline-offset-1 cursor-pointer duration-100">Conditions of Use</p>
            <p className="text-xs text-blue-600 hover:text-orange-600 hover:underline-offset-1 cursor-pointer duration-100">Privacy Notice</p>
            <p className="text-xs text-blue-600 hover:text-orange-600 hover:underline-offset-1 cursor-pointer duration-100">Help</p>   
        </div>
        <p className="text-xs text-gray-600">© 1998-2024, Mohit Chauhan.com, Inc. or its affiliates</p>
    </div>
  )
}

export default Footer