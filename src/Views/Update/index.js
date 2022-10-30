import "./update.css";
import { api } from "../../api/api";
import { BioDataAction } from "../../actions";
import { connect } from "react-redux";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

const Update = ({ state, dispatchBioData }) => {
  const { name, age, address, gender, email } = state;

  const { id } = useParams();

  useEffect(() => {
    getUserById();
  });

  const getUserById = async () => {
    const data = {
      id: id,
    };

    const res = await api("update.php", data);
    // console.log(res);
    dispatchBioData({
      ...state,
      name: res.name,
      age: res.age,
      address: res.address,
      gender: res.gender,
      email: res.email,
    });

    // dispatchBioData("");
  };

  const updateBioData = async () => {
    const data = {
      name,
      email,
      address,
      age,
      gender,
    };
    console.log(data);

    const res = await api("index.php", data);
    console.log(res);
  };

  return (
    <div className="container">
      <div className="circle1"></div>
      <div className="circle2"></div>
      <div className="circle3"></div>
      <div className="circle4"></div>
      <div className="blur">
        <div className="form">
          <div className="title">Update</div>
          <>
            <input
              type="text"
              className="field"
              value={name}
              onChange={(e) => {
                dispatchBioData({ ...state, name: e.target.value });
              }}
            />
            <input
              type="text"
              className="field"
              value={email}
              onChange={(e) => {
                dispatchBioData({ ...state, email: e.target.value });
              }}
            />
            <input
              type="text"
              className="field"
              value={address}
              onChange={(e) => {
                dispatchBioData({ ...state, address: e.target.value });
              }}
            />
            <input
              type="text"
              className="field"
              value={age}
              onChange={(e) => {
                dispatchBioData({ ...state, age: e.target.value });
              }}
            />

            <input
              type="text"
              className="field"
              value={gender}
              onChange={(e) => {
                dispatchBioData({ ...state, gender: e.target.value });
              }}
            />
          </>

          <button className="button" onClick={updateBioData}>
            update
          </button>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = ({ form }) => ({
  state: form.bioDataState,
});

const mapDispatchToProps = (dispatch) => ({
  dispatchBioData: (params) => dispatch(BioDataAction(params)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Update);
