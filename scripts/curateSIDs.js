/*
  Forces all SIDs to uppercase, removes duplicates, and sorts alphabetically.
  Expects an input file named `SIDs.txt` in the same directory to read from.
*/

const {once} = require('events');
const {createReadStream, writeFileSync} = require('fs');
const {createInterface} = require('readline');

(async function curateSIDsLineByLine () {
  try {
    const SIDs = [];

    const rl = createInterface({
      crlfDelay: Infinity,
      input: createReadStream('./SIDs.txt'),
    });

    rl.on('line', line => {
      const lineUpper = line.toUpperCase().trim();
      if (!SIDs.includes(lineUpper)) SIDs.push(lineUpper);
    });

    await once(rl, 'close');
    writeFileSync('./SIDs_unique.txt', SIDs.sort().join('\n'));

    console.log('File processed.');
  } catch (err) {
    console.error(err);
  }
}());
