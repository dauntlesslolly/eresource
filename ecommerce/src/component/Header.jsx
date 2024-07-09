import React from 'react'

const Header = () => {
  return (
    <div className="flex gap-5 px-20 py-5 w-full bg-blue-500 max-md:flex-wrap max-md:px-5 max-md:max-w-full">
    <div className="flex-auto my-auto text-3xl text-blue-950">
      <span className="font-semibold">Fenzy </span>
      <span className="font-semibold text-blue-950">Gadget</span>
    </div>
    <div className="justify-center items-start p-5 text-xl whitespace-nowrap bg-white rounded-2xl text-stone-300 max-md:pr-5 max-md:max-w-full">
      Search...
    </div>
    <div className="flex gap-5 justify-between self-start font-semibold text-white">
      <div className="my-auto text-lg">Log In</div>
      <div className="justify-center px-8 py-3.5 text-xl bg-blue-900 rounded-2xl max-md:px-5">
        Sign Up
      </div>
    </div>
  </div>
  )
}

export default Header