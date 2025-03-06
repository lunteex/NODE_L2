// const http = require("http");
// require("dotenv").config();

// const server = http.createServer((req, res) => {
//   res.end(
//     JSON.stringify({
//       status: 200,
//       data: [{ name: "name1" }, { name: "name1" }],
//     })
//   );
// });

// const port = process.env.PORT;
// server.listen(port, () => {
//   console.log(`server started on port ${port}`);
// });

const os = require("os");

function bt4gb(mem) {
  return os.freemem() / 1024 ** 2 > mem;
}

console.log(bt4gb(4));
