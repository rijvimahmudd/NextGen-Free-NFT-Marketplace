import PropTypes from 'proptypes';

const Button = ({ variant = 'fill', label, className, border=true }) => {
  return (
      <button
        className={`text-base font-medium bg-[length:${variant === 'fill' ? '100%' : '0'}] bg-no-repeat ${border && "border-gradient"} ${variant === 'fill' ? 'linear-gradient' : 'bg-transparent'} ${className}`}
      >
        {label}
      </button>
  );
};

Button.propTypes = {
  variant: PropTypes.oneOf(['fill', 'outlined']),
  label: PropTypes.string.isRequired,
  className: PropTypes.string,
  border: PropTypes.bool
};

export default Button;
