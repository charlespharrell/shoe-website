import './App.css';
import Home from './component/Home/Home';
import Cart from './component/Cart/Cart';
import SignUp from './component/SignUp/SignUp';
import NavBar from './component/NavBar/NavBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import data from './Data/data'
import { useState } from 'react';
import {} from 'react-icons/ai'
import {GiHamburgerMenu} from 'react-icons/gi'
import {AiOutlineClose} from 'react-icons/ai'


function App() {
  const [ProductItems, setProductItems] =useState(data)
  const [input, setinput]= useState('')
  console.log(input)
  const[isclicked, setisClicked]=useState(false)
  const[menu, setmenu]=useState(<GiHamburgerMenu className='ham'/>)
  const [sidebarcontainer, setsidebarcontainer]= useState('sidebar-container')

  const selected = [...new Set(data.map((ProductItem)=>ProductItem.company))]

  const selected2 = [...new Set(data.map((ProductItem)=>ProductItem.category))]

  const selected3 = [...new Set(data.map((ProductItem)=>ProductItem.color))]

  const selected4 = [...new Set(data.map((ProductItem)=>ProductItem.newPrice))]

  const filterItems = (company)=>{
    const newItems =data.filter((newval)=> newval.company === company)
    setProductItems(newItems)
  }

  const filterItems2 = (category)=>{
    const newItems =data.filter((newval)=> newval.category === category)
    setProductItems(newItems)
    // setsidebarcontainer('setsidebar-container')
  }

  const filterItems3 = (color)=>{
    const newItems =data.filter((newval)=> newval.color === color)
    setProductItems(newItems)
  }

  const filterItems4 = (price)=>{
    const newItems =data.filter((newval)=> newval.newPrice === price)
    setProductItems(newItems)
  }

  const [cartItems, setCartItems] = useState([])
  const [loginForm, setloginForm]= useState('loginForm')
  const [signupForm, setsignupForm]= useState('signupForm')
  const [indicator, setindicator]= useState('indicator')

  const handleAddProduct=(product)=>{
    const ProductExist = cartItems.find((item)=>item.id === product.id);
    if(ProductExist){
      setCartItems(cartItems.map((item)=>item.id === product.id ?
      {...ProductExist, quantity:ProductExist.quantity +1}: item))
    }
    else{
      setCartItems([...cartItems, {...product, quantity: 1}])
    }

  }
  const handleRemove=(product)=>{
    const ProductExist = cartItems.find((item)=>item.id === product.id);
    if(ProductExist.quantity === 1){
      setCartItems(cartItems.filter((item)=>item.id !==product.id))
    }
    else{
      setCartItems(
        cartItems.map((item)=>
          item.id === product.id
          ?
          {...ProductExist, quantity: ProductExist.quantity -1}:item
        )
      )
    }   
  }
  const handleCartClearance =()=>{
    setCartItems([])
  }
  const handleCheckout=()=>{}

  const handleSignup=()=>{
    if(handleSignup){
      setsignupForm('signupForm')
      setloginForm('loginForm')
      setindicator('indicator')
    }
  }

  const handleLogin=()=>{
    if(handleLogin){
      setsignupForm('signupForm active')
      setloginForm('loginForm active')
      setindicator('indicator active')
    }

  }
  const handleSidebar=()=>{
    setisClicked(!isclicked)
    if(!isclicked){
      setmenu(<AiOutlineClose className='ham'/>)
      setsidebarcontainer('sidebar-container active')
    }
    else{
      setmenu(<GiHamburgerMenu className='ham'/>)
      setsidebarcontainer('sidebar-container')
    }   
  }
  const FilterNames=e=>{
    const search= e.target.value.toLowerCase()
    const filteredNames= ProductItems.filter(ProductItem =>ProductItem.title.toLowerCase().includes(search))
    setProductItems(filteredNames)
    console.log(filteredNames)
  }
  return (
    <Router>
      <div className="App">
        <NavBar cartItems={cartItems} FilterNames={FilterNames} setinput={setinput}/>
        <Routes>   
          <Route exact path ='/' element=
              {<Home
                  ProductItems={ProductItems}
                  handleAddProduct={handleAddProduct}
                  selected={selected}
                  filterItems={filterItems}
                  setProductItems={setProductItems}
                  selected2={selected2}
                  filterItems2={filterItems2}
                  selected3={selected3}
                  filterItems3={filterItems3}
                  selected4={selected4}
                  filterItems4={filterItems4}
                  handleSidebar= {handleSidebar}
                  menu={menu}
                  sidebarcontainer={sidebarcontainer}
                  input={input}
                 />}/>      
          <Route
            path ='/signup'
             element={<SignUp
              handleSignup={handleSignup}
              handleLogin={handleLogin}
              loginForm={loginForm}
              signupForm={signupForm}
              indicator={indicator} />}/>
          <Route 
           path ='/cart' 
            element={<Cart cartItems={cartItems}
            handleAddProduct={handleAddProduct}
            handleRemove={handleRemove}
            handleCartClearance={handleCartClearance}
            handleCheckout={handleCheckout}
            
            />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
