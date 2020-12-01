import React, { useState } from "react";
import {withRouter} from 'react-router-dom';
import axios from 'axios';

const CreateEmployee = ({history}) => {
  const [employee, setEmployee] = useState({
    emp_name: "",
    emp_email: "",
    emp_designation: "",
    emp_location: "",
    emp_address: "",
  });

  let handleChange = (e) => {
    setEmployee({ ...employee, [e.target.name]: e.target.value });
  };

  let handleSubmit = e => {
      e.preventDefault();
      try {
          axios.post("http://localhost:5000/employees" , employee).then(_ => {
             history.push('/all-emp')
          }).catch();
          
      } catch (err) {
          console.log(err);
          
      }
  }

  let {
    emp_name,
    emp_email,
    emp_designation,
    emp_location,
    emp_address,
  } = employee;

  return (
    <div>
      <section className="card">
        <article className="card-body">
          <h3 className="display-6 font-weight-bold text-uppercase text-success border-bottom pb-2 mb-2">
            Create Employee
          </h3>
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-md-3">
                <label htmlFor="emp_name">Emp name</label>
                <input
                  type="text"
                  className="form-control"
                  name="emp_name"
                  value={emp_name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-md-3">
                <label htmlFor="emp_email">Emp email</label>
                <input
                  type="email"
                  className="form-control"
                  name="emp_email"
                  value={emp_email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-md-3">
                <label htmlFor="emp_designation">Emp Designation</label>
                <input
                  type="text"
                  className="form-control"
                  name="emp_designation"
                  value={emp_designation}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-md-3">
                <label htmlFor="emp_location">Emp Location</label>
                <input
                  type="text"
                  className="form-control"
                  name="emp_location"
                  value={emp_location}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-md-12">
                <label htmlFor="emp_address">Emp Address</label>
                <textarea
                  name="emp_address"
                  id="emp_address"
                  cols="30"
                  rows="10"
                  value={emp_address}
                  onChange={handleChange}
                  className="form-control"
                ></textarea>
              </div>
              <div className="col-md-3">
                <button className="btn btn-success my-2">
                  Create Employee
                </button>
              </div>
            </div>
          </form>
        </article>
      </section>
    </div>
  );
};

export default withRouter(CreateEmployee);
