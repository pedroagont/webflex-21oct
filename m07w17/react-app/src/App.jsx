import { useState } from "react";
import "./App.css";

function Header({ title, description }) {
  return (
    <header>
      <h1>{title}</h1>
      <p>{description}</p>
    </header>
  );
}

function Main({state, incrementCounter}) {
  if(state.loading){
    return <h1>Loading...</h1>
  }

  return (
    <main>
      <section>
        <h2>My counter: {state.counter}</h2>
        <button onClick={incrementCounter}>Increment</button>
      </section>
      <section>
        <h2>My favorite pokemon!</h2>
        {state.pokemonList.map(pokemon => <article key={pokemon}>{pokemon}</article>)}
      </section>
    </main>
  );
}

function App() {
    // bad
  // let counter = 0;
  // let pokemonList = ['pikachu', 'charizard']

  // good
  // const [counter, setCounter] = useState(0);
  // const [pokemonList, setPokemonList] = useState(['pikachu', 'charizard'])
  // const [loading, setLoading] = useState(false)

  // better
  const [state, setState] = useState({
    counter: 0,
    pokemonList: [],
    loading: false
  })

  const incrementCounter = () => {
    console.log("hello from click!");

    setState(prev => ({ ...prev, loading: true }))

    setTimeout(() => {
      setState(prev => ({
        ...prev,
        counter: prev.counter + 1,
        pokemonList: [...prev.pokemonList, 'pikachu'],
        loading: false,
      }))
    }, 2000)

  };
  return (
    <>
      <Header
        title="Hello from app! 👽"
        description="Omg this lecture is amazing! 😱"
      />
      <Main state={state} incrementCounter={incrementCounter}/>
    </>
  );
}

export default App;
