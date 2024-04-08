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
              <h5 className="card-title">General Form Elements</h5>
              <form>
                <div className="row mb-3">
                  <label htmlFor="inputText" className="col-sm-2 col-form-label">Text</label>
                  <div className="col-sm-10">
                    <input type="text" className="form-control" />
                  </div>
                </div>
                <div className="row mb-3">
                  <label htmlFor="inputEmail" className="col-sm-2 col-form-label">Email</label>
                  <div className="col-sm-10">
                    <input type="email" className="form-control" />
                  </div>
                </div>
                <div className="row mb-3">
                  <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Password</label>
                  <div className="col-sm-10">
                    <input type="password" className="form-control" />
                  </div>
                </div>
                <div className="row mb-3">
                  <label htmlFor="inputNumber" className="col-sm-2 col-form-label">Number</label>
                  <div className="col-sm-10">
                    <input type="number" className="form-control" />
                  </div>
                </div>
                <div class="text-center">
                  <button type="submit" class="btn btn-primary">Submit</button>
                  <button type="reset" class="btn btn-secondary">Reset</button>
                </div>
              </form>

            </div>
          </div>
      </div>
     
    </>
  );
}

export default CreateCategory;
