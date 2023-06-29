import { useState } from "react";

const CountryCard = ({ country }) => {
  const [isHovered, setIsHovered] = useState(false);
  const { abbreviation, capital, currency, name, phone, population, media } =
    country;
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <>
      {country && (
        <div
          className={`bg-white rounded-lg shadow-lg p-6 ${
            isHovered ? "bg-yellow-100 cursor-pointer" : ""
          }`}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}>
          <div className="flex flex-col sm:flex-row">
            <div className="flex-none">
              <img
                src={media.flag ? media.flag : ""}
                alt={`Flag of ${name}`}
                className="h-16 w-16 sm:h-24 sm:w-24 rounded-full"
              />
            </div>
            <div className="ml-0 sm:ml-4 mt-4 sm:mt-0">
              <h2 className="text-xl font-semibold">{name}</h2>
              <p className="text-gray-600">{capital}</p>
              <p className="text-gray-600">{abbreviation}</p>
            </div>
          </div>
          <div className="mt-4">
            <p>
              <span className="font-semibold">Currency:</span> {currency}
            </p>
            <p>
              <span className="font-semibold">Population:</span>{" "}
              {population && population.toLocaleString()}
            </p>
            <p>
              <span className="font-semibold">Phone:</span> {phone}
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default CountryCard;
