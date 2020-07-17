/**
 * Container Generator
 */

const componentExists = require("../utils/componentExists");

module.exports = {
  description: "Add a container component",
  prompts: [
    {
      type: "input",
      name: "name",
      message: "What should it be called?",
      default: "Count",
      validate: (value) => {
        if (/.+/.test(value)) {
          return componentExists(value)
            ? "A component or container with this name already exists"
            : true;
        }

        return "The name is required";
      },
    },
  ],
  actions: (data) => {
    // Generate index.ts and index.test.tsx
    const actions = [
      {
        type: "add",
        path: "../src/containers/{{properCase name}}.tsx",
        templateFile: "./container/index.tsx.hbs",
        abortOnFail: true,
      },
      {
        type: "add",
        path: "../src/containers/{{properCase name}}.test.tsx",
        templateFile: "./container/index.test.tsx.hbs",
        abortOnFail: true,
      },
    ];

    actions.push({
      type: "prettify",
      path: "/containers/",
    });

    return actions;
  },
};
