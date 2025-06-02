
import React, { useState } from 'react';

function App() {
  const [username, setUsername] = useState('');
  const [repos, setRepos] = useState([]);

  const fetchRepos = async () => {
    const response = await fetch(`http://localhost:8000/repos/${username}`);
    const data = await response.json();
    setRepos(data);
  };

  return (
    <div className="App" style={{ padding: '20px' }}>
      <h1>CommitRadar</h1>
      <input
        type="text"
        placeholder="Enter GitHub username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button onClick={fetchRepos}>Fetch Repos</button>
      <ul>
        {repos && repos.length > 0 ? (
          repos.map((repo) => <li key={repo.id}>{repo.name}</li>)
        ) : (
          <p>No repositories found</p>
        )}
      </ul>
    </div>
  );
}

export default App;
