import React, { Component } from "react";
import API from "../utils/API";
import moment from "moment";

class Saved extends Component {

  state = {
   cars: []
  }

  componentDidMount() {
    this.getSavedCars();
  }

  getSavedCars = () => {
    API.carRetrieve()
      .then(res => this.setState({cars: res.data}))
      .catch(err => console.log(err))
  }

  deleteCar = id => {
    API.carDelete(id)
      .then(() => this.getSavedCars())
      .catch(err => console.log(err))
  }
  


  render() {
    return (
      <div>
        <div className="jumbotron jumbotron-fluid py-5">
          <div className="row align-items-center justify-content-center my-5">
            <h1>SavedCars!</h1>
          </div>
        </div>

        <div className="container-fluid">
          <div className="row justify-content-center">

            {/*car result container */}
            <div className="col-8">
              <h2>{this.state.cars.length
                ? "Savedcar Results"
                : "No Savedcars to Display"}
              </h2>

              <ul className="list-group list-group-flush">
                {this
                  .state
                  .cars
                  .map(car => (
                    <li key={car.airline_id} className="list-group-item d-flex justify-content-between align-items-center">
                      <span
                        className="badge badge-primary badge-pill"
                        onClick={() => this.deleteCar(car.airline_id)}>DeleteCar</span>
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

export default Saved;