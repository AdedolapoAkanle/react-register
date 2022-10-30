import { connect } from "react-redux";
import { BioDataAction } from "../../actions";
import { api } from "../../api/api";
import { Link } from "react-router-dom";
import "./menu.css";
import React from "react";

const registerMenu = ({ state, dispatchBioData }) => {
  const { arr, searchType } = state;

  // useEffect(() => {
  //   searchData();
  // }, []);
  const searchData = async (search = "") => {
    const data = {
      search,
      searchType,
    };
    // console.log(data);

    const list = [];
    const res = await api("menu.php", data);

    for (const i of res) {
      list.push({
        id: i.id,
        name: i.name,
        age: i.age,
        address: i.address,
        gender: i.gender,
        email: i.email,
      });
    }

    dispatchBioData({ ...state, arr: list });
    // console.log(res);
    // dispatchBioData("");
  };

  const eraseData = async (id) => {
    const data = {
      id,
    };
    // console.log(i);

    const res = await api("delete.php", data);
    console.log(res);
    searchData();
  };

  return (
    <div className="container">
      <div className="circle1"></div>
      <div className="circle2"></div>
      <div className="circle3"></div>
      <div className="circle4"></div>
      <div className="blur">
        <div className="main">
          <div className="filter">
            <select
              className="drop"
              name="search"
              onChange={(e) =>
                dispatchBioData({ ...state, searchType: e.target.value })
              }
            >
              <option value="" hidden className="value">
                Select...
              </option>
              <option value="name" className="value">
                Name
              </option>
              <option value="age" className="value">
                Age
              </option>
              <option value="gender" className="value">
                Gender
              </option>
              <option value="email" className="value">
                Email
              </option>
            </select>
            <input
              className="input"
              type="text"
              placeholder="Search..."
              onChange={(e) => {
                searchData(e.target.value);
              }}
            />
          </div>
          <div className="table">
            <table>
              <thead>
                <tr>
                  <th>Names</th>
                  <th>Age</th>
                  <th>Gender</th>
                  <th>Email</th>
                  <th>Address</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>
                {arr.map((usr, i) => (
                  <tr key={usr.id}>
                    <td>
                      <Link className="link" to={`/update/${usr.id}`}>
                        {usr.name}
                      </Link>
                    </td>
                    <td>{usr.age}</td>
                    <td>{usr.gender}</td>
                    <td>{usr.email}</td>
                    <td>{usr.address}</td>
                    <td>
                      <button className="btn" onClick={() => eraseData(usr.id)}>
                        del
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

// gives access to default values in states

const mapStateToProps = ({ form }) => ({
  state: form.bioDataState,
});

// gives access to be able to update states

const mapDispatchToProps = (dispatch) => ({
  dispatchBioData: (params) => dispatch(BioDataAction(params)),
});

// connect helps to link the app component or file to the state

export default connect(mapStateToProps, mapDispatchToProps)(registerMenu);
