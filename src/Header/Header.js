function Header (props) {
    return (
        <header>
            <h1>{props.data.site_name}</h1>
            <h2>{props.second_header}</h2>
            <Nav></Nav>
        </header>
    )
}

function Nav () {
    return (
        <nav>
            <ul>
                <li>one</li>
                <li>two</li>
                <li>three</li>
            </ul>
        </nav>
    )
}

export default Header;