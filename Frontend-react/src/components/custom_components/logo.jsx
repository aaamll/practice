import React from "react";

const Logo =({ textColor = "text-black" })=>{
   return(
    <>
     {/* Top Left Logo */}
      <div className="absolute top-8 left-8 z-20 flex items-center gap-2">
        <div className="bg-white/50 p-2 rounded-lg backdrop-blur-md ">
          <img src="/download.png" width={50} height={50} placeholder='Logo'/>
        </div>
        <span className={`text-2xl font-bold ${textColor} tracking-tighter`}>FitClub</span>
      </div>

    </>
   )
}

export default Logo;