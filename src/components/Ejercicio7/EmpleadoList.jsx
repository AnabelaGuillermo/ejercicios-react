import React from 'react';
import PropTypes from 'prop-types';
import EmpleadoRow from './EmpleadoRow';

const EmpleadoList = ({ empleados }) => {
    return (
        <section className="empleado-list">
            {empleados.map((empleado) => (
                <EmpleadoRow key={empleado.id} empleado={empleado} />
            ))}
        </section>
    );
};

EmpleadoList.propTypes = {
    empleados: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            fullName: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            department: PropTypes.string.isRequired,
            pic: PropTypes.string.isRequired,
        })
    ).isRequired,
};

export default EmpleadoList;
