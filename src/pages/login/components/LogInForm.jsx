import Link from 'next/link';
import React from 'react'

const LogInForm = () => {
    return (
        <div className="flex flex-col justify-center items-center">
            <form className="w-[385px] h-[317px] rounded-[20px] bg-white">

            <label className="font-['Lato'] font-normal pl-[30px] flex pt-[30px]">Email address</label>
            <input type="email"  className="flex w-[325px] h-[40px] rounded-[10px] mt-[10px] bg-[#f5f5f5] pl-[15px] mx-[30px]" ></input>
            <br />
                
            <label className="font-['Lato'] mx-[30px] flex ">Password</label>
                <input type="password" className="flex mt-[10px] w-[325px] bg-[#EAEAEA] h-[40px] rounded-[10px] pl-[15px] mx-[30px]"></input>
                <Link href="#" className="text-[16px] font-['Lato'] text-[#346BD4]  pt-[20px] pl-[30px]">Forgot password?</Link>
                <button type="submit" className="font-['Montserrat'] bg-black mt-[20px] my-[30px] ml-[30px] w-[325px] h-[40px] rounded-[10px] text-white">Sign in</button>
            </form>
            <Link href="#" className="text-[16px] mt-[20px ] font-Lato text-[#858585] ">Dont have an account?<span className="text-[#346BD4]">Register here</span></Link>
        </div>
    );
}

export default LogInForm;

