
import './App.css';
import Test from './Test'
import Test2 from './Test2'
import Header from './Header/Header'

const headerData = {
  site_name: 'my test site name',
  nav: [
    {"link":"nav1", "text":"my link"},
    {"link":"nav2", "text":"my link2"},
    {"link":"nav3", "text":"my link3"},
  ]
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
