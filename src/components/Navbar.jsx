const Navbar = ()=> {
    return(
        <>
            <div className=" flex justify-around items-center bg-slate-600 h-[60px]">
                <h1 className="bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text text-4xl">Moviex</h1>
                <div className=" flex gap-4 text-white text-xl">
                    <h2>Movies</h2>
                    <h2>TV Shows</h2>
                </div>
            </div>
        </>
    )
}
export default Navbar