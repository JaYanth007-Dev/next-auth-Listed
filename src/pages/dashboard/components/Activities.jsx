import React from 'react'
import downarr from "../Assets/downarr.png";
import Image from 'next/image';

const Activities = () => {
    return (
        <div className="absolute top-[289px] left-[380px] w-[1000px] h-[359px]">

        <div className="absolute top-[0px] left-[0px] w-[1000px] h-[359px]">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-xl "/>
        </div>
            <div className="absolute  top-[49px] left-[808px] inline-block w-[43px]">
            <div className="absolute top-[3px] left-[-20px] rounded-[50%] bg-[#EE8484] w-[11px] h-[11px]" />

          Guest
        </div>
            <div className="absolute top-[49px] left-[906px] inline-block w-[34px]">
            <div className="absolute top-[3px] left-[-20px] rounded-[50%] bg-[#9BDD7C] w-[11px] h-[11px]" />
          User
        </div>
        <b className="absolute top-[30px] left-[40px] text-lg inline-block font-montserrat w-[93px]">
          Activities
        </b>
        <div className="absolute top-[57px] left-[40px] w-[124px] flex h-[17px] text-secondary-text font-montserrat">
          <div className="absolute top-[0px] left-[0px] inline-block w-[150px]">
            May - June 2021
          </div>
          <Image
            className="absolute h-[29.41%] w-[6.45%] top-[47.06%] right-[0%] bottom-[23.53%] left-[109.55%] max-w-full overflow-hidden max-h-full"
            alt="logo"
            src={downarr}
                />


        </div>
        <div className="absolute top-[105px] left-[40px] w-[921px] h-[212px] text-secondary-text">
          <div className="absolute top-[0px] left-[0px] w-[921px] h-[17px]">
            <div className="absolute top-[0px] left-[0px] inline-block w-[25.34px]">
              500
            </div>
            <div className="absolute top-[9.5px] left-[39.5px] box-border w-[882px] h-px border-t-[1px] border-solid border-field-color-darker" />
          </div>
          <div className="absolute top-[78px] left-[0px] w-[921px] h-[17px]">
            <div className="absolute top-[0px] left-[0px] inline-block w-[25.34px]">
              300
            </div>
            <div className="absolute top-[9.5px] left-[39.5px] box-border w-[882px] h-px border-t-[1px] border-solid border-field-color-darker" />
          </div>
          <div className="absolute top-[39px] left-[0px] w-[921px] h-[17px]">
            <div className="absolute top-[0px] left-[0px] inline-block w-[25.34px]">
              400
            </div>
            <div className="absolute top-[9.5px] left-[39.5px] box-border w-[882px] h-px border-t-[1px] border-solid border-field-color-darker" />
          </div>
          <div className="absolute top-[117px] left-[0px] w-[921px] h-[17px]">
            <div className="absolute top-[0px] left-[0px] inline-block w-[25.34px]">
              200
            </div>
            <div className="absolute top-[9.5px] left-[39.5px] box-border w-[882px] h-px border-t-[1px] border-solid border-field-color-darker" />
          </div>
          <div className="absolute top-[156px] left-[0px] w-[921px] h-[17px]">
            <div className="absolute top-[0px] left-[0px] inline-block w-[25.34px]">
              100
            </div>
            <div className="absolute top-[9.5px] left-[39.5px] box-border w-[882px] h-px border-t-[1px] border-solid border-field-color-darker" />
          </div>
          <div className="absolute top-[195px] left-[17.23px] w-[903.77px] h-[17px]">
            <div className="absolute top-[0px] left-[0px] inline-block w-[9.12px]">
              0
            </div>
            <div className="absolute top-[9.5px] left-[22.27px] box-border w-[882px] h-px border-t-[1px] border-solid border-field-color-darker" />
                </div>

        </div>
     
      
        </div>
    )
}

export default Activities