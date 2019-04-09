import React from 'react';

const Weather = props => {
  return (
    <div className="weather-container">
      {props.icon && <div className={props.icon} />}
      {props.city && props.country && (
        <p className="weather__key">
          Location:{' '}
          <span className="weather__value">
            {props.city}, {props.country}
          </span>
        </p>
      )}
      {props.description && (
        <p className="weather__key">
          Current conditions:{' '}
          <span className="weather__value">{props.description}</span>
        </p>
      )}
      {props.temp && (
        <p className="weather__key">
          Current temperature:{' '}
          <span className="weather__value">{props.temp}F</span>
        </p>
      )}
      {props.temp_hi && (
        <p className="weather__key">
          Temperature high:{' '}
          <span className="weather__value">{props.temp_hi}F</span>
        </p>
      )}
      {props.temp_lo && (
        <p className="weather__key">
          Temperature low:{' '}
          <span className="weather__value">{props.temp_lo}F</span>
        </p>
      )}
      {props.humidity && (
        <p className="weather__key">
          Humidity: <span className="weather__value">{props.humidity}%</span>
        </p>
      )}
      {props.wind && (
        <p className="weather__key">
          Wind: <span className="weather__value">{props.wind}mph</span>
        </p>
      )}
      {props.error && (
        <p className="weather__error">
          Invalid input, please enter a valid city and country name.
        </p>
      )}
    </div>
  );
};

export default Weather;
