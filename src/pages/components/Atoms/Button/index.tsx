// const Button = (props) => {
//     const { children, variant = "bg-[#f3e55f]" } = props;
//     return (
//         <button className={`${variant} text-black px-6 py-2 rounded hover:bg-[#f3e55f]/90`}>
//             {children}
//         </button>
//     );   
// };

// export default Button;

export function Button({ children, className, ...props }) {
    return (
      <button className={`bg-[#f3e55f] text-black px-6 py-2 rounded hover:bg-[#f3e55f]/90 ${className}`} {...props}>
        {children}
      </button>
    );
  }