import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import EmpleadoList from './Ejercicio7/EmpleadoList';
import '../App.css';

const empleados = [
    { id: 1, fullName: "Laya Dueñas", title: "CEO", department: "Business", pic: "empleado01.png" },
    { id: 2, fullName: "Astryd Vallés", title: "CMO", department: "Marketing", pic: "empleado01.png" },
    { id: 3, fullName: "Shantell Meza", title: "CFO", department: "Business", pic: "empleado01.png" },
    { id: 4, fullName: "Sergio Ocampo", title: "CTO", department: "Engineering", pic: "empleado01.png" },
    { id: 5, fullName: "Ares Jiménez", title: "Art Director", department: "Marketing", pic: "empleado01.png" },
    { id: 6, fullName: "Marta Pérez", title: "Frontend Dev", department: "Engineering", pic: "empleado01.png" },
    { id: 7, fullName: "Ellen Balderas", title: "Digital Strategist", department: "Marketing", pic: "empleado01.png" },
    { id: 8, fullName: "Cynthia Valentín", title: "Backend Dev", department: "Engineering", pic: "empleado01.png" },
    { id: 9, fullName: "Bernard Jung", title: "DevOps Engineer", department: "Engineering", pic: "empleado01.png" },
];

function Ejercicio7() {
    return (
        <section className="Ejercicio7 container">
            <h1 className="my-4">Lista de Empleados</h1>
            <EmpleadoList empleados={empleados} />
        </section>
    );
}

export default Ejercicio7;
