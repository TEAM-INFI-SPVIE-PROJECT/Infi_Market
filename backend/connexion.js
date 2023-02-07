const sql = require("mssql/msnodesqlv8");
var config = {  
    server: 'AUXENCE',
    user: 'sa',
    password: '1234',
    database: 'DepensesDb',
};

async function getPersons() {
    try {
        await sql.connect(config);
        const persons = await sql.query("select * from user");

        return persons.recordset;
    } catch (err) {
        console.log(err);
    }
}

getPersons().then(res => console.log(res));
