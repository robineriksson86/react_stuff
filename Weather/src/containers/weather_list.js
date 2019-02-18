import React, { Component } from "react";
import { connect } from "react-redux";
import Chart from "../components/chart";
import GoogleMap from "../components/google_map";

class WeatherList extends Component {
  renderWeather(cityData) {
    const name = cityData.city.name;
    const temps = cityData.list.map(t => t.main.temp);
    const pressures = cityData.list.map(t => t.main.pressure);
    const humiditys = cityData.list.map(t => t.main.humidity);
    const { lon, lat } = cityData.city.coord;

    // const discp = cityData.list.map(t => t.weather[0].description);

    return (
      <tr key={name}>
        <td>
          <GoogleMap lon={lon} lat={lat} />
        </td>
        <td>
          <Chart data={temps} color="red" units="°C" />
        </td>
        <td>
          <Chart data={pressures} color="green" units="hPA" />
        </td>
        <td>
          <Chart data={humiditys} color="blue" units="%" />
        </td>
      </tr>
    );
  }

  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>Stad</th>
            <th>Temperatur (°C)</th>
            <th>Lufttryck (hPa)</th>
            <th>Luftfuktighet (%)</th>
          </tr>
        </thead>
        <tbody>{this.props.weather.map(this.renderWeather)}</tbody>
      </table>
    );
  }
}

function mapStateToProps({ weather }) {
  return { weather };
}

export default connect(mapStateToProps)(WeatherList);
