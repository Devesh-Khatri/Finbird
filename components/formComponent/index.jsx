import React from "react";
import styles from "./formComponent.module.scss";

const FormComponent = () => {
  return (
    <div className={styles.form_wrapper}>
      <div className={styles.form_container}>
        <h2 className="sub-heading text-align-center">
          Become A Carbon Developer
        </h2>
        <form className={styles.inputForm_Container}>
          <div className="form-row">
            <div className="form-control">
              <label for="fname" className="input-label">
                Name:
              </label>
              <br />
              <input
                placeholder="Enter Name"
                className="input-box"
                type="text"
                id="fname"
                name="fname"
                value=""
              />
            </div>
            <div className="form-control">
              <label for="fname" className="input-label">
                Organization:
              </label>
              <br />
              <input
                className="input-box"
                placeholder="Enter Organisation Trade"
                type="text"
                id="fname"
                name="fname"
                value=""
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-control">
              <label for="fname" className="input-label">
                Email:
              </label>
              <br />
              <input
                placeholder="Enter Email"
                className="input-box"
                type="text"
                id="fname"
                name="fname"
                value=""
              />
            </div>
            <div className="form-control">
              <label for="fname" className="input-label">
                Project Name:
              </label>
              <br />
              <input
                placeholder="Enter Project Name"
                className="input-box"
                type="text"
                id="fname"
                name="fname"
                value=""
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-control">
              <label for="fname" className="input-label">
                Project Location:
              </label>
              <br />
              <input
                placeholder="Enter Project Location (Country, State, City)"
                className="input-box"
                type="text"
                id="fname"
                name="fname"
                value=""
              />
            </div>
            <div className="form-control">
              <label for="fname" className="input-label">
                Project Type:
              </label>
              <br />
              <select
                name="cars"
                id="cars"
                className="input-box"
                placeholder="Select Project Type"
              >
                <option value="volvo" disabled>
                  Type 1
                </option>
                <option value="saab">Type 2</option>
                <option value="mercedes">Type 3</option>
                <option value="audi">Typ3 4</option>
              </select>
            </div>
          </div>
          <div className="form-row">
            <div className="form-control">
              <label for="fname" className="input-label">
                Project Status:
              </label>
              <br />
              <select name="cars" id="cars" className="input-box">
                <option value="volvo">Status 1</option>
                <option value="saab">Status 2</option>
                <option value="mercedes">Status 3</option>
                <option value="audi">Status 4</option>
              </select>
            </div>
            <div className="form-control">
              <label for="fname" className="input-label">
                Is the project funded?
              </label>
              <br />
            </div>
          </div>
          <submit className="submit-button">Submit</submit>
        </form>
      </div>
    </div>
  );
};

export default FormComponent;
