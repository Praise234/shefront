import { MdInsertChart } from "react-icons/md";
import { RiWallet3Fill } from "react-icons/ri";
import { TbCurrencyNaira } from "react-icons/tb";


const VisitorsCard = () => {

    return(
        <div className="bg-custom-white text-custom-grey p-3 rounded-lg flex flex-col gap-3 w-[277px] h-[154px] justify-between">
            <div className="text-[14px] font-[600] leading-[16.8px] font-lato flex justify-between items-center ">
                <p>Visitors Today</p>
                <div className="bg-custom-visbg p-1 rounded-md"><MdInsertChart size={24} className="text-custom-black" /></div>
            </div>
            <p className="flex font-lato font-[700] text-[26px] items-center text-custom-black"><span >81,345</span></p>
            <p className="font-lato font-[700] text-[9px] text-custom-black leading-[10.8px]"><span className="text-custom-green">+21.5%</span> More Visitors from last week</p>

        </div>
    );

};

export default VisitorsCard;