import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import './CountryDetails.css'

const CountryDetails = () => {
  const { countryName } = useParams();
  const [countryDetails, setCountryDetails] = useState();
  useEffect(() => {
    fetch(`https://restcountries.eu/rest/v2/name/${countryName}`)
      .then((res) => res.json())
      .then((data) => setCountryDetails(data))
      .catch((err) => console.log(err));
  }, []);
  console.log(countryDetails);
  return (
    <div className="d-flex justify-content-center flex-column align-items-center m-3 ">
      {(countryDetails &&
        countryDetails.map((country) => {
          return (
            <>
              <img className="img-fluid" src={country?.flag} alt="Flag" />
              <h1>{country?.name}</h1>
              <h3>
                Capital: <small className="">{country?.capital}</small>
              </h3>
              <h3>
                Population: <small className="">{country?.population}</small>
              </h3>
              <h3>
                Region: <small className="">{country?.region}</small>
              </h3>
              <h3>
                Currencies:{" "}
                {country?.currencies.map((crr) => (
                  <small>{crr?.name}</small>
                ))}
              </h3>
            </>
          );
        })) || (
        <div class="spinner">
          <h1>Loading...</h1>
        </div>
      )}
    </div>
  );
};

export default CountryDetails;
