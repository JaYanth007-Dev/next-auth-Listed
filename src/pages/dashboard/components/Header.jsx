import React from 'react'
import searchIcon from "../Assets/Search_icon.png";
import bellIcon from "../Assets/bell_Icon.png";
import Image from 'next/image';
import { signOut } from "next-auth/react"
const Header = ({user}) => {
    return (
        <div className="absolute top-[60px] left-[380px] w-[1000px] h-[30px] text-5xl font-montserrat">
            <b className="absolute top-[0px] left-[0px]">Dashboard</b>
            <div className="absolute top-[0px] left-[713px] w-[180px] h-[30px] text-sm text-light-grey font-lato">
                <div className="absolute top-[0px] left-[0px] w-[180px] h-[30px]">
                    <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-[10px] bg-white" />
                </div>
                <div className="absolute top-[6px] left-[15px]"><input className='w-[130px] overflow-hidden' type="text" placeholder='Search...'/></div>
                <Image
                    className="absolute top-[9px] left-[153px] cursor-pointer w-[12.71px] h-3"
                    alt="logo"
                    src={searchIcon}
                />
            </div>
            <img
                className="absolute top-[0px] left-[970px] w-[30px] cursor-pointer h-[30px] object-cover rounded-full"
                alt="logo"
                src={user?.image}
                title='Logout'
                onClick={()=>signOut()}
            />
            <Image
                className="absolute h-[66.67%] w-[1.8%] top-[16.67%] cursor-pointer right-[5.9%] bottom-[16.67%] left-[92.3%] max-w-full overflow-hidden max-h-full"
                alt="bellIcon"
                src={bellIcon}
            />
        </div>

    )
}

export default Header