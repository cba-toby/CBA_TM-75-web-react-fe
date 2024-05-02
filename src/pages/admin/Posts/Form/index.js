import { useEffect, useState, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axiosClient from "../../../../axios-client";
import { useStateContext } from "../../../../context/ContextProvider";
import TextInput from "../../../../components/Input/TextInput";
import EditorInput from "../../../../components/Input/EditorInput";
import TextareaInput from "../../../../components/Input/Textarea";
import SelectInput from "../../../../components/Input/SelectInput";

import { Editor } from "primereact/editor";

function PostForm() {
  let { id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState(null);
  const [postOld, setPostOld] = useState(null);
  const { setNotification } = useStateContext();
  const [isRequired, setIsRequired] = useState(true);
  const [isRequiredPassword, setIsRequiredPassword] = useState(true);
  const [categories, setCategories] = useState(null);
  const [post, setPost] = useState({
    id: null,
    title: "",
    category_id: "",
    meta_title: "",
    slug: "",
    summary: "",
    content: "",
    category_id: "",
    published: false,
  });

  useEffect(() => {
    setLoading(true);
    if (id) {
      axiosClient
        .get(`/admin/post/show/${id}`)
        .then(({ data }) => {
          setLoading(false);
          console.log("data: ", data);
          setCategories(data.categories);
          setPost(data.post);
          setPostOld(data.post);
        })
        .catch((error) => {
          setLoading(false);
        });
    } else {
      axiosClient
        .get(`/admin/post/category`)
        .then(({ data }) => {
          setLoading(false);
          setCategories(data.data);
        })
        .catch((error) => {
          setLoading(false);
        });
    }
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();
    if (post.id) {
      axiosClient
        .put(`/admin/post/update/${post.id}`, post)
        .then((data) => {
          // navigate("/admin/category");
          setErrors(null);
          setNotification("");
          setNotification({
            type: "success",
            data: "Post was successfully updated",
          });
        })
        .catch((error) => {
          const { response } = error;
          console.log("error: ", error);
          if (response.status === 422) {
            setErrors(response.data.errors);
          }
        });
    } else {
      axiosClient
        .post("/admin/post", post)
        .then((data) => {
          navigate("/admin/posts");
          setErrors(null);
          setNotification({
            type: "success",
            data: "Category was successfully created",
          });
        })
        .catch((error) => {
          const { response } = error;
          if (response.status === 422) {
            setErrors(response.data.errors);
          }
        });
    }
  };

  const handleTextEditorChange = (content) => {
    setPost({ ...post, content });
  };

  return (
    <>
      <div className="pagetitle">
        <h1>
          {!!post.id
            ? `CẬP NHẬT BÀI VIẾT: ${postOld.title}`
            : "TẠO MỚI BÀI VIẾT"}
        </h1>
      </div>
      <div className="container">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Danh Mục</h5>

            {loading && <p>Loading...</p>}
            {errors && (
              <div style={{ color: "red" }}>
                {Object.keys(errors).map((key) => (
                  <p key={key}>{errors[key][0]}</p>
                ))}
              </div>
            )}
            {!loading && (
              <form onSubmit={onSubmit}>
                <TextInput
                  label="Tiêu đề"
                  value={post.title}
                  onChange={(value) => setPost({ ...post, title: value })}
                  placeholder="title"
                  isRequired={isRequired}
                />
                <SelectInput
                  label="Thể loại"
                  id="floatingSelect"
                  options={categories}
                  defaultOption="Chọn  ..."
                  onChange={(e) =>
                    setPost({ ...post, category_id: e.target.value })
                  }
                  value={post.category_id}
                />
                <TextInput
                  label="meta_title"
                  value={post.meta_title}
                  onChange={(value) => setPost({ ...post, meta_title: value })}
                  placeholder="meta_title"
                />
                <TextInput
                  label="Slug"
                  value={post.slug}
                  onChange={(value) => setPost({ ...post, slug: value })}
                  placeholder="slug"
                  isRequired={isRequired}
                />
                <TextareaInput
                  label="Tóm tắt"
                  value={post.summary}
                  onChange={(value) => setPost({ ...post, summary: value })}
                  placeholder="Tóm tắt"
                />
                <EditorInput
                  label="Nội dung"
                  value={post.content}
                  onTextChange={handleTextEditorChange}
                  isRequired={isRequired}
                />
                <div className="text-center">
                  <button type="submit" className="btn btn-primary">
                    Submit
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

export default PostForm;
