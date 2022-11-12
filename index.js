const fs = require('node:fs/promises');
const path = require('path');

const foo = async () => {
 const folderPath = path.join(__dirname,'boys');
    // console.log(folderPath);

const files = await fs.readdir(folderPath);
    // console.log(files);
    for (const file of files) {
      const data = await fs.readFile(path.join(folderPath,file));
        console.log(data.toString());
    }
}

foo()