import Image from "next/image";
import React from "react";
import dashboardIcon from "../Assets/dashboard_icon.png";
import scheduleIcon from "../Assets/schedule_icon.png";
import settingIcon from "../Assets/setting_icon.png";
import transactionIcon from "../Assets/transaction_icon.png";
import userIcon from "../Assets/user_icon.png";

const Sidebar = () => {
    
    return (
        <div className="absolute top-[40px] left-[40px] w-[280px] h-[944px] text-lg text-white brand">
        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-[30px] bg-black" />
        <div className="absolute top-[87.92%] left-[17.86%] cursor-pointer text-sm">Help</div>
        <div className="absolute top-[91.84%] left-[17.86%]  cursor-pointer text-sm">
            Contact Us
        </div>
        <div className="absolute top-[43.64%] cursor-pointer left-[31.43%]">Settings</div>
        <div className="absolute top-[37.08%] cursor-pointer left-[31.43%]">Users</div>
        <div className="absolute top-[30.51%] cursor-pointer left-[31.43%]">Schedules</div>
        <div className="absolute top-[23.94%] cursor-pointer left-[31.43%]">Transactions</div>
        <b className="absolute top-[17.37%] cursor-pointer left-[31.43%]">Dashboard</b>
        <Image
            className="absolute h-[2.2%] w-[6.43%] top-[23.94%] right-[75.71%] bottom-[73.86%] left-[17.86%] max-w-full overflow-hidden max-h-full"
            alt="logo"
            src={transactionIcon}
        />
        <Image
            className="absolute h-[2.07%] w-[6.96%] top-[30.64%] right-[75.45%] bottom-[67.29%] left-[17.59%] max-w-full overflow-hidden max-h-full"
            alt="logo"
            src={scheduleIcon}
        />
        <Image
            className="absolute h-[1.91%] w-[6.43%] top-[17.58%] right-[75.71%] bottom-[80.51%] left-[17.86%] max-w-full overflow-hidden max-h-full"
            alt="logo"
            src={dashboardIcon}
        />
        <Image
            className="absolute h-[1.91%] w-[6.09%] top-[43.86%] right-[76.06%] bottom-[54.24%] left-[17.86%] max-w-full overflow-hidden max-h-full"
            alt="logo"
            src={settingIcon}
        />
        <Image
            className="absolute h-[1.91%] w-[6.43%] top-[37.29%] right-[75.71%] bottom-[60.81%] left-[17.86%] max-w-full overflow-hidden max-h-full"
            alt="logo"
            src={userIcon}
        />
        <b className="absolute top-[6.36%] left-[17.86%] text-[36px]">Board.</b>
        </div>
    );
};

export default Sidebar;
