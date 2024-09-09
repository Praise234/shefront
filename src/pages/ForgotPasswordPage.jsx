import Image from "../components/UI/Image";
import logo from "../assets/images/logo-default.svg";
import Input from "../components/UI/Input";
import { useState } from "react";
import Button from "../components/UI/Button";
import useAuth from "../hooks/useAuth";
import { NavLink } from "react-router-dom";

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);


  const { login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    const loginResult = await login(email, password);

    if(loginResult.success) {

      setIsLoading(false);
      alert(loginResult.message);
      
    } else {
      
      setIsLoading(false);
      setError(loginResult.message);
    }


  };


  return (
    <div className="font-lato min-h-screen w-screen lg:bg-custom-loginbg flex justify-center items-center text-custom-black">
      <div className="lg:h-[642px] lg:w-[540px] rounded-[34px] lg:shadow-lg bg-custom-white flex flex-col justify-center items-center gap-4">
        {error !== '' && <div className="text-[18px] text-custom-red bg-custom-errbg p-3 text-center">{error}</div>}
        <Image alt={"logo"} src={logo} className="h-[24px] w-[149px] lg:h-[21.61px] lg:w-[141px] " />
        <p className="font-[700] text-[32px] leading-[35.2px] text-center hidden lg:block ">
          Request Password Reset
        </p>
        <p className="font-[400] text-[18px] leading-[19.8px] text-center hidden lg:block">
        Enter Your Email and we would send a request{" "}
        </p>
        <p className="font-[400] font-lato text-[16px] leading-[17.6px] lg:hidden">Enter Your Email and we would send a request</p>
        <div className="py-4 lg:py-8 flex flex-col gap-4">
          <Input
            inputClassname="max-w-[331px] w-[90vw] h-[46px] lg:max-w-[432px] lg:w-[432px] lg:h-[53px] p-2 bg-custom-white border-[1.3px] border-custom-ash rounded-[14px]"
            inputType="text"
            inputValue={email}
            placeholder="Email Address"
            setInputValue={setEmail}
            lblText="Email Address"
          />
          <Button
            
            btnAction={handleSubmit}
            className={` ${isLoading && "'cursor-not-allowed"} flex justify-center items-center font-[700] font-lato text-center leading-[16.5px] lg:leading-[17.6px] text-[15px] lg:text-[16px] text-custom-white  max-w-[332.67px] w-[90vw] h-[51.12px] lg:max-w-[432px] lg:w-[432px] lg:h-[53px] rounded-[14px] bg-custom-brand lg:bg-custom-black mt-5`}>
              {
              isLoading ? 
                <div className="w-5 h-5 border-2 border-t-2 border-t-blue-500 border-gray-200 rounded-full animate-spin"></div>
              : 
              "Request Reset"
              }
            </Button>


            <p className="font-lato font-[400] text-[14px] lg:text-[16px] leading-[15.4px] lg:leading-[17.6px] text-center mt-2 ">Remember your password? <NavLink to="/login" className="font-[700] text-custom-brand hover:text-custom-brand">Sign In</NavLink></p>

        
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
