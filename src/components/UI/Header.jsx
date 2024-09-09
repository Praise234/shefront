import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { AiFillMessage } from 'react-icons/ai';
import { BiChevronDown, BiSolidCalendar } from 'react-icons/bi';
import { HiUser } from 'react-icons/hi';
import { IoNotifications } from 'react-icons/io5';
import SearchInput from './SearchInput';

const Header = () => {
  // Set the initial date range to a specific range
  const initialStartDate = new Date();
  const initialEndDate = new Date();
  initialEndDate.setDate(initialEndDate.getDate() + 7); // Set the end date to one week from the start date

  const [filterDate, setFilterDate] = useState([initialStartDate, initialEndDate]);
  const [startDate, endDate] = filterDate;


  return (
    <div className='bg-custom-white h-[61px] flex items-center justify-center'>
        <div className=" flex items-center text-custom-black w-full max-w-[75em]">
            <div className='flex-[1.5]'>
                <SearchInput />
            </div>
            <div className='flex-[1.2] flex items-center gap-12 justify-end'>
                <div className='flex bg-custom-datepicker items-center  rounded-md shadow-sm px-2 w-[60%]'>
                    <BiSolidCalendar size={24} className='mr-1' />
                    <DatePicker
                        selected={startDate}
                        onChange={(update) => {
                            setFilterDate(update);
                        }}
                        selectsRange
                        startDate={startDate}
                        endDate={endDate}
                        className="w-[100%] px-4 py-2 text-custom-grey bg-custom-datepicker focus:outline-none focus:outline-none cursor-pointer"
                    />
                    <BiChevronDown />

                </div>

                <AiFillMessage size={24} className='text-custom-grey' />

                <IoNotifications size={24} className='text-custom-grey' />

                <div className='flex items-center gap-3'>
                    <div className='h-[40px] w-[40px] rounded-full bg-custom-linkactive flex justify-center items-center'>
                        <HiUser size={24} className='text-custom-white' />
                    </div>
                    <p className='text-custom-grey2 font-[700] font-lato text-[11px] leading-[13.2px]'>Admin</p>
                </div>

            </div>
        </div>
    </div>
  );
};

export default Header;
