// // app.METHOD(PATH, HANDLER)
// // app is an instance of express.
// // METHOD is an HTTP request method, in lowercase.
// // PATH is a path on the server.
// // HANDLER is the function executed when the route is matched.

// const app = express();

// // app.get("/", (req, res) => {
// //   res.send("Hello World!");
// // });

// // app.post("/", (req, res) => {
// //   res.send("Got a POST request");
// // });

// // app.delete("/user", (req, res) => {
// //   res.send("Got a DELETE request at /user");
// // });

const express = require("express");
const router = express.Router();

// router.get("/", async (_, res) => {
//   try {
//     const sql = `SELECT * FROM products LIMIT 10`;
//     connection.query(sql, (error, results) => {
//       if (error) {
//         return console.error(error.message);
//       }
//       return res.status(200).json({ message: "OK", data: results });
//     });
//     connection.end();
//   } catch (err) {
//     console.log(err);
//   }
// });

router.get("/users", (_, res) => {
  return res.status(200).json({ message: "ok", error: null });
});

module.exports = router;
