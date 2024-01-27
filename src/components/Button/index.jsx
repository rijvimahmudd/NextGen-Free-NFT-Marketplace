import PropTypes from 'proptypes';
const Button = ({ variant = 'fill', label, className }) => {
  const buttonVariant = {
    fill: 'text-white bg-[transparent]',
    outlined: 'text-white bg-primary',
  };
  return (
    <div>
      <div className={`linear-gradient p-[1px] max-w-fit`}>
        <button
          className={`py-4 text-base font-medium ${buttonVariant[variant]} ${className}`}
        >
          {label}
        </button>
      </div>
    </div>
  );
};

Button.propTypes = {
  variant: PropTypes.oneOf(['fill', 'outlined']),
  label: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default Button;
