import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div>
        <h1>Customer Stuff</h1>
        <button>Add New Customer</button>
        <div>
          <input placeholder = "enter customer ID"/>
          <button>Get Customer Prescription Info</button>
          <button>Edit Customer Prescription Info</button>
          <button>Edit Customer Info</button>
        </div>
      </div>

      <div>
        <h1>Employee Stuff</h1>
        <button>Add New Employee</button>
        <div>
          <input placeholder = "enter Employee ID"/>
          <button>Edit Employee Info</button>
        </div>
      </div>
      
      <div>
        <h1>Random Stuff</h1>
        <button>Add New Supplier</button>
        <button>Make New Pharmacy Order</button>
      </div>
    </div>
  );
}

export default App;
