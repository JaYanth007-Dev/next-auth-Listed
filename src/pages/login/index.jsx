import React, {useEffect} from 'react'
import LogInForm from './components/LogInForm'
import Image from 'next/image'
import GoogleIcon from "./assets/GoogleIcon.svg"
import AppleIcon from "./assets/AppleIcon.svg"
import { useSession, signIn } from "next-auth/react"
import { useRouter } from "next/router";

const LogInPage = () => {
    const router = useRouter();
    const {data: session} = useSession();

    React.useEffect(() => {
        if (session) router.push("/dashboard");
    }, [session]);

    const SignInWithGoogle = async() => {
        await signIn('google', {
            callbackUrl: "http://localhost:3000/dashboard"
        })
    }
    return (
        <main className='flex'>
            <section className='w-[40%] bg-black h-screen flex items-center justify-center'>
                <h1 className="text-white text-7xl brand font-bold ">Board.</h1>;
            </section>

            <section className='w-[60%] bg-[#F5F5F5] h-screen flex flex-col gap-[34px] items-center justify-center'>
                <div>
                    <h1 className="font-bold mt-260 ml-832  text-[36px] text-black font-Montserrat ">Sign in</h1>
                    <p className="text-[16px] mt-309 ml-832 text-black font-Lato font-normal">Sign in to your account</p>
                </div>
                <div className='flex items-center gap-[25px]'>
                    <button onClick={SignInWithGoogle} type="button" className='cursor-pointer outline-none w-[180px] justify-center align-middle items-center flex h-[30px] bg-white rounded-lg'>
                        <Image alt="logo" className='w-[14px] h-[14px]' src={GoogleIcon}/>
                        <p className='text-[12px] font-Montserrat  text-[#858585] pl-[10px]'>Sign in with Google</p>
                    </button>

                    <button className='cursor-pointer outline-none w-[180px] flex h-[30px] bg-white justify-center  rounded-lg alignmiddle items-center'>
                        <Image alt="logo" className='w-[14px]  h-[14px]' src={AppleIcon}/>
                        <p className='text-[12px] items-center font-Montserrat pl-[10.5px] text-[#858585] font-normal'>Sign in With Apple</p>
                    </button>
                </div>
                <LogInForm/>
            </section>
        </main>
    )
}

export default LogInPage