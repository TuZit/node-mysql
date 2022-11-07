export const getAllProducts = () => {
  const sql = `SELECT * FROM products LIMIT 10`;
  connection.query(sql, (error, results) => {
    if (error) {
      return console.error(error.message);
    }
    return res.status(200).json({ message: "OK", data: results });
  });
  connection.end();
};
