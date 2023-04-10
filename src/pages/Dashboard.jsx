import React, { useMemo, useState } from "react";
import { useSelector } from "react-redux";

const Dashboard = () => {
  const [searchData, setSearchData] = useState("");
  const { student } = useSelector((state) => state.counter);

  const data = student?.filter((item) => {
    return (
      item?.department.toLowerCase().includes(searchData?.toLowerCase()) ||
      item?.fees.toLowerCase().includes(searchData?.toLowerCase())
    );
  });
  return (
    <div className="container">
      <div className="row mt-3">
        <div className="col-sm-12">
          <input
            type="search"
            placeholder="search here"
            className="form-control mb-3"
            onChange={(e) => setSearchData(e.target.value)}
          />
          {data?.length > 0 ? (
            <table class="table table-dark table-striped table-hover">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">name</th>
                  <th scope="col">email</th>
                  <th scope="col">phone no.</th>
                  <th scope="col">gender</th>
                  <th scope="col">department</th>
                </tr>
              </thead>
              <tbody>
                {data?.map((item, index) => {
                  return (
                    <tr key={index}>
                      <th scope="row">{index + 1}</th>
                      <td>{item.name}</td>
                      <td>{item.email}</td>
                      <td>{item.phone}</td>
                      <td>{item.gender}</td>
                      <td>{item.department}</td>
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

export default Dashboard;
