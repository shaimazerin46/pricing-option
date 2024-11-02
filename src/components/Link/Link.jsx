import PropTypes from "prop-types";

const Link = ({route}) => {
    const {path, name} = route
    return (
        <div>
            <li className="mr-5"><a href={path}>{name}</a></li>
        </div>
    );
};

export default Link;
Link.propTypes={
    route: PropTypes.object
}