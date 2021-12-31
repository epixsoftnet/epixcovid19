#EpixCovid19


Corona virus statistics by country

--------------------------------------------------------------------------------

npm install

    npm instal epixcovid19 --save

--------------------------------------------------------------------------------

example

    const covid = require('epixcovid19');
    covid.world().then(console.log).catch(console.error);

--------------------------------------------------------------------------------

output

    {
    id: '',
    country: 'World',
    total_cases: '286,761,526',
    total_deaths: '5,445,322',
    new_deaths: '+6,474',
    total_recovered: '253,103,112',
    new_recovered: '+527,286',
    active_cases: '28,213,092',
    serious_critical: '90,159',
    total_tests: '',
    population: '',
    continent: 'All'
    },
    {
        id: '1',
        country: 'USA',
        total_cases: '55,223,391',
        total_deaths: '845,709',
        new_deaths: '+1,326',
        total_recovered: '41,463,794',
        new_recovered: '+55,503',
        active_cases: '12,913,888',
        serious_critical: '17,753',
        total_tests: '811,176,422',
        population: '333,903,023',
        continent: 'North America'
    },
    .....
    ...
    ..
    .

--------------------------------------------------------------------------------

homepage : https://epixsoft.net