import "./update.css";
import { api } from "../../api/api";

const Update = (state, dispatchBioData) => {
  const { id } = state;
  const updateBioData = async () => {
    const data = {
      id,
    };

    const res = await api("update.php", data);
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
          <input
            type="text"
            className="field"
            onChange={(e) => {
              updateBioData({ ...state, id: e.target.value });
            }}
          />
          <input
            type="text"
            className="field"
            onChange={(e) => {
              updateBioData({ ...state, id: e.target.value });
            }}
          />
          <input
            type="text"
            className="field"
            onChange={(e) => {
              updateBioData({ ...state, id: e.target.value });
            }}
          />
          <input
            type="text"
            className="field"
            onChange={(e) => {
              updateBioData({ ...state, id: e.target.value });
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Update;
