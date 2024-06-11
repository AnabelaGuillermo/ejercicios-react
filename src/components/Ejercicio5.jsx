import { useState, useEffect } from 'react';

const Ejercicio5 = () => {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const handleInputChange = (e) => {
    setTask(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && task.trim()) {
      setTasks([...tasks, task]);
      setTask('');
    }
  };

  const handleDeleteTask = (taskToDelete) => {
    setTasks(tasks.filter(task => task !== taskToDelete));
  };

  return (
    <section>
      <h1>Lista de Tareas</h1>
      <input
        type="text"
        value={task}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
        placeholder="Ingresa una tarea y presiona Enter"
      />
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task}
            <button onClick={() => handleDeleteTask(task)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Ejercicio5;
