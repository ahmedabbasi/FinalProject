import React, {Component} from "react";
import API from "../utils/API";


class Home extends Component {

  state = {
   cars: [],
    q: ""
  }
  handleOnChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  }

carSearch = event => {
    event.preventDefault();
    API.carSearch({
      q: this.state.q
    }).then(res => {
      console.log(res.data);
      this.setState({
      cars: res.data,
        q: ""
      })
    })
    .catch(err => console.log(err))
  }

  saveCar = id => {
    const savedCar = this.state.Cars.find(Car => (Car._Id=== id));

    console.log(savedCar);
    API.carSave({
      title: savedCar.name,
      code: savedCar.codeIata,
   
    })
    .then(res => console.log(res))
    .catch(err => console.log(err));
  }







  render() {
    return (
      <div>
        <div className="jumbotron jumbotron-fluid py-5">
          <div className="row align-items-center justify-content-center my-5">
            <h1>Welcome to the Car Search (with React)!</h1>
          </div>
        </div>

        <div className="container-fluid">
          <div className="row">

            {/* Form forcar search */}
            <div className="col-4">
              <h2>Search for Cars</h2>
              <form>
                <div className="form-group">
                  <input
                    name="q"
                    value={this.state.q}
                    placeholder="Search for cars"
                    type="text"
                    onChange={this.handleOnChange}
                    className="form-control mb-2"/>
                  <button type="submit" className="btn btn-block btn-success" onClick={this.CarSearch}>
                    Submit
                  </button>
                </div>
              </form>
            </div>

            {/*car result container */}
            <div className="col-8">
              <h2>{this.state.cars.length
                  ? "Car Results"
                  : "Search for somecars"}
              </h2>

              <ul className="list-group list-group-flush">
                {this
                  .state
                  .cars
                  .map(Car => (
                    <li key={Car._Id} className="list-group-item d-flex justify-content-between align-items-center">
                      {Car.name}
                      <span
                        className="badge badge-primary badge-pill"
                        onClick={() => this.saveCar(Car._Id)}>Savecar</span>
                    </li>
                  ))}
              </ul>
            </div>

          </div>
        </div>

      </div>
    )
  }
}

export default Home;