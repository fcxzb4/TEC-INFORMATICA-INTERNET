import './App.css';
import LoginBtns from './components/models/login_btns/LoginBtns';
import LoginInputs from './components/models/login_inputs/LoginInputs';
import TextNavigation from './components/ui/text_navigation/TextNavigation';

function App() {
  return (
    <div className="App">
      <div className='Backgroud'></div>
      <div className='Text'>
        <h1>LOGIN</h1>
        <p>Reserve sua viagem dos sonhos hoje!</p>
      </div>
      <div>
        <LoginInputs />
        <LoginBtns />
      </div>
      <div className='CreateAcount'>
        <h6>Não tem uma conta?&nbsp;</h6>
        <TextNavigation text={"Clique aqui!"} />
      </div>
    </div>
  );
}

export default App;
