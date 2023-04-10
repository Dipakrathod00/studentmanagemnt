import React, { useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { AddDepartment, DeleteDepartment } from "../store/slice";

const validationSchema = Yup.object().shape({
  name: Yup.string().required("First name is required"),
});

const Department = () => {
  const [departmentId, setDepartmentId] = useState(1);
  const dispatch = useDispatch();

  const { department } = useSelector((state) => state.counter);
  const handleDelete = (id) => {
    let data = department.filter((item) => {
      return item.id != id;
    });
    dispatch(DeleteDepartment(data));
  };
  return (
    <div className="container">
      <button
        type="button"
        class="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Add department
      </button>

      {/* <!-- Modal --> */}
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              {/* <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button> */}
              <div className="row">
                <div className="col-sm-12">
                  <Formik
                    initialValues={{
                      name: "",
                    }}
                    validationSchema={validationSchema}
                    onSubmit={(values) => {
                      console.log(values);
                      dispatch(AddDepartment({ ...values, id: departmentId }));
                      setDepartmentId((pre) => pre + 1);
                    }}
                  >
                    {({
                      isSubmitting,
                      errors,
                      touched,
                      values,
                      handleChange,
                      handleReset,
                      handleSubmit,
                    }) => (
                      <Form>
                        <div>
                          <label htmlFor="name">Department Name</label>
                          <input
                            className="form-control mb-3 "
                            type="text"
                            name="name"
                            onChange={handleChange}
                            value={values.name}
                          />
                          {errors.name && touched.name ? (
                            <div className="text-danger">{errors.name}</div>
                          ) : null}
                        </div>
                        <button
                          type="button"
                          class="btn btn-secondary "
                          data-bs-dismiss="modal"
                        >
                          Close
                        </button>
                        <button type="submit" class="btn btn-primary ms-3">
                          Save changes
                        </button>
                      </Form>
                    )}
                  </Formik>
                </div>
              </div>
            </div>
            <div class="modal-body">...</div>
            <div class="modal-footer"></div>
          </div>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-sm-12">
          {department?.length > 0 ? (
            <table class="table table-dark table-striped table-hover">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">name</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {department?.map((item, index) => {
                  return (
                    <tr key={index}>
                      <th scope="row">{index + 1}</th>
                      <td>{item.name}</td>
                      <td>
                        <button
                          type="button"
                          className="btn btn-danger ms-2"
                          onClick={() => handleDelete(item.id)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          ) : (
            <h1>No Data Found</h1>
          )}
        </div>
      </div>
    </div>
  );
};

export default Department;
