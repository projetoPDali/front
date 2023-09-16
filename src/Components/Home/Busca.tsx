// UserComponent.tsx
import React, { useState } from 'react';
import { GetUserById } from '../../api/getUserById';

function Busca() {
  const [userId, setUserId] = useState<number | null>(null);
  const [userData, setUserData] = useState<any | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleUserIdChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const id = parseInt(event.target.value, 10);
    setUserId(id);
  };

  const fetchUserData = async () => {
    try {
      const data = await GetUserById(userId!);
      setUserData(data);
      setError(null);
    } catch (err) {
      setUserData(null);
      setError('Usuário não encontrado.');
    }
  };

  return (
    <div>
      <h1>Buscar Usuário por ID</h1>
      <input
        type="number"
        placeholder="Digite o ID do usuário"
        onChange={handleUserIdChange}
      />
      <button onClick={fetchUserData}>Buscar</button>
      {userData && (
        <div>
          <h2>Detalhes do Usuário</h2>
          <p>ID: {userData.id}</p>
          <p>Nome: {userData.alias}</p>

        </div>
      )}
      {error && <p>{error}</p>}
    </div>
  );
}

export default Busca;
