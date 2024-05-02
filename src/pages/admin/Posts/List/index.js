import TableHeader from "../../../../components/Table/TableHeader";
import { useEffect, useState } from "react";
import axiosClient from "../../../../axios-client";
import { Link } from "react-router-dom";
import SearchInput from "../../../../components/Input/SearchInput";
import PaginationComponent from "../../../../components/Pagination";
import Loading from "../../../../components/Loading";
import { useStateContext } from "../../../../context/ContextProvider";

function Post() {
  const [posts, setPosts] = useState({
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
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageCount, setPageCount] = useState(10);
  const [search, setSearch] = useState("");
  const [searchTimeout, setSearchTimeout] = useState(null);
  const { setNotification } = useStateContext();
  const headers = [
    { label: "STT", width: "10%" },
    { label: "Tiêu đề", width: "30%" },
    { label: "Thể loại", width: "20%" },
    { label: "Active", width: "20%" },
  ];
  useEffect(() => {
    getPosts();
  }, []);

  const getPosts = () => {
    axiosClient
      .get("/admin/post")
      .then(({ data }) => {
        setLoading(false);
        console.log(data.categories);
        setPosts(data.posts.data);
        setCategories(data.categories);
      })
      .catch((error) => {});
  };

  const handleGetCategoryName = (id) => {
    let category = categories.find((category) => category.id === id);
    return category ? category.title : "";
  };

  const onDeletePost = (id) => {
    if (window.confirm("Are you sure?")) {
      axiosClient
        .delete(`/admin/post/destroy/${id}`)
        .then(() => {
          getPosts();
          setNotification({
            type: "success",
            data: "Category was successfully deleted",
          });
        })
        .catch((error) => {
          const { response } = error;
          if (response.status === 422) {
            setNotification({
              type: "warning",
              data: response.data.message,
            });
          }
        });
    }
  };

  return (
    <>
      <div>
        <div className="container">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">List Posts</h5>
              <div className="datatable-top"></div>
              <table className="table table-striped">
                <TableHeader headers={headers} />
                {loading && <Loading length={headers.length} />}
                {!loading && (
                  <>
                    <tbody>
                      {Array.isArray(posts) &&
                        posts.map((post) => (
                          <tr key={post.id}>
                            <th scope="row">{post.id}</th>
                            <td>{post.title}</td>

                            <td>
                              {post.category_id && (
                                <span className="badge bg-secondary">
                                  {handleGetCategoryName(post.category_id)}
                                </span>
                              )}
                            </td>
                            <td>
                              <Link
                                to={`/admin/posts/${post.id}`}
                                className="btn btn-outline-secondary"
                              >
                                Edit
                              </Link>
                              &nbsp;
                              <button
                                onClick={(ev) => onDeletePost(post.id)}
                                className="btn btn-outline-danger"
                              >
                                Delete
                              </button>
                            </td>
                          </tr>
                        ))}
                    </tbody>
                  </>
                )}
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Post;
