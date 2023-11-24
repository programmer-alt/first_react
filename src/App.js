
import './App.css';
import Test from './Test';
import Test2 from './Test2';
import Header from './Header/Header';
import Goods1 from './Goods1';

const headerData = {
  site_name: 'my test site name',
  nav: [
    {"link":"nav1", "text":"my link"},
    {"link":"nav2", "text":"my link2"},
    {"link":"nav3", "text":"my link3"},
  ]
}

const goods = [
  {"title":"apple", "cost":330, "image":"https://cdn3.iconfinder.com/data/icons/education-209/64/apple-fruit-science-school-512.png"},
  {"title":"pear", "cost":550, "image":"https://cdn3.iconfinder.com/data/icons/fruits-52/150/icon_fruit_pera-512.png"},
]

function App() {
  return (
  <>
  <Header data={headerData} ></Header>
<Test></Test>
<Test2></Test2>
{goods.map(item=><Goods1 title={item.title} cost={item.cost} image={item.image} />)}
  </>
  );
}

export default App;
