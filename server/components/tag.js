import { parseStringPromise } from 'xml2js';

export async function getTagId(data) {
    // Remove the response header from Advannet.
    data = data.substring(data.indexOf("<") - 1);

    // Bug-fix: Stops Advannet popup from breaking XML parser.
    if (data.charAt(0) !== 'A') {
        // Extract the id from XML.
        try {
            let id = await parseStringPromise(data);
            id = id.inventory.data[0].inventory[0].items[0].item[0].data[0].hexepc[0];
            return id;
        } catch(e) {
            throw new Error(`[TAG-PARSER] ${e}`);
        }
    }

    return null;
}