import React, { useState } from "react";
import { BsFillArrowRightCircleFill,BsFillArrowLeftCircleFill } from 'react-icons/bs';
import Button from "./Button";

const ButtonList1=({list})=>{

    const  [current, setCurrent] = useState(0);

    const  previousSlide = () => {
        if (current === 0) setCurrent(list.length - 1);
        else setCurrent(current - 1);
      };
    
      const nextSlide = () => {
        if (current === list.length - 1) setCurrent(0);
        else setCurrent(current + 1);
      };

    return(
        <div className="overflow-hidden relative">
            <div
            className={`flex transition ease-out duration-40`}
            style={{
              transform: `translateX(-${current * 100}%)`,
            }}
            >
                {list.map((btn)=>{
                    return(
                        <Button name={btn}/>
                    )
                })}
            </div>
             <div className="absolute top-0 h-full w-full justify-between items-center flex text-white px-10 text-3xl">
                <BsFillArrowLeftCircleFill onClick={previousSlide}/>
                <BsFillArrowRightCircleFill onClick={nextSlide} />
             </div>

        </div>
    )
}
export default ButtonList1;

