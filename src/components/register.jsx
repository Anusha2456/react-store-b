import { useState } from "react";
import { Link } from "react-router-dom";
export default function Register() {
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState({});
  const handleSubmit = () => {
    setProducts([...products, product]);
  };
  return (
    <div className="App-Row">
      <div>
      <h2>Registration Form</h2>
      <p><input type="text" placeholder='Enter name' 
      onChange={(e) => setProduct({ ...product, name: e.target.value })}></input></p>
      <p><input type="text" placeholder='Email address' 
      onChange={(e) => setProduct({ ...product, price: e.target.value })}></input></p>
      <p><input type="password" placeholder='New password'
       onChange={(e) => setProduct({ ...product, quantity: e.target.value })}></input></p>
      
      <p><button onClick={handleSubmit}>Submit</button>
      </p>
      <p>
        <Link to="../login">Already a member? Log In</Link>
      </p>
      </div>
      <div>
        <h4>Details</h4>
        <table border="1">
          {products &&
            products.map((value, index) => (
              <tr>
                <td>{value.name}</td>
                <td>{value.price}</td>
                <td>{value.quantity}</td>
              </tr>
            ))}
        </table>
      </div> 
    </div>
  )
}