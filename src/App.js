
import './App.css';
import Test from './Test'
import Test2 from './Test2'
import Header from './Header/Header'

const headerData = {
  site_name: 'my test site name'
}

function App() {
  return (
  <>
  <Header data={headerData} ></Header>
<Test></Test>
<Test2></Test2>
  </>
  );
}

export default App;
