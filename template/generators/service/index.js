/**
 * Service Generator
 */

/* eslint strict: ["off"] */

"use strict";

const componentExists = require("../utils/componentExists");

module.exports = {
  description: "Add a service",
  prompts: [
    {
      type: "input",
      name: "name",
      message: "What should it be called?",
      default: "GetStuffService",
      validate: (value) => {
        if (/.+/.test(value)) {
          return componentExists(value)
            ? "A component or container with this name already exists"
            : true;
        }

        return "The name is required";
      },
    },
    {
      type: "input",
      name: "url",
      default: "https://api.example.com/",
      message: "What is the base URL?",
    },
    {
      type: "input",
      name: "method",
      default: "GET",
      message: "What is the request method?",
    },
  ],
  actions: (data) => {
    // Generate index.js and index.test.js
    const actions = [
      {
        type: "add",
        path: "../src/services/{{properCase name}}.tsx",
        templateFile: "./service/index.tsx.hbs",
        abortOnFail: true,
      },
      {
        type: "add",
        path: "../src/services/{{properCase name}}.test.tsx",
        templateFile: "./service/index.test.tsx.hbs",
        abortOnFail: true,
      },
      {
        type: "add",
        path: "../src/services/mocks/{{camelCase name}}Response.ts",
        templateFile: "./service/mockResponse.hbs",
        abortOnFail: true,
      },
      {
        type: "modify",
        path: "../src/index.tsx",
        pattern: new RegExp(/.*\/\/.*\[IMPORT NEW SERVICE HOOK ABOVE\].+\n/),
        templateFile: "./service/importHook.hbs",
        abortOnFail: true,
      },
      {
        type: "modify",
        path: "../src/index.tsx",
        pattern: new RegExp(
          /.*\/\/.*\[INITIALIZE NEW SERVICE HOOK ABOVE\].+\n/
        ),
        templateFile: "./service/initializeHook.hbs",
        abortOnFail: true,
      },
      {
        type: "modify",
        path: "../src/index.tsx",
        pattern: new RegExp(
          /.*\{\/\*.*\[INSERT NEW SERVICE PROVIDER OPENING TAG ABOVE\].+\n/
        ),
        templateFile: "./service/appendProviderOpening.hbs",
        abortOnFail: true,
      },
      {
        type: "modify",
        path: "../src/index.tsx",
        pattern: new RegExp(
          /.*\{\/\*.*\[INSERT NEW SERVICE PROVIDER CLOSING TAG ABOVE\].+\n/
        ),
        templateFile: "./service/appendProviderClosing.hbs",
        abortOnFail: true,
      },
      {
        type: "modify",
        path: "../src/services/mocks/handlers.ts",
        pattern: new RegExp(
          /.*\/\/.*\[IMPORT MOCK URL AND RESPONSE ABOVE\].+\n/
        ),
        templateFile: "./service/importMockResponse.hbs",
        abortOnFail: true,
      },
      {
        type: "modify",
        path: "../src/services/mocks/handlers.ts",
        pattern: new RegExp(
          /.*\/\/.*\[APPEND NEW SERVICE MOCK HANDLER ABOVE\].+\n/
        ),
        templateFile: "./service/appendMockHandler.hbs",
        abortOnFail: true,
      },
      {
        type: "prettify",
        path: "/services/",
      },
      {
        type: "prettify",
        name: "index.tsx",
      },
    ];

    return actions;
  },
};
