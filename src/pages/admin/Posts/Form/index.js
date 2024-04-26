import { useEffect, useState, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axiosClient from "../../../../axios-client";
import { useStateContext } from "../../../../context/ContextProvider";
import TextInput from "../../../../components/Input/TextInput";
import EditorInput from "../../../../components/Input/EditorInput";

function PostForm() {
  let { id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState(null);
  const [postOld, setPostOld] = useState(null);
  const { setNotification } = useStateContext();
  const [isRequired, setIsRequired] = useState(true);
  const [isRequiredPassword, setIsRequiredPassword] = useState(true);
  const [post, setPost] = useState({
    id: null,
    title: "",
    meta_title: "",
    slug: "",
    summary: "",
    content: "",
    category_id: "",
    published: false,
  });
  const editorRef = useRef(null);

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(post);
  };
  return (
    <>
      <div className="pagetitle">
        {/* <h1>{!!post.id ? `CẬP NHẬT USER: ${postOld.name}` : "TẠO MỚI USER"}</h1> */}
        <h1>Tạo bài viết</h1>
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
                />
                <div className="row mb-3">
                  <label
                    htmlFor="inputText"
                    className="col-sm-2 col-form-label"
                  >
                    Tóm tắt
                  </label>
                  <div className="col-sm-10">
                    <div className="form-floating">
                      <textarea
                        className="form-control"
                        placeholder="Tóm tắt"
                        id="floatingTextarea"
                        style={{ height: "100px" }}
                      ></textarea>
                      <label htmlFor="floatingTextarea">Address</label>
                    </div>
                  </div>
                </div>
                <EditorInput initialValue={post.content} apiKey="content" />

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
