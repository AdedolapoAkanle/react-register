import "./menu.css";

const registerMenu = () => {
  return (
    <div className="container">
      <div className="circle1"></div>
      <div className="circle2"></div>
      <div className="circle3"></div>
      <div className="circle4"></div>
      <div className="blur">
        <div className="main">
          <div className="filter">
            <select className="drop">
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
          </div>

          <div className="table">
            <table>
              <thead>
                <tr>
                  <th>Names</th>
                  <th>Age</th>
                  <th>Gender</th>
                  <th>Email</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>James Smith</td>
                  <td>24</td>
                  <td>Male</td>
                  <td>remi@gmail.com</td>
                </tr>
              </tbody>

              <tbody>
                <tr>
                  <td>Mary Mark</td>
                  <td>65</td>
                  <td>Female</td>
                  <td>fem@gmail.com</td>
                </tr>
              </tbody>

              <tbody>
                <tr>
                  <td>Richard Miles</td>
                  <td>49</td>
                  <td>Female</td>
                  <td>girl@yahoo.com</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default registerMenu;
