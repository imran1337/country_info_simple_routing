import React, { useEffect, useState } from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Country.css";
const Country = () => {
  const [countries, setCountries] = useState();
  useEffect(() => {
    fetch("https://restcountries.eu/rest/v2/all")
      .then((res) => res.json())
      .then((data) => setCountries(data))
      .catch((err) => console.log(err));
  }, []);
  console.log(countries);
  return (
    <>
      {countries &&
        countries.length &&
        countries.map((country) => {
          const { name, flag } = country;
          return (
            <Card style={{ width: "18rem",margin: "20px" }} className="shadow">
              <Card.Img variant="top" src={flag} className="flagImage" />
              <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Link to={`/country/${name}`}><Button variant="primary">More Details</Button></Link>
              </Card.Body>
            </Card>
          );
        })}
    </>
  );
};

export default Country;