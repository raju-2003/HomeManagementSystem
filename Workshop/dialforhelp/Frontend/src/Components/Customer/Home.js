import React from 'react'
//signup and login
import { Link } from 'react-router-dom';


function Home() {
  return (
    <div>
      <h1>Home management system</h1>
     <Link to="/custlogin"><button>Login</button></Link>
    <Link to="/custsignup"><button>Signup</button></Link>
    </div>
  )
}

export default Home
