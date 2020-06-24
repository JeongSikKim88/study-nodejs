const url = require('url');
const adr = 'http://localhost:8080/default.html?year=2017&month=february';
//Parse the address:
const q = url.parse(adr, true);


/*The parse method returns an object containing url properties*/
console.log(q.host);
console.log(q.pathname);
console.log(q.search);

/*The query property returns an object with all the querystring parameters as properties:*/
const qdata = q.query;
console.log(qdata.year);
console.log(qdata.month);