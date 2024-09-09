

const StatusBadge = ({ status }) => {
  const statusStyles = {
    Approved: 'bg-custom-usersbg text-custom-approved',
    Processing: 'bg-custom-processedbg text-custom-processed',
    Declined: 'bg-custom-icbg text-custom-declined',
  };

  return (
    <span className={`px-3 py-1 rounded-full text-[12px] text-center leading-[14.4px] font-[700] font-lato ${statusStyles[status]}`}>
      {status}
    </span>
  );
};

export default StatusBadge;
