function CreateCategory() {
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
            <form>
              <div className="row mb-3">
                <label htmlFor="inputText" className="col-sm-2 col-form-label">
                  Tiêu đề
                </label>
                <div className="col-sm-10">
                  <input type="text" className="form-control" />
                </div>
              </div>
              <div className="row mb-3">
                <label htmlFor="inputText" className="col-sm-2 col-form-label">
                  Danh mục cha
                </label>
                <div className="col-sm-10">
                  <div className="col-md-4">
                    <select
                      className="form-select"
                      id="floatingSelect"
                      aria-label="State"
                    >
                      <option defaultChecked="">Chọn danh mục cha ...</option>
                      <option value="1">Oregon</option>
                      <option value="2">DC</option>
                    </select>
                  </div>
                </div>
              </div>
              <fieldset className="row mb-3">
                <legend className="col-form-label col-sm-2 pt-0">Radios</legend>
                <div className="col-sm-10">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="gridRadios"
                      id="gridRadios1"
                      value="option1"
                      defaultChecked
                    />
                    <label className="form-check-label" htmlFor="gridRadios1">
                      First radio
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="gridRadios"
                      id="gridRadios2"
                      value="option2"
                    />
                    <label className="form-check-label" htmlFor="gridRadios2">
                      Second radio
                    </label>
                  </div>
                </div>
              </fieldset>

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

export default CreateCategory;
