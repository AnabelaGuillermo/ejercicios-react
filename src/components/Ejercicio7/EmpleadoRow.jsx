import React from 'react';
import PropTypes from 'prop-types';
import EmpleadoAvatar from './EmpleadoAvatar';

const EmpleadoRow = ({ empleado }) => {
    return (
        <section className="empleado-row row align-items-center">
            <article className="col-2">
                <EmpleadoAvatar pic={empleado.pic} />
            </article>
            <article className="col-10">
                <h5>{empleado.fullName}</h5>
                <p>{empleado.title} - {empleado.department}</p>
            </article>
        </section>
    );
};

EmpleadoRow.propTypes = {
    empleado: PropTypes.shape({
        id: PropTypes.number.isRequired,
        fullName: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        department: PropTypes.string.isRequired,
        pic: PropTypes.string.isRequired,
    }).isRequired,
};

export default EmpleadoRow;
