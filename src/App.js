
import './App.css';
// import Test from './Test';
// import Test2 from './Test2';
import Header from './Header/Header';
import About from './Routing/about';
import Users from './Routing/Users';
// import Goods1 from './Goods1';
// import Mainsection from './Bod/Mainsection';
import Notes from './notes/notes'
import './Css/Style.css';



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

const names = [
  {"name": "Вася", "hair":"blond", "proffession":"model"},
  {"name": "Катя", "hair":"brown - haired", "proffession":"designer"},
]

function App() {
  return (
  <>
  {/* <Header data={headerData} ></Header>
<Test></Test>
<Test2></Test2>
{goods.map(item=><Goods1 title={item.title} cost={item.cost} image={item.image} />)} */}

{/* {names.map(item=><Mainsection names={item.name} hair={item.hair} proffession={item.proffession}></Mainsection>)} */}
  <Header></Header>
  <Router>
    <Swith>
      
    </Swith>
  </Router>
  </>
  );
}

export default App;
