import logo from './logo.svg';
import './App.css';

function App() {
  
  let posts="comme"
  let color= {color:'red'}

  function num() {
    return 100;
  }
  
  return (
    <div className="App">
      <div className ="black-nav">
        <div>react 개발</div>
      </div>
      <img src={logo }/>
        <h1>{num()}</h1>
        <h4 style = { color }> {posts} </h4>
    </div>
  );
}

export default App;
