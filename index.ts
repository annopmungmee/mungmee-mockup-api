const express = require("express");
const package = require("./package.json");

const app = express();
const port = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    statusText: "200",
    message: "Mungmee Mockup API is Ready. ",
    version: package.version,
  });
});

app.get("/BNPL/checkcredit", (req, res) => {
  const customerId = req.query.customerID;
  if (customerId === "MGM-011956") {
    res.json({
      statusText: "003",
      message: "REGISTER",
      result: {
        customerID: "MGM-011956",
        accountNumber: "MGMBNPL011956",
        balance: "20000.0",
        outstandingBalance: "40000.0",
        creditLimit: "60000.0",
        transactionDate: "20220116163022",
      },
      optional: null,
    });
  } else if (customerId === "MGM-011957") {
    res.json({
      statusText: "001",
      message: "PENDING",
      result: null,
      optional: null,
    });
  } else if (customerId === "MGM-011958") {
    res.json({
      statusText: "002",
      message: "WHITELISE",
      result: null,
      optional: null,
    });
  } else if (customerId === "MGM-011959") {
    res.json({
      statusText: "004",
      message: "BLACKLIST",
      result: null,
      optional: null,
    });
  }
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
