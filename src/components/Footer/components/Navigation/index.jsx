import PropTypes from "proptypes";
const NavMenu = ({title}) => {
  return (
    <div className="flex flex-col gap-2">
        <div className="text-base font-bold">
            <h1>{title ?? "Menu"}</h1>
        </div>
        <div>
            <ul className="flex flex-col font-light leading-8 opacity-90">
                <li>About</li>
                <li>Support</li>
                <li>Features</li>
                <li>Top Creators</li>
                <li>Blog</li>
            </ul>
        </div>
    </div>
  )
}

NavMenu.propTypes = {
  title: PropTypes.string,
}

export default NavMenu