import './App.css';
import ButtonText from './components/ui/btn_text/ButtonText';
import Input from './components/ui/input/Input';
import { faKey, faEnvelope, faEye } from '@fortawesome/free-solid-svg-icons';
import TextNavigation from './components/ui/text_navigation/TextNavigation';
import ButtonIcon from './components/ui/btn_enterprises/ButtonIcon';
import { faApple, faGoogle, faWindows } from '@fortawesome/free-brands-svg-icons';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <Input
          leftIcon={faEnvelope}
          type='email'
          name={"Email"}
        />
        <Input
          leftIcon={faKey}
          rightIcon={faEye}
          type='password'
          name={"Password"}
        /> */}
        {/* <ButtonText text={"ENTRAR"}/> */}
        {/* <TextNavigation text={"Esqueci minha senha"}/> */}
          {/* <ButtonIcon icon={faWindows}/>
          <ButtonIcon icon={faApple}/>
          <ButtonIcon icon={faGoogle}/> */}
      </header>
    </div>
  );
}

export default App;
