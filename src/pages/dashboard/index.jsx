import React, {useEffect} from 'react'
import Sidebar from './components/Sidebar'
import Header from './components/Header'
import Statistics from './components/Statistics'
import Activities from './components/Activities'
import TopProducts from "./components/TopProducts"
import TodaySchedule from "./components/TodaySchedule"
import { useSession, signOut } from "next-auth/react"
import { useRouter } from "next/router";

const Dashboard = () => {
    const router = useRouter();
    const {data: session} = useSession();
    const [user, setUser] = React.useState();

    React.useEffect(()=>{
        if(!session) router.push("/login");
        if(session){
            setUser(session.user);
        }
    },[session])

    return (
        <div className="relative bg-background w-full h-[1024px] overflow-hidden text-left text-sm text-black font-lato">
            <Sidebar />
            <Header user={user}/>
            <Statistics />
            <Activities />
            <TopProducts />
            <TodaySchedule/>
        </div>

    )
}

export default Dashboard