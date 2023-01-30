const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

app.get("/BNPL/checkcredit", (req, res) => {
  res.json({
    statusText: "200",
    message: "OK",
    result: {
      customerID: "MGM-011956",
      creditLimit: 50000,
      statusBNPL: "REGISTER",
      creditRemain: 26000,
      creditSpent: 24000,
    },
    optional: null,
  });
});

app.get("/BNPL/CheckRegister", (req, res) => {
  res.json({
    statusText: "200",
    message: "OK",
    result: {
      vendorName: "selfmade",
      status: "success",
      credit: 70000,
    },
    optional: null,
  });
});

app.get("/api/orders/PaymentMethods", (req, res) => {
  const orderId = req.query.OrderID;
  if (orderId === "470232S300000026") {
    res.json({
      statusText: "200",
      message: "OK",
      result: {
        vendorName: "selfmade",
        status: "success",
        credit: 70000,
      },
      optional: null,
    });
  } else if (orderId === "470232S300000027") {
    res.json({
      statusText: "200",
      message: "OK",
      result: [
        {
          type: "C",
          isActive: true,
          paymentName: "ชำระเงินสด",
          credit: 0,
        },
        {
          type: "THAIQR",
          isActive: true,
          paymentName: "ชำระเงินผ่าน QR Scan",
          credit: 0,
        },
        {
          type: "SMF",
          isActive: false,
          paymentName: "สินเชื่อ",
          credit: 50000,
        },
      ],
      optional: null,
    });
  } else {
    res.json({
      statusText: "200",
      message: "OK",
      result: "ORDER_NOT_FOUND",
    });
  }
});

app.post("/BNPL/acceptpopup", (req, res) => {
  const customerCcode = req.headers.customercode;
  res.json({
    statusText: "200",
    message: "OK",
    result: true,
    optional: null,
  });
});

app.post("/api/orders/UpdateOrderList", (req, res) => {
  const orderIds = req.body.orderIds;
  res.json({
    statusText: "200",
    message: "OK",
    result: true,
    optional: null,
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

// Export the Express API
module.exports = app;
