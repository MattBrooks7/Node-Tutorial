const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to our home page");
    return;
  }
  if (req.url === "/about") {
    res.end("Here is our short history");
    return;
  }
  res.end(`
  <h1> Oops!</h1>
  <p>We can't seem to find the page you are looking for</p>
  <a href="/">back home</a>
`);
});

server.listen(5000);



///////////////////////////////////////////////////////////////////////////

// const { readFile, writeFile } = require("fs").promises;
// const util = require('util');
// const readFilePromise = util.promisify(readFile)
// const writeFilePromise = util.promisify(writeFile)

// const start = async () => {
//   try {
//     const first = await readFile("./content/first.txt", "utf8");
//     const second = await readFile("./content/second.txt", "utf8");
//     await writeFile(
//       "./content/result-mind-grenade.txt",
//       `THIS IS AWESOME: ${first} ${second}`,
//       { flag: "a" }
//     );
//     console.log(first, second);
//   } catch (error) {
//     console.log(error);
//   }
// };

// start();

// getText("./content/first.txt")
//   .then((result) => console.log(result))
//   .catch((err) => console.log(err));

// const getText = (path) => {
//   return new Promise((resolve, reject) => {
//     readFile(path, "utf8", (err, data) => {
//       if (err) {
//         reject(err);
//       } else {
//         resolve(data);
//       }
//     });
//   });
// };
