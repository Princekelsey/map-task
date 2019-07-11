import React from "react";

const Form = ({ handleChange, handleSubmit, address, getTasks }) => {
  return (
    <div className=" sidebar ">
      <div className=" container pt-5 mx-5">
        <div className="row auto pt-5">
          <div className="col-md-18  pt-5 text-white">
            <h1 className="display-4 text-center">Enter Address</h1>

            <form onSubmit={handleSubmit}>
              <div className="form-group ">
                <input
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="Address"
                  name="name"
                  value={address}
                  onChange={handleChange}
                />
              </div>

              <input
                type="submit"
                className="btn btn-info btn-block bt-lg mt-4"
              />
            </form>
          </div>
        </div>
      </div>
      <div className="text-center pt-4">
        <button onClick={getTasks} className="mt-3 btn btn-lg btn-primary">
          Get all tasks
        </button>
      </div>
    </div>
  );
};

export default Form;
