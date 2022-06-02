import './App.css';
import Header from './components/header/Header'
import Counter from './components/counter/Counter';
import Button from './components/button/Button'

function App() {
  return (
    <div>
      <Header />
      <Counter text={'Пока!'}/>
      
      <Button text={'OK'}/>
      <Button text={'Отмена'}/>
    </div>
  );
  }

export default App;