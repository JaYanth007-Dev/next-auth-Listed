import React from 'react'
import rightarrow from "../Assets/rigtharrow.png";
import Image from 'next/image';

const TodaySchedule = () => {
    return (
        <div className="absolute top-[688px] left-[900px] w-[480px] h-64 text-xs text-icon font-montserrat">
        <div className="absolute top-[0px] left-[0px] w-[480px]  h-64">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-xl bg-white" />
        </div>
        <b className="absolute top-[30px] left-[40px] text-lg text-black">
          Today’s schedule
            </b>
            

        <div className="absolute top-[77px] left-[40px] w-[267px] h-[66px]  font-lato">
          <b className="absolute top-[3px] left-[15px] text-sm text-dimgray">
            Meeting with suppliers from Kuta Bali
          </b>
          <div className="absolute top-[25px] left-[15px]">14.00-15.00</div>
          <div className="absolute top-[44px] left-[15px]">{`at Sunset Road, Kuta, Bali `}</div>
          <div className="absolute top-[-2.5px] left-[-2.5px] box-border w-[5px] h-[71px]  bg-[#9BDD7C] " />
        </div>
        <div className="absolute  top-[34px] left-[398px] cursor-pointer text-secondary-text">
          See All
        </div>
        <Image
          className="absolute h-[3.13%] w-[1.04%] top-[14.84%] right-[6.25%] bottom-[82.03%] left-[92.71%] max-w-full overflow-hidden max-h-full"
          alt="arrow"
          src={rightarrow}
        />
        <div className="absolute top-[156px] left-[40px] w-[238px] h-[66px] font-lato">
          <b className="absolute top-[3px] left-[15px] text-sm text-dimgray">
            Check operation at Giga Factory 1
          </b>
          <div className="absolute top-[25px] left-[15px]">18.00-20.00</div>
          <div className="absolute top-[44px] left-[15px]">{`at Central Jakarta `}</div>
          <div className="absolute top-[-2.5px] left-[-2.5px] box-border w-[5px] h-[71px]  bg-[#6972C3]" />
        </div>
      </div>
    )
}

export default TodaySchedule