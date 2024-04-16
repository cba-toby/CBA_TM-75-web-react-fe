import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import TextInput from "../../../../components/Input/TextInput";
import SelectInput from "../../../../components/Input/SelectInput";
import axiosClient from "../../../../axios-client";

function CategoryForm() {
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState(null);
  const [parent, setParent] = useState(null);
  const [category, setCategory] = useState({
    id: null,
    title: "",
    slug: "",
    meta_title: "",
  });

  useEffect(() => {
    setLoading(true);
    axiosClient
      .get(`/admin/category/parent`)
      .then(({ data }) => {
        setLoading(false);
        setParent(data.data);
      })
      .catch((error) => {
        setLoading(false);
      });
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(category);
  };

  return (
    <>
      <div className="pagetitle">
        <h1>TẠO DANH MỤC</h1>
        <nav>
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="index.html">test1</a>
            </li>
            <li className="breadcrumb-item">test2</li>
            <li className="breadcrumb-item active">test3</li>
          </ol>
        </nav>
      </div>
      <div className="container">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Danh Mục</h5>
            <form onSubmit={onSubmit}>
              <TextInput
                label="Tiêu đề"
                value={category.title}
                onChange={(value) => setCategory({ ...category, title: value })}
                placeholder="Tiêu đề"
              />

              <SelectInput
                label="Danh mục cha"
                id="floatingSelect"
                options={parent}
                defaultOption="Chọn danh mục cha ..."
                onChange={(e) =>
                  setCategory({ ...category, parent_id: e.target.value })
                }
              />
              <TextInput
                label="Slug"
                value={category.slug}
                onChange={(value) => setCategory({ ...category, slug: value })}
                placeholder="Slug"
              />
              <TextInput
                label="Tiêu đề meta"
                value={category.title}
                onChange={(value) =>
                  setCategory({ ...category, meta_title: value })
                }
                placeholder="Tiêu đề meta"
              />

              <div className="text-center">
                <button
                  type="submit"
                  className="btn btn-primary"
                  style={{ margin: "10px" }}
                >
                  Submit
                </button>
                <button
                  type="reset"
                  className="btn btn-secondary"
                  style={{ margin: "10px" }}
                >
                  Reset
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default CategoryForm;
