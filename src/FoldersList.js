import React, { useState } from "react";
import { FileDirectoryIcon, KebabHorizontalIcon } from "@primer/octicons-react";
import "./FoldersList.css";
const { v4: uuid } = require("uuid");

const FoldersList = () => {
  const [selectedFolder, setSelectedFolder] = useState();
  const sampleArrayOfFolders = [
    {
      id: uuid(),
      title: "API LOGS",
      numberOfFiles: 2,
      size: "12.5mb",
    },
    {
      id: uuid(),
      title: "Downloads",
      numberOfFiles: 2,
      size: "25.75mb",
    },
    {
      id: uuid(),
      title: "Documents",
      numberOfFiles: 2,
      size: "34.5mb",
    },
  ];

  const handleFolderClick = (connection, folderId) => {
    const folderFound = sampleArrayOfFolders.find(
      (folder) => folder.id === folderId
    );
    setSelectedFolder({
      ...folderFound,
      connection: connection,
      rows: connection * 10,
      filename1: folderFound.title + ".csv",
      filename2: folderFound.title + ".csv",
    });
  };

  return (
    <>
      <div className="container">
        <div className="d-flex">
          <div className="me-4" width="60%">
            <div
              className="d-flex flex-column justify-content-start my-4"
              style={{ width: "25%" }}
            >
              <p className="fw-bold" style={{ fontSize: "12px" }}>
                ADMIN PANEL / List of Data
              </p>
              <div className="search-bar mb-3">
                <input
                  className="p-2 border border-secondary rounded"
                  type="text"
                  id="search"
                  placeholder="Search..."
                ></input>
              </div>
            </div>

            <p className="fs-6 fw-bolder">Connection 1</p>
            <div className="d-flex flex-row my-4">
              {sampleArrayOfFolders?.length
                ? sampleArrayOfFolders.map((folder) => {
                    return (
                      <div className="row row-cols-3 ms-1 me-4">
                        <div
                          className="card d-flex flex-row justify-content-between align-items-center px-2 py-3 folder"
                          key={folder.id}
                          onClick={() => handleFolderClick(1, folder.id)}
                        >
                          <div className="d-flex">
                            <FileDirectoryIcon
                              fill="#0d6efd"
                              className="me-2"
                              size={36}
                            />
                            <div className="d-flex flex-column justify-content-center align-items-start">
                              <span
                                style={{ fontSize: "14px", fontWeight: "bold" }}
                              >
                                {folder.title}
                              </span>
                              <div className="d-flex flex-row">
                                <span
                                  style={{ fontSize: "12px", color: "#999" }}
                                >
                                  {folder.numberOfFiles} files,
                                </span>
                                <span
                                  style={{ fontSize: "12px", color: "#999" }}
                                  className="ms-1"
                                >
                                  {folder.size}
                                </span>
                              </div>
                            </div>
                          </div>
                          <KebabHorizontalIcon
                            fill="#666"
                            className="menu"
                            size={16}
                          />
                        </div>
                      </div>
                    );
                  })
                : null}
            </div>

            <p className="fs-6 fw-bolder">Connection 2</p>
            <div className="d-flex flex-row my-4">
              {sampleArrayOfFolders?.length
                ? sampleArrayOfFolders.map((folder) => {
                    return (
                      <div className="row row-cols-3 ms-1 me-4">
                        <div
                          className="card d-flex flex-row justify-content-between align-items-center px-2 py-3 folder"
                          key={folder.id}
                          onClick={() => handleFolderClick(2, folder.id)}
                        >
                          <div className="d-flex">
                            <FileDirectoryIcon
                              fill="#0d6efd"
                              className="me-2"
                              size={36}
                            />
                            <div className="d-flex flex-column justify-content-center align-items-start">
                              <span
                                style={{ fontSize: "14px", fontWeight: "bold" }}
                              >
                                {folder.title}
                              </span>
                              <div className="d-flex flex-row">
                                <span
                                  style={{ fontSize: "12px", color: "#999" }}
                                >
                                  {folder.numberOfFiles} files,
                                </span>
                                <span
                                  style={{ fontSize: "12px", color: "#999" }}
                                  className="ms-1"
                                >
                                  {folder.size}
                                </span>
                              </div>
                            </div>
                          </div>
                          <KebabHorizontalIcon
                            fill="#666"
                            className="menu"
                            size={16}
                          />
                        </div>
                      </div>
                    );
                  })
                : null}
            </div>
          </div>
          <div className="my-4" style={{ width: "50%" }}>
            <div className="border-bottom border-start border-end px-4 pb-4 pt-1">
              <button type="button" className="btn btn-primary px-4">
                Upload Data
              </button>
            </div>
            {selectedFolder ? (
              <div className="d-flex flex-column p-3 border-bottom border-start border-end">
                <div className="d-flex">
                  <div className="d-flex border me-2 p-2 align-items-center">
                    <img
                      src={require("./assets/images/excel-file.png")}
                      height="72px"
                      width="72px"
                      alt="logo"
                    />
                  </div>
                  <div
                    className="d-flex flex-column p-2 border"
                    style={{ width: "100%" }}
                  >
                    <span className="fw-bold">{selectedFolder?.title}</span>
                    <span>Connection: {selectedFolder?.connection}</span>
                    <span>Size: {selectedFolder?.size?.toUpperCase()}</span>
                    <span>No of Files: {selectedFolder?.numberOfFiles}</span>
                    <span>Rows: {selectedFolder?.rows} L</span>
                  </div>
                </div>
                <div className="mt-4 mb-3">
                  <p className="fw-bold">Data Files</p>
                  <ul className="list-group">
                    <li className="list-group-item">
                      <div className="row p-2">
                        <div className="col">
                          <span className="fw-bold">File Name</span>
                        </div>
                        <div className="col">
                          <span className="fw-bold">Sent Date</span>
                        </div>
                      </div>
                    </li>
                    <li className="list-group-item">
                      <div className="row p-2">
                        <div className="col">
                          <span>{selectedFolder?.filename1}</span>
                        </div>
                        <div className="col">
                          <span>{new Date().toLocaleDateString()}</span>
                        </div>
                      </div>
                    </li>
                    <li className="list-group-item">
                      <div className="row p-2">
                        <div className="col">
                          <span>{selectedFolder?.filename2}</span>
                        </div>
                        <div className="col">
                          <span>{new Date().toLocaleDateString()}</span>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
};

export default FoldersList;
