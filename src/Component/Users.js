import React, { useEffect, useState } from "react";

const Users = () => {
  let widthStyle = {
    maxWidth: "540px",
  };

  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const response = await fetch(
      "https://api.github.com/users"
    );
    setUsers(await response.json());
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      <div className="bg-info text-white">
        <h2 className="text-center pt-4">List of Github Users</h2>
        <div className="container-fluid mt-5">
          <div className="row justify-content-around">
            {users.map((cEle) => {
              return (
                <div className="card mb-3 " style={widthStyle} key={cEle.id}>
                  <div className="row g-0">
                    <div className="col-md-4 col-10">
                      <img
                        src={cEle.avatar_url}
                        className="img-fluid rounded-start"
                        alt="..."
                      />
                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                        <h5 className="card-title">{cEle.login}</h5>
                        <p className="card-text">Articles: 38</p>
                        <p className="card-text">Followers: 890</p>
                        <p className="card-text">
                          <small className="text-body-secondary">
                            Last updated 2 mins ago
                          </small>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Users;
