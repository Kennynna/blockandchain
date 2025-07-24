
const IconWrapper = ({ children, className = "", size = 24, ...props }) => (
  <span
    className={`inline-flex items-center justify-center w-[${size}px] h-[${size}px] ${className}`}
    style={{ fontSize: size }}
    {...props}
  >
    {children}
  </span>
);

export default IconWrapper;