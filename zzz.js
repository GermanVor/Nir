const fs = require('fs');
const axios = require('axios').default;
const airportsStream = fs.createWriteStream('./aviationstack/flightsActive');
const airportsMetaStrim = fs.createWriteStream('./aviationstack/flightsActive.meta');
const errorsStream = fs.createWriteStream('./errors.log');

// Аэропорт Норильска
// iata = NSK
// icao = UOOO

const params = {
    access_key: '259d5b00c28945d4540d08cc833aea3f',
    flight_status: 'active',
    // arr_icao: "UOOO",
    //   dep_icao: "UOOO",
};

// axios
//   .get("http://api.aviationstack.com/v1/flights", { params })
//   .then((resp) => {
//     if (resp.status === 200) {
//       airportsStream.write(JSON.stringify(resp.data["data"]));
//       airportsMetaStrim.write(JSON.stringify(resp.data["pagination"]));
//     }
//   })
//   .catch((err) => {
//     errorsStream.write(JSON.stringify(err));
//     console.log(err);
//   });

//   .finally(() => {
//     airportsStream.end();
//     airportsMetaStrim.end();
//     errorsStream.end();
//   });

// (async function() {
//     let count = 0;

//     const promise = new Promise((res) => {
//         setInterval(() => {
//                 if (count === 5 ) {
//                     res();
//                 } else {
//                     ++count;
//                     axios.get('http://webcode.me').then(resp => {
//                         console.log(resp.data);
//                     });
//                 }
//             }, 1000);
//         });

//         await promise;
// })();
