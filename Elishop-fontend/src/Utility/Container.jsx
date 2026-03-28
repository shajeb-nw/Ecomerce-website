import React  from 'react';

const Container = ({className='', children}) => {
    return (
        <div className={`${className} max-w-7xl px-11 max-md:px-4 mx-auto`}>
            {children}
        </div>
    );
};

export default Container;