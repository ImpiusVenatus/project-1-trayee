/**
 * Node modules
 */
import PropTypes from "prop-types";

/**
 * Primary button
 */
const ButtonPrimary = ({
  href,
  target = '_self',
  label,
  icon,
  classes
}) => {
  // Conditional rendering for link or button
  if (href) {
    return (
      <a 
        href={href}
        target={target}
        className={"btn btn-primary " + classes}
      >
        {label}
        {icon && (
          <span className="material-symbols-outlined" aria-hidden="true">
            {icon}
          </span>
        )}
      </a>
    );
  }

  return (
    <button className={"btn btn-primary " + classes}>
      {label}
      {icon && (
        <span className="material-symbols-outlined" aria-hidden="true">
          {icon}
        </span>
      )}
    </button>
  );
};

// PropTypes for type checking
ButtonPrimary.propTypes = {
  label: PropTypes.string.isRequired, // Label is required
  href: PropTypes.string,             // Optional href for link
  target: PropTypes.string,           // Target for link
  icon: PropTypes.string,             // Optional icon
  classes: PropTypes.string           // Additional CSS classes
};
/**
 * Button Outline
 */
const ButtonOutline = ({
    href,
    target = '_self',
    label,
    icon,
    classes
  }) => {
    // Conditional rendering for link or button
    if (href) {
      return (
        <a 
          href={href}
          target={target}
          className={"btn btn-outline " + classes}
        >
          {label}
          {icon && (
            <span className="material-symbols-outlined" aria-hidden="true">
              {icon}
            </span>
          )}
        </a>
      );
    }
  
    return (
      <button className={"btn btn-outline " + classes}>
        {label}
        {icon && (
          <span className="material-symbols-outlined" aria-hidden="true">
            {icon}
          </span>
        )}
      </button>
    );
  };
  
  // PropTypes for type checking
  ButtonOutline.propTypes = {
    label: PropTypes.string.isRequired, // Label is required
    href: PropTypes.string,             // Optional href for link
    target: PropTypes.string,           // Target for link
    icon: PropTypes.string,             // Optional icon
    classes: PropTypes.string           // Additional CSS classes
  };

export { 
    ButtonPrimary,
    ButtonOutline
};
