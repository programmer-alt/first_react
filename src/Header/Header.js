// function Header (props) {
//     return (
//         <header>
//             <h1>{props.data.site_name}</h1>
//             <h2>{props.second_header}</h2>
//             <Nav nav={props.data.nav}></Nav>
//         </header>
//     )
// }

// function Nav (props) {
//     let data = props.nav;
//     const listItem = data.map(item=> <li key={item.link}><a href={item.link}>{item.text}</a></li> )
//     return (
//         <nav>
//             <ul>
//                 {listItem}
//             </ul>
//         </nav>
//     )
// }
function Header () {
   return ( <nav>
        <li> <a href="/">Main</a></li>
        <li> <a href="/About">About</a></li>
        <li> <a href="/Users">Users</a></li>
    </nav>
   )
}

export default Header;