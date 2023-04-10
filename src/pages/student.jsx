import React, { useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { Addstudent, DeleteStudent } from "../store/slice";

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  phone: Yup.string().required("phone is required"),
  gender: Yup.string().required("gender is required"),
  fees: Yup.string().required("fees is required"),
  //   department: Yup.string().required("department is required or add department"),
});

const Student = () => {
  const [studentId, setStudentId] = useState(1);
  const [departmentname, setDepartmentname] = useState("");
  const dispatch = useDispatch();
  const { student } = useSelector((state) => state.counter);
  const { department } = useSelector((state) => state.counter);
  const handleDelete = (id) => {
    let data = student.filter((item) => {
      return item.id != id;
    });
    dispatch(DeleteStudent(data));
  };
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
                    enableReinitialize
                    initialValues={{
                      name: "",
                      email: "",
                      phone: "",
                      gender: "",
                      //   department: "",
                    }}
                    validationSchema={validationSchema}
                    onSubmit={(values) => {
                      console.log(values);
                      dispatch(
                        Addstudent({
                          ...values,
                          id: studentId,
                          department: departmentname,
                        })
                      );
                      setStudentId((pre) => pre + 1);
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
                      setFieldValue,
                    }) => (
                      <Form>
                        {console.log(values, errors)}
                        <div>
                          <label htmlFor="name">First Name</label>
                          <input
                            className="form-control"
                            type="text"
                            name="name"
                            onChange={handleChange}
                            value={values.name}
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
                            value={values.email}
                            onChange={handleChange}
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
                            value={values.phone}
                            onChange={handleChange}
                          />
                          {errors.phone && touched.phone ? (
                            <div className="text-danger">{errors.phone}</div>
                          ) : null}
                        </div>
                        <div>
                          <label htmlFor="fees">Fees paid</label>
                          {/* <input
                            className="form-control"
                            type="fees"
                            name="fees"
                            value={values.fees}
                            onChange={handleChange}
                          /> */}
                          <select
                            onChange={handleChange}
                            value={values.fees}
                            name="fees"
                            className="form-control"
                          >
                            <option value="0" selected disabled>
                              choose fees
                            </option>
                            <option value="paid">paid</option>
                            <option value="unpaid">unpaid</option>
                          </select>
                          {errors.fees && touched.fees ? (
                            <div className="text-danger">{errors.fees}</div>
                          ) : null}
                        </div>
                        <div>
                          <label htmlFor="gender">Gender</label>
                          <select
                            onChange={handleChange}
                            value={values.gender}
                            name="gender"
                            className="form-control"
                          >
                            <option value="0" selected disabled>
                              choose gender
                            </option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                          </select>
                          {errors.gender && touched.gender ? (
                            <div className="text-danger">{errors.gender}</div>
                          ) : null}
                        </div>
                        <div>
                          <label htmlFor="department">Department</label>
                          <select
                            className="form-control mb-3"
                            onChange={(e) => setDepartmentname(e.target.value)}
                            required
                            // type="department"
                            // value={values.department}
                            // name="department"
                          >
                            <option value="0" selected disabled>
                              choose department
                            </option>
                            {department?.map((item, index) => {
                              return (
                                <option value={item.name} key={item.name}>
                                  {item.name}
                                </option>
                              );
                            })}
                          </select>
                          {/* {errors.department && touched.department ? (
                            <div className="text-danger">
                              {errors.department}
                            </div>
                          ) : null} */}
                        </div>
                        <button
                          type="button"
                          class="btn btn-secondary"
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
          {student.length > 0 ? (
            <table class="table table-dark table-striped table-hover">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">name</th>
                  <th scope="col">email</th>
                  <th scope="col">phone no.</th>
                  <th scope="col">gender</th>
                  <th scope="col">department</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {student?.map((item, index) => {
                  return (
                    <tr key={index}>
                      <th scope="row">{index + 1}</th>
                      <td>{item.name}</td>
                      <td>{item.email}</td>
                      <td>{item.phone}</td>
                      <td>{item.gender}</td>
                      <td>{item.department}</td>
                      <td>
                        <button type="button" className="btn btn-primary">
                          Edit
                        </button>

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

export default Student;
