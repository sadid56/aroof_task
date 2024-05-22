/* eslint-disable react/prop-types */

// Custom container use for multiple components
const Container = ({children, className = ''}) => {
    return (
        <div className={`${className} max-w-[1170px] mx-auto`}>
            {children}
        </div>
    );
};

export default Container;
