import PropTypes from "proptypes";
import { IconContext } from "react-icons";

const SocialIcon = ({ url, element }) => {
  return (
    <div className="inline-block">
      <a
        href={url}
        className="w-9 h-9 border border-slate-700 bg-light-dark flex items-center justify-center rounded-full hover:bg-slate-800 cursor-pointer"
      >
        <svg width="16" height="16" className="">
          <linearGradient id="myGradient" gradientTransform="rotate(90)">
            <stop offset="0%" stopColor="#5C43F6" />
            <stop offset="100%" stopColor="#BC61F3" />
          </linearGradient>
          <IconContext.Provider
            value={{ attr: { fill: "url('#myGradient')" } }}
          >
            {element}
          </IconContext.Provider>
        </svg>
      </a>
    </div>
  );
};

SocialIcon.propTypes = {
  url: PropTypes.string,
  element: PropTypes.element,
};

export default SocialIcon;
