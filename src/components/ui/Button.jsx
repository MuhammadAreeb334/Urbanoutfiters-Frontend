const Button = ({ 
  children, 
  variant = "white", 
  className = "", 
  ...props 
}) => {
  const baseStyles = "bg-white text-black px-6 py-3 text-[11px]  font-bold tracking-[0.15em] uppercase hover:underline transition-all min-w-[120px]";
  
  const variants = {
    white: "bg-white text-black border-white hover:bg-gray-100",
    black: "bg-black text-white border-black hover:bg-[#333]",
    outline: "bg-transparent text-black border-black hover:bg-black hover:text-white",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;