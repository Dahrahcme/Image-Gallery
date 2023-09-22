import React, { useState, useEffect, useRef } from "react";
import data from "../data.js";
import { Link } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import {
  DragDropContext,
  Droppable,
  Draggable,
  resetServerContext,
} from "react-beautiful-dnd";

resetServerContext();

const Users = () => {
  const [filter, setFilter] = useState("");
  const [loading, setLoading] = useState(false);
  const [dataArray, setDataArray] = useState(data.cardData);
  const dragItem = useRef(null);

  const dragStart = (e, position) => {
    dragItem.current = position;
  };

  const dragEnter = (e, position) => {
    e.preventDefault();
    const newPosition = position;

    if (newPosition !== undefined && newPosition !== dragItem.current) {
      const newDataArray = [...dataArray];
      const draggedItem = newDataArray[dragItem.current];
      newDataArray.splice(dragItem.current, 1);
      newDataArray.splice(newPosition, 0, draggedItem);
      dragItem.current = newPosition;
      // Updates the state immediately when dragging
      setDataArray(newDataArray);
    }
  };

  const dragEnd = () => {
    dragItem.current = null;
  };

  const searchText = (event) => {
    setFilter(event.target.value);
  };

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, [filter]);

  let dataSearch = dataArray.filter((item) => {
    return Object.keys(item).some((key) =>
      item[key]
        .toString()
        .toLowerCase()
        .includes(filter.toString().toLowerCase())
    );
  });

  const handleDragEnd = (result) => {
    if (!result.destination) {
      return;
    }

    const sourceIndex = result.source.index;
    const destinationIndex = result.destination.index;

    if (sourceIndex === destinationIndex) {
      return;
    }

    const items = [...dataArray];
    const [reorderedItem] = items.splice(sourceIndex, 1);
    items.splice(destinationIndex, 0, reorderedItem);

    // Updates the state with the new order of cards
    setDataArray(items);
  };

  return (
    <div>
      <section className="py-2 container">
        <div className="content">
          <div className="row">
            <div className="col-md-6 text-md-start text-center">
              <h2>Welcome to Tife's Bakery</h2>
            </div>
            <div className="col-md-6 text-md-end text-center">
              <Link to="/">
                <input
                  type="button"
                  value="Log Out"
                  className="header-button"
                />
              </Link>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 mb-4 text-center">
              <div className="search">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search term"
                  value={filter}
                  onChange={searchText}
                />
              </div>
            </div>
          </div>
          {loading ? (
            <div className="text-center">
              <ClipLoader color="#007BFF" size={100} loading={loading} />
            </div>
          ) : (
            <div className="row justify-content-center content">
              <DragDropContext onDragEnd={handleDragEnd}>
                <Droppable droppableId="droppable" direction="horizontal">
                  {(provided, snapshot) => (
                    <div
                      {...provided.droppableProps}
                      ref={provided.innerRef}
                      className="row"
                    >
                      {dataSearch.map((item, index) => (
                        <Draggable
                          key={item.id.toString()}
                          draggableId={item.id.toString()}
                          index={index}
                        >
                          {(provided, snapshot) => (
                            <div
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                              className={`col-11 col-md-6 col-lg-3 mx-0 mb-4 wrapper ${
                                snapshot.isDragging ? "dragging-card" : ""
                              }`}
                              onDragStart={(e) => dragStart(e, index)}
                              onDragEnter={(e) => dragEnter(e, index)}
                              onDragEnd={dragEnd}
                            >
                              <div className="card p-0 overflow-hidden h-100 shadow">
                                <img
                                  src={item.img}
                                  alt=""
                                  className="card-img"
                                />
                                <p className="img-tag text-center">
                                  {item.tag}
                                </p>
                              </div>
                            </div>
                          )}
                        </Draggable>
                      ))}
                      {provided.placeholder}
                    </div>
                  )}
                </Droppable>
              </DragDropContext>
              <div style={{ height: "100px", width: "100%" }}></div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Users;
