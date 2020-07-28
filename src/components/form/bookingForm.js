import React, { Fragment, useState } from "react";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";

import Input from "./booking-input";
import Button from "../button/button";
import { DateSelect, TimeSelect } from "./date-picker";

function BookingForm(props) {
  const [showHours, selectHours] = useState(false);

  const autocompletionRequest = {
    bounds: [
      { lat: -37.814, lng: 144.96332 },
      { lat: -37.816, lng: 144.9631 }
    ],
    componentRestrictions: {
      country: "au"
    },
    types: ["geocode"]
  };

  return (
    <Fragment>
      <div className="booking-form">
        <div className="booking-form__button">
          <button
            className={
              showHours
                ? "booking-form__button--btn"
                : "booking-form__button--btn bookActive"
            }
            onClick={() => selectHours(false)}
          >
            Transfer Service
          </button>
          <button
            className={
              showHours
                ? "booking-form__button--btn bookActive"
                : "booking-form__button--btn"
            }
            onClick={() => selectHours({ showHours: true })}
          >
            Hourly Service
          </button>
        </div>

        <form
          className="booking-form__form"
          onSubmit={e => props.submitForm(e)}
        >
          <Input label="Pickup Location" id="pickup" />
          <GooglePlacesAutocomplete
            autocompletionRequest={autocompletionRequest}
            inputClassName="origin"
            idPrefix="pickup"
            placeholder="Address, Airport, Hotel, ..."
            required
            renderSuggestions={(active, suggestions, onSelectSuggestion) => (
              <ul className="suggestions-container">
                {suggestions.map((suggestion, index) => (
                  <li
                    className="suggestions-container__content"
                    onClick={event => onSelectSuggestion(suggestion, event)}
                    key={index}
                  >
                    <p>{suggestion.description}</p>
                  </li>
                ))}
              </ul>
            )}
          />

          <Input label="Destination" id="destination" />
          <GooglePlacesAutocomplete
            autocompletionRequest={autocompletionRequest}
            inputClassName="destination"
            idPrefix="dest"
            placeholder="Address, Airport, Hotel, ..."
            required
            renderSuggestions={(active, suggestions, onSelectSuggestion) => (
              <ul className="suggestions-container">
                {suggestions.map((suggestion, index) => (
                  <li
                    className="suggestions-container__content"
                    onClick={event => onSelectSuggestion(suggestion, event)}
                    key={index}
                  >
                    <p>{suggestion.description}</p>
                  </li>
                ))}
              </ul>
            )}
          />

          {!showHours ? (
            <Input
              control="serviceSelect"
              label="Type of Service"
              name="select-service"
              id="service"
            />
          ) : null}

          {showHours ? (
            <Input
              control="select"
              label="Duration"
              name="duration"
              id="hour"
            />
          ) : null}

          <Input label="Pickup Date" placeholder="" id="date" />
          <DateSelect />

          <Input label="Time" placeholder="" id="time" />
          <TimeSelect />

          <Button btnName="Search" theme="auth" type="submit"></Button>
        </form>
      </div>
    </Fragment>
  );
}

export default BookingForm;
