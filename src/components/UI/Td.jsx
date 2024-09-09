

const Td = ({children, className}) => {

   return (
    <td className={`py-2 px-3 ${className}`}>
        {children}
    </td>
   );

};

export default Td;