import { connect } from "react-redux";
import { firstNameAction, lastNameAction } from "./actions";

const App = ({firstName, lastName, dispatchFirstName, dispatchLastName}) => {


  const clearState = () => {
    dispatchFirstName("");
    dispatchLastName("");
  }

  return (
    <div className="App">
     <div className="container">
      
     <form action="" className="form" >
      <h2 className="header">Register</h2>
     <label htmlFor="first-name" className="label">FirstName: {firstName}</label>
     <input type="text"  className="field" onChange={(e) => dispatchFirstName(e.target.value)} />
     <label htmlFor="last-name" className="label">LastName: {lastName}</label>
     <input type="text" className="field" onChange={(e) => dispatchLastName(e.target.value)}/>
     <label htmlFor="Address" className="label">Address:</label>
     <input type="text" className="field"/>
     <label htmlFor="Age" className="label">Age:</label>
     <input type="text" className="field" />
     <label htmlFor="gender" className="label">Gender:</label>
     <select className="dropdown">
     <option value="male" className="value">Male</option>
     <option value="female" className="value">Female</option>
     </select>
     <button className="button" onClick={clearState}>submit</button>
     
     </form>
     </div>
    </div>
  );
}

// gives access to default values in states

const mapStateToProps = ({ form }) => ({
  firstName: form.firstName,
  lastName: form.lastName
});

// gives access to be able to update states

const mapDispatchToProps = (dispatch) => ({
  dispatchFirstName: (params) => dispatch(firstNameAction(params)),
  dispatchLastName: (params) => dispatch(lastNameAction(params)),
})

// connect helps to link the app component or file to the state

export default connect(mapStateToProps, mapDispatchToProps)(App);
