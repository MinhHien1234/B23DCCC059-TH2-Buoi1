// src/index.js
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setQuery, fetchImages } from "./imageslice";
import ImageList from "./imagelist";
import { Provider } from "react-redux";
import store from "./store";

const ImageSearchApp = () => {
  const dispatch = useDispatch();
  const { images, query, loading, error } = useSelector((state) => state.images);

  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(fetchImages(query));
  };

  return (
    <div
      style={{
        margin: 10,
        width: 450,
        paddingRight: 24,
        border: "3px solid #ccc",
        textAlign: "center",
      }}
    >
      <h1>Tìm kiếm hình ảnh</h1>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={query}
          onChange={(e) => dispatch(setQuery(e.target.value))}
          placeholder="Tìm kiếm hình ảnh"
        />
        <button type="submit" disabled={loading}>
          {loading ? "Đang tìm..." : "Tìm"}
        </button>
      </form>
      {error && <p style={{ color: "red" }}>Lỗi: {error}</p>}
      <ImageList images={images} />
    </div>
  );
};

// Gói ứng dụng với Provider để cung cấp store
const AppWrapper = () => (
  <Provider store={store}>
    <ImageSearchApp />
  </Provider>
);

export default AppWrapper;
