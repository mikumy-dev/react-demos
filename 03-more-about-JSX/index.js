// create an element with JS
const h1 = document.createElement('h1')
h1.textContent = 'Hello World'
h1.className = 'header'
console.log(h1)

// create an element with JSX
const h1_jsx = <h1 className='header'>This is a JSX</h1>
console.log(h1_jsx)

// return a js object, if append it directly to dom, you can only get the [object Object]
// document.getElementById('root').append(h1_jsx)

// return a js object
const page = (
    <div>
        <nav className="navbar">
            <ul>
                <li className="nav-li">Home</li>
                <li className="nav-li">Type1</li>
                <li className="nav-li">Type2</li>
                <li className="nav-li">Type3</li>
            </ul>
        </nav>
        <h1 className='header'>This is a JSX</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Dolorum modi autem doloribus veritatis iure labore deleniti mollitia corrupti libero, 
            inventore dicta pariatur. Ab, error voluptate animi dicta sapiente incidunt provident.</p>
    </div>
)

ReactDOM.render(
    page, // can only render one element, no matter how many child elements in it
    document.getElementById('root')
)