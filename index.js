const fs = require('node:fs/promises');
const path = require('path');
//
// const foo = async () => {
//  const folderPath = path.join(__dirname,'boys');
//     // console.log(folderPath);
//
// const files = await fs.readdir(folderPath);
//     // console.log(files);
//
//     for (const file of files) {
//         const filePath = path.join(folderPath,file);
//       const data = await fs.readFile(filePath);
//         // console.log(data.toString());
//         const user = JSON.parse(data);
//
//         if (user.gender === 'female') {
//             await fs.rename(filePath,path.join(__dirname, 'girls', file))
//         }
//     }
// }
//
// const foo1 = async () => {
//     const folderPath = path.join(__dirname,'girls');
//     // console.log(folderPath);
//
//     const files = await fs.readdir(folderPath);
//     // console.log(files);
//
//     for (const file of files) {
//         const filePath = path.join(folderPath,file);
//         const data = await fs.readFile(filePath);
//         // console.log(data.toString());
//         const user = JSON.parse(data);
//
//         if (user.gender === 'male') {
//             await fs.rename(filePath,path.join(__dirname, 'boys', file))
//         }
//     }
// }
//
// foo()
// foo1()

const sorter = async (readFolder,writeFolder,gender) => {
    const folderPath = path.join(__dirname,readFolder);

    const files = await fs.readdir(folderPath);

    for (const file of files) {
        const filePath = path.join(folderPath,file);
        const data = await fs.readFile(filePath);
        const user = JSON.parse(data);

        if (user.gender ===gender ) {
            await fs.rename(filePath,path.join(__dirname, writeFolder, file))
        }
    }
}

sorter('boys','girls','female');
sorter('girls','boys','male');