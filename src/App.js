import { connect } from "react-redux";
import { BioDataAction } from "./actions";

const App = ({state, dispatchBioData}) => {
// console.log(bioData)

  const {firstName, lastName, age, address, gender} = state;

  const clearState = () => {
    dispatchBioData("");
    
  }

  return (
    <div className="App">
     <div className="container">
     <form action="" className="form" >
      <h1 className="header">Registration</h1>
     <label htmlFor="first-name" className="label">FirstName: {firstName}</label>
     <input type="text"  className="field" onChange={(e) => dispatchBioData({...state, firstName: e.target.value})} />
     <label htmlFor="last-name" className="label">LastName: {lastName}</label>
     <input type="text" className="field" onChange={(e) => dispatchBioData({...state, lastName: e.target.value})}/>
     <label htmlFor="Address" className="label">Address: {address}</label>
     <input type="text" className="field" onChange={(e) => dispatchBioData({...state, address: e.target.value})}/>
     <label htmlFor="Age" className="label">Age:{age}</label>
     <input type="text" className="field" onChange={(e) => dispatchBioData({...state, age: e.target.value})}/>
     <label htmlFor="gender" className="label">Gender:{gender}</label>
     <select className="dropdown" onChange={(e) => dispatchBioData({...state, gender: e.target.value})}>
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
  state: form.bioDataState,
});

// gives access to be able to update states

const mapDispatchToProps = (dispatch) => ({
  dispatchBioData: (params) => dispatch(BioDataAction(params)),
  
})

// connect helps to link the app component or file to the state

export default connect(mapStateToProps, mapDispatchToProps)(App);
