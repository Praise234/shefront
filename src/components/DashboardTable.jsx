import { BsThreeDots } from "react-icons/bs";
import Image from "./UI/Image";
import Td from "./UI/Td";
import StatusBadge from "./UI/StatusBadge";

const data = [
    {
      photo: 'https://source.unsplash.com/random/40x40?person',
      name: 'Lea Aminatu Zaria',
      employment: 'Employer',
      amount: '₦150,000.00',
      status: 'Approved',
      requesTdate: '05.May.2024',
    },
    {
      photo: 'https://source.unsplash.com/random/40x40?person',
      name: 'Adeyemi Shittu',
      employment: 'Business',
      amount: '₦2,700,000.00',
      status: 'Declined',
      requesTdate: '13.May.2024',
    },
    {
      photo: 'https://source.unsplash.com/random/40x40?person',
      name: 'Ifeoma Nndefo',
      employment: 'Business',
      amount: '₦300,000.00',
      status: 'Processing',
      requesTdate: '03.April.2024',
    },
    {
      photo: 'https://source.unsplash.com/random/40x40?person',
      name: 'Joy Alakija',
      employment: 'Employer',
      amount: '₦480,000.00',
      status: 'Approved',
      requesTdate: '21.April.2024',
    },
    {
      photo: 'https://source.unsplash.com/random/40x40?person',
      name: 'Theresa Praise',
      employment: 'Business',
      amount: '₦790,000.00',
      status: 'Approved',
      requesTdate: '19.March.2024',
    },
    {
      photo: 'https://source.unsplash.com/random/40x40?person',
      name: 'Chidimma Uzo',
      employment: 'Employer',
      amount: '₦550,000.00',
      status: 'Approved',
      requesTdate: '14.March.2024',
    },
    {
      photo: 'https://source.unsplash.com/random/40x40?person',
      name: 'Ijeoma Nnamdi',
      employment: 'Business',
      amount: '₦363,000.00',
      status: 'Approved',
      requesTdate: '01.March.2024',
    },
  ];


const DashboardTable = () => {
    return (
        <table className="text-left w-full">
            <thead>
                <tr className="border-b">
                    <Td>No</Td>
                    <Td>Photo</Td>
                    <Td>Applicant Name</Td>
                    <Td>Employment</Td>
                    <Td>Amount</Td>
                    <Td>Status</Td>
                    <Td>Request Date</Td>
                    <Td>Action</Td>
                </tr>
            </thead>

            <tbody>
                {data.map((rows, idx) => <tr key={idx} className={`${ 'border-b'}`}>
                    <Td>{idx + 1}</Td>
                    <Td><Image src={rows.photo} className="h-10 w-10 rounded-full" /></Td>
                    <Td>{rows.name}</Td>
                    <Td>{rows.employment}</Td>
                    <Td>{rows.amount}</Td>
                    <Td><StatusBadge status={rows.status} /></Td>
                    <Td>{rows.requesTdate}</Td>
                    <Td className="pl-5"><BsThreeDots size={24}  /></Td>
                </tr>)}
            </tbody>
        </table>
    );
};

export default DashboardTable;