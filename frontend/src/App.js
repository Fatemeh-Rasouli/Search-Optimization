import { useEffect, useState } from 'react';
import axios from 'axios';
import './index.css';
import { Users } from './users';
import Table from './Table';

function App() {
  const [query, setQuery] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await axios.get(`http://localhost:5000?q=${query}`);
        setData(res.data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };
    fetchUsers();
  }, [query]);

  return (
    <div className="app">
      <input
        type="text"
        placeholder="جست و جو..."
        className="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <Table data={data} />
    </div>
  );
}

export default App;
