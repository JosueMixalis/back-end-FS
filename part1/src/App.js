import './App.css';

import Mensaje from './Mensaje';

const Description = () => {
  return <p>
    Es es la app del curso fulll
  </p>
}

const App = () => {

  return (
    <div className="App">
      <Mensaje color='yellow' message ='Estamo trabajndo'/>
      <Mensaje color='red' message ='siiii'/>
      <Mensaje color='green' message ='Mucho'/>
      <Description />
    </div>
  );
}
export default App;
