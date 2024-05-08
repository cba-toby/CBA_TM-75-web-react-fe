import React from "react";

const ImageInput = ({ handleImageChange, imageBefore }) => {
  return (
    <div className="row mb-3">
      <label
        htmlFor="inputText"
        className="col-sm-2 col-form-label"
        style={{ display: "flex", alignItems: "center" }} // Thêm inline CSS cho label
      ></label>
      <div
        className="col-sm-10"
        style={{ display: "flex", alignItems: "center" }}
      >
        {" "}
        <img
          src={imageBefore}
          alt=""
          style={{
            height: "auto",
            width: "200px",
            marginRight: "20px",
            objectFit: "cover",
          }} // Thêm inline CSS cho ảnh
        />
        <input
          type="file"
          className="form-control"
          onChange={handleImageChange}
          style={{ flex: 1 }} // Thêm inline CSS cho input file
        />
      </div>
    </div>
  );
};

export default ImageInput;
