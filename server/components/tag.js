import { parseStringPromise } from 'xml2js';

export async function getTagId(data) {
    // Remove the response header from Advannet.
    data = data.substring(data.indexOf("<") - 1);

    // Testing.
    if (data.charAt(0) == '1') {
        console.log(data);
    }

    // Bug-fix: Stops Advannet popup and corrupted multi-sensor events from breaking XML parser.
    if (!data.includes('ADVANNET/1.0') && !data.match(/sensor/gi)) {
        // Extract the id from XML.
        try {
            if (data !== undefined) {
                let tag = await parseStringPromise(data);
                if (tag.inventory !== undefined) {
                    let type = tag.inventory.type[0];

                    if (type === "inventory") {
                        tag = tag.inventory.data[0].inventory[0].items[0].item[0].data[0].hexepc[0];
                        return tag;
                    }
                    throw new Error(`Invalid input: ${tag}`);
                }
            }
        } catch(e) {
            throw new Error(`[TAG-PARSER] ${e}`);
        }
    }

    return null;
}