


const Button = ({className, children, btnAction}) => {
    return (
        <button className={className} onClick={btnAction}>
            {children}
        </button>
    );
};

export default Button;