import React from "react";

const ImageList = ({ images }) => {
  return (
    <div style={{ height: 500, overflowY: "scroll" }}>
      {images.length > 0 ? (
        <ul>
          {images.map((image) => (
            <li key={image.id}>
              <img src={image.previewURL} alt={image.tags} />
            </li>
          ))}
        </ul>
      ) : (
        <p>Không tìm thấy hình ảnh.</p>
      )}
    </div>
  );
};

export default ImageList;
