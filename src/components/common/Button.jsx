import React from 'react'

const Button = ({btnTxt,className}) => {
  return (
    <>
    <button className={`py-4 gradient-primary-bg hover:scale-105 cursor-pointer hover:shadow-lg hover:shadow-cyan-500/20 text-[20px] text-[#E2E8F0]font-playFair font-medium rounded-2xl  px-6 ${className}`}>{btnTxt}</button>
    </>
  )
}

export default Button