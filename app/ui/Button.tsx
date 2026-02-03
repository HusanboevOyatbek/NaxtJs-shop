


const Button = ({children}:{children: React.ReactNode}) => {
    return(
        <button className={"mt-2 bg-black text-white rounded-full px-8 py-3 text-sm font-medium cursor-pointer hover:bg-gray-800 transition"}>{children}</button>
    )
}

export default Button;