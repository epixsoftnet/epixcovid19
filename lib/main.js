const tabletojson = require('tabletojson').Tabletojson;
const tablejson = async (url) => {
    return new Promise((resolve, reject) => {
        tabletojson.convertUrl(
            url,
            function(tablesAsJson) {
                resolve(tablesAsJson[0]);
            }
        );
    });
}
module.exports = {
    world() {
        return new Promise(async (resolve, reject) => {
            try {
                const data = await tablejson('https://www.worldometers.info/coronavirus/');

                const newData = [];
                data.forEach((e) => {
                    newData.push({
                        id                  : e["#"],
                        country             : e["Country,Other"],
                        total_cases         : e["TotalCases"],
                        total_deaths        : e["TotalDeaths"],
                        new_deaths          : e["NewDeaths"],
                        total_recovered     : e["TotalRecovered"],
                        new_recovered       : e["NewRecovered"],
                        active_cases        : e["ActiveCases"],
                        serious_critical    : e["Serious,Critical"],
                        total_tests         : e["TotalTests"],
                        population          : e["Population"],
                        continent           : e["Continent"],
                    })
                })

                resolve(newData)
            } catch (error) {
                reject(error);
            }
        });
    }
}