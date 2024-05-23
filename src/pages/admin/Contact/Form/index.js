import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import TextareaInput from "../../../../components/Input/Textarea";
import axiosClient from "../../../../axios-client";
import SelectInput from "../../../../components/Input/SelectInput";

function ContactForm() {
  let { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [reply, setReply] = useState("");
  const [contact, setContact] = useState({
    id: null,
    name: "",
    email: "",
    phone: "",
    status: "",
    message: "",
  });

  useEffect(() => {
    getContact(id);
  }, [id]);

  const getContact = (id) => {
    setLoading(true);
    axiosClient
      .get(`/admin/contact/reply/${id}`)
      .then(({ data }) => {
        setLoading(false);
        setContact(data.contact);
      })
      .catch((error) => {
        setLoading(false);
      });
  };

  function convertDateTime(isoString) {
    const date = new Date(isoString);

    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0"); // Months are 0-indexed
    const year = date.getFullYear();

    return `${hours}:${minutes} ${day}/${month}/${year}`;
  }

  const onSubmit = (e) => {
    e.preventDefault();
    axiosClient
      .post(`/admin/contact/reply/${id}`, {
        reply,
        status: contact.status,
      })
      .then(({ data }) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const statusList = [
    { id: 0, value: 0, title: "Chưa giả quyết" },
    { id: 1, value: 1, title: "Đã giải quyết" },
    { id: 2, value: 2, title: "Đang giải quyết" },
  ];

  return (
    <>

      <section className="section">
        <div className="row">
          <div className="col-lg-6">
            <div className="card">
              <div className="card-body">
                <div
                  className="tab-pane fade profile-overview active show"
                  id="profile-overview"
                  role="tabpanel"
                >
                  <h5 className="card-title">Nội dung liên hệ</h5>

                  <div className="row">
                    <div className="col-lg-3 col-md-4 label ">Tên</div>
                    <div className="col-lg-9 col-md-8">{contact.name}</div>
                  </div>

                  <div className="row">
                    <div className="col-lg-3 col-md-4 label">emial</div>
                    <div className="col-lg-9 col-md-8">{contact.email}</div>
                  </div>

                  <div className="row">
                    <div className="col-lg-3 col-md-4 label">Số điện thoại</div>
                    <div className="col-lg-9 col-md-8">{contact.phone}</div>
                  </div>

                  <div className="row">
                    <div className="col-lg-3 col-md-4 label">Nội dung</div>
                    <div className="col-lg-9 col-md-8">{contact.content}</div>
                  </div>
                  <div className="row">
                    <div className="col-lg-3 col-md-4 label">Thời gian gửi</div>
                    <div className="col-lg-9 col-md-8">
                      {convertDateTime(contact.created_at)}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Trả lời</h5>
                <form onSubmit={onSubmit}>
                  <div className="text-center">
                    <TextareaInput
                      label="Nội dung"
                      value={reply}
                      onChange={setReply}
                      placeholder="Nhập nội dung trả lời"
                    />
                    {!loading && (
                      <SelectInput
                        label="Chọn trạng thái"
                        id="floatingSelect"
                        options={statusList}
                        defaultOption="Chọn trạng thái"
                        onChange={(e) =>
                          setContact({ ...contact, status: e.target.value })
                        }
                        value={contact.status}
                      />
                    )}
                    <button type="submit" className="btn btn-primary">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ContactForm;
