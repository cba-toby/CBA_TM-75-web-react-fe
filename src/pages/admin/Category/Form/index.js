import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import TextInput from "../../../../components/Input/TextInput";
import SelectInput from "../../../../components/Input/SelectInput";
import axiosClient from "../../../../axios-client";

function CategoryForm() {
  let { id } = useParams();
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
    if (id) {
      setLoading(true);
      axiosClient
        .get(`/admin/category/show/${id}`)
        .then(({ data }) => {
          setLoading(false);
          console.log(data);
          setCategory(data);
        })
        .catch((error) => {
          setLoading(false);
        });
    }
  }, [id]);

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(category);
    axiosClient
      .post("/admin/category", category)
      .then((data) => {
        console.log(data);
        // navigate("/admin/users");
        // setErrors(null);
        // setNotification("");
        // setNotification({
        //   type: "success",
        //   data: "User was successfully created",
        // });
      })
      .catch((error) => {
        const { response } = error;
        if (response.status === 422) {
          setErrors(response.data.errors);
        }
      });
  };

  return (
    <>
      <div className="pagetitle">
        <h1>TẠO DANH MỤC</h1>
      </div>
      <div className="container">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Danh Mục</h5>
            {!loading && (
              <form onSubmit={onSubmit}>
                <TextInput
                  label="Tiêu đề"
                  value={category.title}
                  onChange={(value) =>
                    setCategory({ ...category, title: value })
                  }
                  placeholder="Tiêu đề"
                  isRequired="true"
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
                  onChange={(value) =>
                    setCategory({ ...category, slug: value })
                  }
                  placeholder="Slug"
                  isRequired="true"
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
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default CategoryForm;
