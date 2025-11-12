const swaggerAutogen = require("swagger-autogen")();

const outputFile = "./swagger_output.json";
const endpointsFiles = ["server.js"];

const doc = {
  info: {
    version: "1.0.0",
    title: "API MIS management by SABTAWEE",
    contact: {
      name: "Developer API",

    },
  },
  host: "localhost:3301",
  basePath: "/",
  schemes: [
    "http"
  ],
};

swaggerAutogen(outputFile, endpointsFiles, doc);