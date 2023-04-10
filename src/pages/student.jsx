import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  phone: Yup.string().required("phone is required"),
  gender: Yup.string().required("gender is required"),
  department: Yup.string().required("department is required"),
});

const Student = () => {
  return (
    <div className="container">
      <button
        type="button"
        class="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Add student
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
                <div>
                  <h1>Student Section</h1>
                  <Formik
                    initialValues={{
                      name: "",
                      email: "",
                      phone: "",
                      gender: "",
                      department: "",
                    }}
                    validationSchema={validationSchema}
                    onSubmit={(values, { setSubmitting }) => {
                      setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                      }, 400);
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
                          <label htmlFor="name">First Name</label>
                          <input
                            className="form-control"
                            type="text"
                            name="name"
                          />
                          {errors.name && touched.name ? (
                            <div className="text-danger">{errors.name}</div>
                          ) : null}
                        </div>
                        <div>
                          <label htmlFor="email">Email</label>
                          <input
                            className="form-control"
                            type="email"
                            name="email"
                          />
                          {errors.email && touched.email ? (
                            <div className="text-danger">{errors.email}</div>
                          ) : null}
                        </div>
                        <div>
                          <label htmlFor="phone">Phone No.</label>
                          <input
                            className="form-control"
                            type="phone"
                            name="phone"
                          />
                          {errors.phone && touched.phone ? (
                            <div className="text-danger">{errors.phone}</div>
                          ) : null}
                        </div>
                        <div>
                          <label htmlFor="fees">Fees paid</label>
                          <input
                            className="form-control"
                            type="fees"
                            name="fees"
                          />
                          {errors.fees && touched.fees ? (
                            <div className="text-danger">{errors.fees}</div>
                          ) : null}
                        </div>
                        <div>
                          <label htmlFor="gender">Gender</label>
                          <input
                            className="form-control"
                            type="gender"
                            name="gender"
                          />
                          {errors.gender && touched.gender ? (
                            <div className="text-danger">{errors.gender}</div>
                          ) : null}
                        </div>
                        <div>
                          <label htmlFor="department">Department</label>
                          <input
                            className="form-control"
                            type="department"
                            name="department"
                          />
                          {errors.department && touched.department ? (
                            <div className="text-danger">
                              {errors.department}
                            </div>
                          ) : null}
                        </div>
                        <button
                          type="button"
                          class="btn btn-secondary"
                          data-bs-dismiss="modal"
                        >
                          Close
                        </button>
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          class="btn btn-primary"
                        >
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
    </div>
  );
};

export default Student;
