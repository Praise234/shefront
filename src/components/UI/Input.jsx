import { NavLink } from "react-router-dom";


const Input = ({inputType, inputClassname, placeholder, inputValue, setInputValue, lblText, resetNav}) => {

    return (
        <div className="flex flex-col w-full gap-2">
            <div className="flex justify-between font-lato font-[700] text-[15px] lg:text-[17px] leading-[16.5px] lg:leading-[18.7px] ">
                <label>{lblText}</label>
                {resetNav && <NavLink to={resetNav} className="font-[700] text-custom-brand hover:text-custom-brand" >Request Password Reset</NavLink>}
            </div>
            <input type={inputType} className={inputClassname} placeholder={placeholder} value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
        </div>
    );

};

export default Input;