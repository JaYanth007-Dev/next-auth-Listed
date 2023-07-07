import React from 'react'
import camIcon from "../Assets/camIcon.png";
import transactionIcon from "../Assets/total_transactions_icon.png";
import likeIcon from "../Assets/Like.png";
import people from "../Assets/2people.png";
import Image from 'next/image';

const Statistics = () => {
    return (
        <div className="">

        <div className="absolute top-[129px] left-[637.89px] w-[221.05px] h-[120px]">
        <div className="absolute top-[0px] left-[0px] w-[221.05px] h-[120px]">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-xl bg-[#F4ECDD]" />
        </div>
        <div className="absolute top-[45px] left-[25.11px] inline-block">
          Total Transactions
        </div>
        <b className="absolute top-[67px] left-[25.11px] text-[24px] inline-block font-sans font-bold w-[65.26px]">
          1,520
        </b>
        <Image
          className="absolute h-1/5 w-[10.54%] top-[16.67%] right-[11.56%] bottom-[63.33%] left-[77.9%] max-w-full overflow-hidden max-h-full"
          alt="logo"
          src={transactionIcon}
        />
      </div>


      <div className="absolute top-[129px] left-[380px] w-[221.05px] h-[120px]">
        <div className="absolute top-[0px] left-[0px] w-[221.05px] h-[120px]">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-xl bg-[#DDEFE0] " />
        </div>
        <div className="absolute top-[45px] left-[25px] font-lato inline-block w-[124px]">
          Total Revenues
        </div>
        <b className="absolute top-[67px] left-[25px] text-[24px]  inline-block font-sans font-bold w-[124px]">
          $2,129,430
        </b>
        <Image
          className="absolute h-1/5 w-[11.94%] top-[16.67%] right-[11.6%] bottom-[63.33%] left-[76.45%] max-w-full overflow-hidden max-h-full"
          alt="logo"
          src={camIcon}
        />
      </div>


      <div className="absolute top-[129px] left-[895.79px] w-[221.05px] h-[120px]">
        <div className="absolute top-[0px] left-[0px] w-[221.05px] h-[120px]">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-xl bg-[#EFDADA]" />
        </div>
        <div className="absolute top-[45px] left-[25.21px] font-lato inline-block w-[81px]">
          Total Likes
        </div>
        <b className="absolute top-[67px] left-[25.58px] text-[24px] inline-block font-bold font-sans w-[65.26px]">
          9,721
        </b>
        <Image
          className="absolute h-1/5 w-[10.54%] top-[16.67%] right-[11.56%] bottom-[63.33%] left-[77.9%] max-w-full overflow-hidden max-h-full"
          alt="logo"
          src={likeIcon}
        />
      </div>


      <div className="absolute top-[129px] left-[1158.95px] w-[221.05px] h-[120px]">
        <div className="absolute top-[0px] left-[0px] w-[221.05px] h-[120px]">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-xl bg-[#DEE0EF]" />
        </div>
        <Image
          className="absolute h-1/5 w-[16.65%] top-[16.67%] right-[11.39%] bottom-[63.33%] left-[71.95%] max-w-full overflow-hidden max-h-full"
          alt="logo"
          src={people}
        />
        <div className="absolute top-[45px] left-[25.58px] inline-block font-lato w-[85.26px]">
          Total Users
        </div>
        <b className="absolute top-[67px] left-[25.58px] text-[24px] font-sanses font-bold inline-block font-open-sans w-[44.21px]">
          892
        </b>
      </div>
   
        
        </div>
    )
}

export default Statistics