/**
 * @copyright 2024 codewithsadee
 * @license Apache-2.0
 */



const header = () => {
  return (
    <header className="Fixed top-0 left-0 w-full h-20 flex items-center z-40 bg-gradient-to-b from-zinc-900-to-zinc-900/0">
        <div className="max-w-screen-2xl w-full mx-auto px-4">
            <h1>
                <a href="/"
                 className="logo"
                >
                <img src="/images/logo.svg"
                width={50}
                height={50}
                 alt="Henry Clark"></img>
                </a>
            </h1>
           <div className="">
            <button className=""
            onClick={null}
            >
            <span className="material-symbols rounded">
                menu
            </span>
            </button>
           </div>

        </div>
    </header>
  )
}

export default header
