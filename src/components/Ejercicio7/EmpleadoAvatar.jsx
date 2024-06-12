import React from 'react';
import PropTypes from 'prop-types';

const EmpleadoAvatar = ({ pic }) => {
    const defaultPic = '/default-avatar.png';
    return (
        <section className="empleado-avatar">
            <img src={pic || defaultPic} alt="Empleado" className="img-fluid rounded-circle" />
        </section>
    );
};

EmpleadoAvatar.propTypes = {
    pic: PropTypes.string.isRequired,
};

export default EmpleadoAvatar;
