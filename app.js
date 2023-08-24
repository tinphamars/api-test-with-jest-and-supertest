const express = require("express");
const mongoose = require("mongoose");
const Jest = require("./jest.model");

const app = express();
app.use(express.json());

mongoose
  .connect("mongodb://127.0.0.1:27017/admin", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected!"))
  .catch((err) => console.log(err));

app.post("/login", function (req, res) {
  res.send({ status: 201, data: [] });
});

app.get("/api/users", async (req, res) => {
  const user = await Jest.find();
  res.status(200).json({
    status: "success",
    data: user,
  });
});

app.post("/api/users", function (req, res) {
  const jests = Jest({
    name: req.body.name,
    email: req.body.email,
  });

  jests
    .save()
    .then((doc) => {
      res.status(201).json({
        status: "created",
        data: doc,
      });
    })
    .catch((error) => {
      res.status(500).json({
        error: error.message,
      });
    });
});

module.exports = app;
// toBe : Kiểm tra tính tương đồng giá trị tượng có kiểu dự liệu như nhau tự như toán tử "==="
// toEqual: Kiểm tra ngữ nghĩa của giá trị thường được dùng để so sánh object


// METHOD
// PUT: tao mot tai nguyen mới trả về 201 or sửa đổi tất cả các fields của một record
// put yêu cầu nhiều băng thông hơn so với path
// PATH: sẽ update một vài fields của một item