import React, { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { deleteHome, getHome, updateHome } from "../Service/api";

const initialValue = {
  address: "",
  description: "",
  phone: ""
};

const AllHome = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [home, setHome] = useState(initialValue);
  const [editHome, setEditHome] = useState(initialValue);
  const modalElement = useRef();

  useEffect(() => {
    getHomeData();
  }, []);

  const getHomeData = async () => {
    const response = await getHome(id);
    setHome(response.data);
    setEditHome(response.data);
  };

  const deleteItem = async () => {
    await deleteHome(id);
    navigate("/");
  };

  const editItem = (id) => {
    modalElement.current.style.display = "block";
  };

  const onValueChange = (e) => {
    console.log(e.target.value);
    setEditHome({ ...editHome, [e.target.name]: e.target.value });
  };

  const editHomeDetails = async (e) => {
    e.preventDefault();
    console.log(editHome);
    await updateHome(id, editHome);
    navigate("/");
  };

  return (
    <>
      {home?.length !== 0 ? (
        <div className="card">
          <div className="container">
            <h4>
              <b>{home?.address}</b>
            </h4>
            <p>{home?.phone}</p>
            <p>{home?.description}</p>
            <div>
              <span onClick={deleteItem}>Delete</span>
              <span onClick={editItem}>Edit</span>
            </div>

            {/* modal */}
            <div ref={modalElement} className="modal">
              <div className="modal-content">
                <span
                  className="close"
                  onClick={() => (modalElement.current.style.display = "none")}
                >
                  &times;
                </span>
                <form>
                   <label htmlFor="phone">Phone:</label>
                  <input
                    type="text"
                    id="phone"
                    name="phone"
                    onChange={(e) => onValueChange(e)}
                    value={editHome?.phone}
                  />
                  <br />
                  <br />
                   <label htmlFor="description">description:</label>
                  <input
                    type="text"
                    id="description"
                    name="description"
                    onChange={(e) => onValueChange(e)}
                    value={editHome?.description}
                  />
                  <br />
                  <br />
                   <label htmlFor="address">address:</label> 
                  <input
                    type="text"
                    id="description"
                    name="address"
                    onChange={(e) => onValueChange(e)}
                    value={editHome?.address}
                  />
                  <br />
                  <br />
                  <button onClick={editHomeDetails}>edit</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
};

export default AllHome;
