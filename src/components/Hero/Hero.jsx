
const Hero = () => {
  return (
    <div className="w-screen h-4/5">
        <div className="w-full grid grid-cols-2 gap-4 items-center justify-items-center">
            <div className="m-4 text-6xl ml-20">
                <h1 className="font-bold my-6">Unlocking the Potential of Digital Innovation</h1>
                <h2 className="text-xl my-4">At Our Agency, Innovation Knows no bounds. We work tirelessly to solve your most critical business priorities.</h2>
                <div className="text-xl my-4">
                  <button className="border rounded-3xl bg-black text-[#ffffd9] py-2 px-6 my-4">Know More</button>
                  <button className="border-2 border-black rounded-3xl bg-[#ffffd9] text-black py-2 px-6 m-4">Our Works</button>
                </div>
            </div>
            <div className="w-2/3 items-center m-4">
                <img className="h-1/3" src="https://i.imgur.com/un4gJcc.png"/>
            </div>
        </div>
    </div>
  )
}

export default Hero