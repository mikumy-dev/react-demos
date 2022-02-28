function Navbar() {
    return (
        <nav className="navbar">
            <ul>
                <li className="nav-li">Home</li>
                <li className="nav-li">Type1</li>
                <li className="nav-li">Type2</li>
                <li className="nav-li">Type3</li>
            </ul>
        </nav>
    )
}

function MainContext() {
    return (
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Dolorum modi autem doloribus veritatis iure labore deleniti mollitia corrupti libero, 
            inventore dicta pariatur. Ab, error voluptate animi dicta sapiente incidunt provident.</p>
    )
}

ReactDOM.render(
    <div>
        <Navbar />
        <MainContext />
    </div>,
    document.getElementById('root')
)