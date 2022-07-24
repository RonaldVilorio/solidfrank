// import logo from './logo.svg';
import styles from './App.module.css';
import { createSignal, createResource } from "solid-js";
const fetchUser = async (id) =>{
  return (await fetch(`https://swapi.dev/api/people/${id}/`)).json()
};

  const App = () => {
    const [userId, setUserId] = createSignal();
    const [user] = createResource(userId, fetchUser);
  
    return (
      <>
      <p class="text-4xl text-red-400 tracking-widest"></p>
        <input
          type="number"
          min="1"
          placeholder="Enter Numeric Id"
          onInput={(e) => setUserId(e.currentTarget.value)}
        />
        <span>{user.loading && "Loading..."}</span>
        <div>
          <pre>{JSON.stringify(user(), null, 2)}</pre>
        </div>
      </>
    );
  };

export default App;
