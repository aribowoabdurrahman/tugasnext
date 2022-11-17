const { GoogleSpreadsheet } = require('google-spreadsheet');

const key = require('../../registrasi-key.json');

export default async function insert(req,) {
    const { GoogleSpreadsheet } = require('google-spreadsheet');

    const doc = new GoogleSpreadsheet(process.env.KEY_ID_GOOGLESHEET);
    await doc.useServiceAccountAuth(key);

    await doc.loadInfo(); // loads document properties and worksheets
    await sheet.addRows([req.body]);

    const sheet = doc.sheetsByIndex[0]; // or use doc.sheetsById[id] or doc.sheetsByTitle[title]
    console.log(sheet.title);
    console.log(sheet.rowCount);

    // adding / removing sheets
    const newSheet = await doc.addSheet({ title: 'hot new sheet!' });
    await newSheet.delete();

}