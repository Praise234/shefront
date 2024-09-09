import DashboardTable from "../components/DashboardTable";
import Button from "../components/UI/Button";
import DisbursedCard from "../components/UI/DisbursedCard";
import Header from "../components/UI/Header";
import LoansCard from "../components/UI/LoansCard";
import UsersCard from "../components/UI/UsersCard";
import VisitorsCard from "../components/UI/VisitorsCard";


const LoansPage = () => {
    return (
        <div className="flex-[6] flex flex-col  bg-custom-datepicker text-custom-black pb-8">
            <Header />
            <div className=" flex flex-col items-center gap-6">

                <div className="flex mt-8 justify-between items-center w-full max-w-[75em]">
                    <DisbursedCard />
                    <UsersCard />
                    <VisitorsCard />
                    <LoansCard />
                </div>

                <div className=" rounded-lg w-full max-w-[75em] bg-custom-white h-full  px-7 py-4 flex flex-col gap-5">
                    <div className="flex justify-between items-center text-custom-black">
                        <p className=" font-lato font-[700] text-[23px] leading-[27.6px] ">Loan Applications</p>
                        <div className="flex gap-3 items-center">
                            <select name="" className="bg-custom-visbg text-[16px] leading-[19.2px] focus:outline-none outline-none text-custom-link h-[40px] px-2 rounded-lg  ">
                                <option value="all">All Applications</option>
                                <option value="pending">Pending</option>
                                <option value="approved">Approved</option>
                                <option value="Declined">Declined</option>
                            </select>
                            <Button className="text-custom-white text-[16px] leading-[19.2px]">
                                All Applications
                            </Button>
                        </div>
                    </div>

                    <DashboardTable />
                    
                </div>

                
            </div>
        </div>
    );
};

export default LoansPage;