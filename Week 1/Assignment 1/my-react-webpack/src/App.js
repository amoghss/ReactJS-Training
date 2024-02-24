import React, { useState } from 'react';

function App() {
  const [userName, setUserName] = useState('');
  const [userList, setUserList] = useState([]);

  const handleAddUser = () => {
    setUserList([...userList, userName]);
    setUserName('');
  };

  return (
    <div>
      <h1>Hello World</h1>
      <input type="text" value={userName} onChange={(e) => setUserName(e.target.value)} />
      <button onClick={handleAddUser}>Add</button>
      <div>
        <h2>User List</h2>
        <ul>
          {userList.map((user, index) => (
            <li key={index}>{user}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
