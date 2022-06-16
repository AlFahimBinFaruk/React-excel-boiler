import "./App.css";
import { useState } from "react";
import CsvDownload from "react-json-to-csv";

function App() {
  const [scraptedData, setcount] = useState([
    {
      id: 1,
      productName: "Macbook Pro",
      price: "$1233",
      productLink: "https://mdbootstrap.comp",
      reviews: 33,
      ratings: 4.5,
    },
    {
      id: 2,
      productName: "Macbook Air",
      price: "$999",
      productLink: "https://mdbootstrap-air.comp",
      reviews: 43,
      ratings: 3.5,
    },
    {
      id: 3,
      productName: "Asus",
      price: "$733",
      productLink: "https://mdbootstrap-asus.comp",
      reviews: 43,
      ratings: 2.5,
    },
    {
      id: 4,
      productName: "Lenevo",
      price: "$5433",
      productLink: "https://mdbootstrap-lenevo.comp",
      reviews: 43,
      ratings: 3.5,
    },
    {
      id: 5,
      productName: "Acer Aspire",
      price: "$3233",
      productLink: "https://mdbootstrap-acer.comp",
      reviews: 433,
      ratings: 3.5,
    },
  ]);
  return (
    <div className="App">
      <div className="container">
        <div className="d-flex justify-content-between mt-5">
          <h5>Your Data</h5>
          <CsvDownload
            data={scraptedData}
            filename="scraptedData.csv"
            className="btn btn-primary"
          >
            Download CSV
          </CsvDownload>
        </div>
        <div className="col-4 mx-auto my-5" id="divToPrint">
          {scraptedData.map((i) => {
            return (
              <div class="card mb-3">
                <div class="card-body">
                  {/* name */}
                  <h6 className="text-dark">{i.productName}.</h6>
                  {/* price */}
                  <h6>
                    <small>
                      Price:<span className="fw-bold ms-1">{i.price}</span>{" "}
                    </small>
                  </h6>
                  {/* product link */}
                  <h6>
                    <small>
                      Product Link:
                      <a
                        href="http://xyz.com"
                        target="_blank"
                        rel="noreferrer"
                        className="ms-1"
                      >
                        {i.productLink}
                      </a>{" "}
                    </small>
                  </h6>
                  {/* total reviews */}
                  <h6>
                    <small>
                      Total Reviews:
                      <span className="fw-bold ms-1">{i.reviews}</span>{" "}
                    </small>
                  </h6>
                  {/* ratings */}
                  <h6>
                    <small>
                      Ratings:<span className="fw-bold ms-1">{i.ratings}</span>{" "}
                    </small>
                  </h6>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
