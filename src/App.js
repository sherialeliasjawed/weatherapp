import React, { Component } from 'react';
import Weather from './components/Weather';
import Form from './components/Form';
import Title from './components/Title';

// Openweathermap API key.
const API_KEY = 'c12fe007e595d2d25fd40b06cbc86df5';

class App extends Component {
  state = {
    city: undefined,
    country: undefined,
    temp: undefined,
    temp_hi: undefined,
    temp_lo: undefined,
    humidity: undefined,
    wind: undefined,
    description: undefined,
    icon: undefined,
    error: false
  };

  handleSubmit = async e => {
    e.preventDefault();

    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;

    const api_call = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`
    );
    const data = await api_call.json();

    if (data.name && data.sys.country) {
      this.setState({
        city: data.name,
        country: data.sys.country,
        temp: data.main.temp,
        temp_hi: data.main.temp_max,
        temp_lo: data.main.temp_min,
        humidity: data.main.humidity,
        wind: data.wind.speed,
        description: data.weather[0].description,
        icon: `owf owf-${data.weather[0].id} owf-5x`,
        error: false
      });
    } else {
      this.setState({
        city: undefined,
        country: undefined,
        temp: undefined,
        temp_hi: undefined,
        temp_lo: undefined,
        humidity: undefined,
        wind: undefined,
        description: undefined,
        icon: undefined,
        error: true
      });
    }
  };

  render() {
    return (
      <div className="container">
        <Title />
        <Form handleSubmit={this.handleSubmit} />
        <Weather
          city={this.state.city}
          country={this.state.country}
          temp={this.state.temp}
          temp_hi={this.state.temp_hi}
          temp_lo={this.state.temp_lo}
          humidity={this.state.humidity}
          wind={this.state.wind}
          description={this.state.description}
          icon={this.state.icon}
          error={this.state.error}
        />
      </div>
    );
  }
}

export default App;
