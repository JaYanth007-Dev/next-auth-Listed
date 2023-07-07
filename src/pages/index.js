"use client";
import { useSession } from "next-auth/react"
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();
  const {data: session} = useSession();

  useEffect(()=>{
    if(session) router.push("/dashboard");
    if(!session) router.push("/login")
  },[session])

  return (
    <div className="h-screen w-screen flex items-center justify-center bg-black">
      <strong className="text-white text-6xl font-extrabold font-sans animate-ping">Board .</strong>
    </div>
  )
}
