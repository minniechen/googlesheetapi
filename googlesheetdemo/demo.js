const {google} = require('googleapis');
const token = require("./gstoken");

const credential = new google.auth.JWT(
    token.client_email,
    null,
    token.private_key,
    ['https://www.googleapis.com/auth/spreadsheets']
);

const gsapi = google.sheets({
    version: "v4",
    auth: credential
});

async function getGoogleSheetNames(){
    let ops = {
        spreadsheetId: '1munK0Wwyd5bnlO-NFHxpnP-oNF-26mrLAbL4dM-sUoA',
    }
    let res = await gsapi.spreadsheets.get(
        ops
    )
    console.log(JSON.stringify(res.data.properties.title));
}

async function updateGoogleSheet(){
    let ops = {
        spreadsheetId: '1munK0Wwyd5bnlO-NFHxpnP-oNF-26mrLAbL4dM-sUoA',
        range: 'Sheet1!A2',
        valueInputOption:'RAW',
        resource: {values:[['test','test']]}
    }
    let res = await gsapi.spreadsheets.values.update(ops)
    console.log(JSON.stringify(res));
}

getGoogleSheetNames();
updateGoogleSheet();



