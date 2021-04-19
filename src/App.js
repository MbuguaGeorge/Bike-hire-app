import './App.css';
import '../src/component/home.css'
import '../src/component/signup.css'
import '../src/component/login.css'
import '../src/component/bike_rental.css'
import '../src/component/about.css'
import Main from './component/main.js'
import Header from './component/header'

function App() {
  return(
    <div>
      <Header />
      <Main />
    </div>
  );
}

export default App;
