interface ButtonProps {
    label: string;
    backgroundColor: string;
    textColor: string;
    border: string;
    size: string;
    customClasses?: string;
    onClick?: () => void;
  }
function Button({ label, backgroundColor, textColor, border,size,customClasses,onClick }: ButtonProps) {
    const combinedClasses = `rounded-lg px-3 py-2.5 text-sm font-medium text-white transition duration-200 hover:bg-brand-600 active:bg-brand-700 dark:bg-brand-400 dark:text-white dark:hover:bg-brand-300 dark:active:bg-brand-200 ${customClasses}`;
    const handleClick = () => {
        // You can add your custom logic here
        // For example, you can call a function or perform some action when the button is clicked
        if (onClick) {
          onClick();
        }
      };
    return (
      <button
        style={{ backgroundColor, color: textColor, border: border, width: size}}
        className={combinedClasses}
        onClick={handleClick}
      >
        {label}
      </button>
    );
  }
  
  export default Button;
  