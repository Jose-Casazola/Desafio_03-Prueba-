import React, { useEffect, useState } from 'react';
import './UserList.css';

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {

    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await fetch('https://67281958270bd0b975545a57.mockapi.io/users');
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.error('Error en la solicitud:', error);
    }
  };

  const deleteUser = async (id) => {
    try {
      const response = await fetch(`https://67281958270bd0b975545a57.mockapi.io/users/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        setUsers(users.filter(user => user.id !== id));
      } else {
        console.error('Error al eliminar el usuario');
      }
    } catch (error) {
      console.error('Error en la solicitud:', error);
    }
  };

  return (
    <div>
      <h1 className='Lista_de_Usuarios'>Lista de Usuarios</h1>
      <div className="user-list">
        {users.map((user) => (
          <div key={user.id} className="user-item">
            <span className="user-name">{user.name}</span>
            <span className="user-email">{user.email}</span>
            {/* Botón de eliminar */}
            <button 
              className="delete-button" 
              onClick={() => deleteUser(user.id)}>
              Eliminar
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserList;