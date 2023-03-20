import React from "react";

const AddUser = () => {
  return (
    <div>
      <div className="column is-half">
        <form>
          <div className="field">
            <lable className="label">Name</lable>
            <div className="control">
              <input
                type="text"
                name="name"
                className="input"
                placeholder="Name"
              />
            </div>
          </div>

          <div className="field">
            <lable className="label">Email</lable>
            <div className="control">
              <input
                type="text"
                name="email"
                className="input"
                placeholder="Email"
              />
            </div>
          </div>

          <div className="field">
            <lable className="label">Phone Number</lable>
            <div className="control">
              <input
                type="text"
                name="phone number"
                className="input"
                placeholder="Phone Number"
              />
            </div>
          </div>

          <div className="field">
            <lable className="label">Gender</lable>
            <div className="control">
              <div className="select is-fullwidth">
                <select name="gender">
                  <option value="Female">Female</option>
                  <option value="Male">Male</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>
          </div>

          <div className="field">
            <div className="control">
              <button className="button is-success">Save</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddUser;
