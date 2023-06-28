import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { useAuthContext } from "../hooks/useAuthContext";

const CountryDetails = () => {
  const { _id } = useParams();
  const [country, setCountry] = useState(null);
  const { user } = useAuthContext();
  useEffect(() => {
    const fetchCountry = async () => {
      try {
        const apiUrl = process.env.REACT_APP_API_URL;
        const response = await axios.get(apiUrl + `/api/countries/${_id}`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: user.token,
          },
        });
        setCountry(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchCountry();
  }, [_id, user]);

  if (!country) {
    return <div>Loading...</div>;
  }

  const { capital, currency, name, phone, population, media } = country;

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
      <div className="max-w-2xl w-full mx-auto p-8 bg-white rounded-lg shadow">
        <h2 className="text-2xl font-semibold mb-4">Country: {name}</h2>
        <p className="mb-2">
          <span className="font-semibold">Capital:</span> {capital}
        </p>
        <p className="mb-2">
          <span className="font-semibold">Currency:</span> {currency}
        </p>
        <p className="mb-2">
          <span className="font-semibold">Phone:</span> {phone}
        </p>
        <p className="mb-2">
          <span className="font-semibold">Population:</span>{" "}
          {population && population.toLocaleString()}
        </p>
        <img
          src={media.flag}
          alt={`Flag of ${name}`}
          className="my-4"
        />
        {/* Display other media properties as needed */}

        <Link
          to="/dashboard"
          className="text-blue-500 underline">
          Back to Countries
        </Link>
      </div>
    </div>
  );
};

export default CountryDetails;
