
import './App.css';
import Header from './components/header/Header'
import Button from './components/button/Button'

function App() {
  return (
    <div>
      <Header />
      <Button text={'OK'}/>
      <Button text={'Отмена'}/>
    </div>
  );
  }

export default App;