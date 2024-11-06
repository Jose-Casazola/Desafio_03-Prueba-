// En el componente principal
import './App.css'

import React, { useState } from 'react';
import UserForm from './UserForm';
import UserList from './UserList';

const App = () => {
const [users, setUsers] = useState([]);

const addUser = async(newUser) => {
// Agregar nuevo usuario al estado
try {
const response = await fetch('https://67281958270bd0b975545a57.mockapi.io/users', {
method: 'POST',
headers: {
'Content-Type': 'application/json',
},
body: JSON.stringify(newUser),
});
if (response.ok) {
// Obtener la respuesta y agregar usuario al estado
const data = await response.json();
setUsers([...users, data]);
} else {
console.error('Error al agregar usuario');
}} catch (error) {
console.error('Error en la solicitud: ', error);
}
};

return (
<div>
<h1 className='Titulo' >Lista de Usuarios</h1>
<UserForm addUser={addUser} />


{/* Mostrar lista de usuarios */}

<ul>
{users.map((user, index) => (
<li key={index}>{user.name} - {user.email}</li>
))}
</ul>

<UserList/>

</div>
);
};

export default App;