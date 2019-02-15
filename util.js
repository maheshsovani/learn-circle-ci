let countries = `Alaska,Alberta,Northwest Territory,Kamchatka
Alberta,Alaska,Northwest Territory,Ontario,Western United States
Central America,Western United States,Venezuela
Eastern United States,Western United States,Ontario,Quebec
Greenland,Northwest Territory,Ontario,Quebec,Iceland
Northwest Territory,Alaska,Greenland,Ontario,Alberta
Ontario,Northwest Territory,Greenland,Quebec,Eastern United States,Western United States,Alberta
Quebec,Ontario,Greenland,Eastern United States
Western United States,Alberta,Ontario,Eastern United States,Central America
Argentina,Venezuela,Brazil
Brazil,Venezuela,North Africa,Argentina
Venezuela,Central America,Brazil,Argentina
Great Britain,Iceland,Scandinavia,Northern Europe,Western Europe
Iceland,Greenland,Great Britain
Northern Europe,Great Britain,Ukraine,Southern Europe,Western Europe
Scandinavia,Great Britain,Ukraine
Southern Europe,Western Europe,Northern Europe,Ukraine,Egypt,North Africa
Ukraine,Scandinavia,Ural,Afghanistan,Middle East,Southern Europe,Northern Europe
Western Europe,Great Britain,Northern Europe,Southern Europe,North Africa
Congo,North Africa,Egypt,East Africa,South Africa
East Africa,Egypt,Madagascar,South Africa,Congo
Egypt,Southern Europe,Middle East,East Africa,Congo,North Africa
Madagascar,East Africa,South Africa
North Africa,Western Europe,Southern Europe,Egypt,Congo,Brazil
South Africa,Congo,East Africa,Madagascar
Afghanistan,Ukraine,Ural,Siberia,China,India,Middle East
China,Afghanistan,Siberia,Mongolia,Siam,India
India,Middle East,Afghanistan,China,Siam
Irkutsk,Siberia,Yakutsk,Kamchatka,Mongolia
Japan,Kamchatka,Mongolia
Kamchatka,Yakutsk,Alaska,Japan,Mongolia,Irkutsk
Middle East,Ukraine,Afghanistan,India,Egypt
Mongolia,Siberia,Irkutsk,Kamchatka,Japan,China
Siam,India,China,Indonesia
Siberia,Ural,Yakutsk,Irkutsk,Mongolia,China,Afghanistan
Ural,Ukraine,Siberia,Afghanistan
Yakutsk,Siberia,Kamchatka,Irkutsk
Eastern Australia,New Guinea,LotR,Western Australia
Indonesia,Siam,New Guinea,Western Australia
LotR,Eastern Australia
New Guinea,Indonesia,Eastern Australia,Western Australia
Western Australia,Indonesia,New Guinea,Eastern Australia`;

const parseCountries = function(countries) {
  let c = countries.split('\n');
  return c.map(countryDetails => {
    let countryNames = countryDetails.split(',');
    return {
      name: countryNames[0],
      neighbours: countryNames.slice(1),
      playerName: undefined,
      noOfSoldiers: 0
    };
  });
};

const continents = `North America,5,Alaska,Alberta,Central America,Eastern United States,Greenland,Northwest Territory,Ontario,Quebec,Western United States
South America,2,Argentina,Brazil,Venezuela
Europe,5,Great Britain,Iceland,Northern Europe,Scandinavia,Southern Europe,Ukraine,Western Europe
Africa,3,Congo,East Africa,Egypt,Madagascar,North Africa,South Africa
Asia,7,Afghanistan,China,India,Irkutsk,Japan,Kamchatka,Middle East,Mongolia,Siam,Siberia,Ural,Yakutsk
Australia,2,Eastern Australia,Indonesia,LotR,New Guinea,Western Australia`;

const addContinent = function(countries, continents) {
  const countriesDetails = parseCountries(countries);
  const continentsDetails = continents.split('\n');

  countriesDetails.forEach(countryDetails => {
    continentsDetails.forEach(continentDetails => {
      if (continentDetails.split(',').includes(countryDetails.name)) {
        countryDetails.continent = continentDetails.split(',')[0];
      } else {
        countryDetails.continent = countryDetails.continent || 'Not came';
      }
    });
  });
  return countriesDetails;
};

console.log(JSON.stringify(addContinent(countries, continents)));
