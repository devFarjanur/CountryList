
const Country = (props) => {
    const { flags, name, capital, population, area } = props.country;

    return (
        <div>

            <div>
                <h2>Country Name: {name.common}</h2>
                <img src={flags.png}></img>

                <p>Country Capital: {capital}</p>
                <p>Country Population: {population}</p>
                <p>Country Area: {area} sq km</p>
            </div>
        </div>
    );
};

export default Country;
