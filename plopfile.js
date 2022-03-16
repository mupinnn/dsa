function generateFile(data) {
  let filePath = "{{lowerCase problemProvider}}/{{kebabCase name}}/";

  if (data.domains !== undefined) {
    if (data.problemProvider === "Self-learning") {
      filePath = "{{kebabCase domains}}/{{kebabCase name}}/";
    } else {
      filePath =
        "{{lowerCase problemProvider}}/{{kebabCase domains}}/{{kebabCase name}}/";
    }
  }

  if (data.contestName !== undefined) {
    filePath = "contest/{{kebabCase contestName}}/{{kebabCase name}}/";
  }

  return {
    main: filePath + "main.{{lowerCase language}}",
    test: filePath + "main.test.{{lowerCase language}}",
    readme: filePath + "README.md",
  };
}

/** @param plop {import("plop").NodePlopAPI} */
module.exports = function (plop) {
  plop.setGenerator("case", {
    description: "Create new problem case file you want to solve",
    prompts: [
      {
        type: "list",
        name: "problemProvider",
        message: "Choose problem/challenge provider:",
        choices: [
          {
            value: "fcc",
            name: "FreeCodeCamp",
          },
          "Hackerrank",
          "Contest",
          "Self-learning",
        ],
      },
      {
        type: "list",
        name: "contestName",
        message: "Choose the contest organizer:",
        choices: ["Shopee Codeleague"],
        when: function (answers) {
          return answers.problemProvider === "Contest";
        },
      },
      {
        type: "list",
        name: "domains",
        message:
          "Choose whether the problem/challenge is algorithm or data structure:",
        choices: ["Algorithm", "Data Structure"],
        when: function (answers) {
          return ["Hackerrank", "Self-learning"].includes(
            answers.problemProvider
          );
        },
      },
      {
        type: "input",
        name: "name",
        message: "Problem or case name:",
      },
      {
        type: "list",
        name: "language",
        message: "Select your preferred languange:",
        choices: [
          { value: "js", name: "JavaScript" },
          { value: "ts", name: "TypeScript" },
        ],
      },
    ],
    actions: function (data) {
      return [
        {
          type: "add",
          path: generateFile(data).main,
          templateFile:
            "templates/{{lowerCase language}}/main.{{lowerCase language}}.hbs",
        },
        {
          type: "add",
          path: generateFile(data).test,
          templateFile:
            "templates/{{lowerCase language}}/main.test.{{lowerCase language}}.hbs",
        },
        {
          type: "add",
          path: generateFile(data).readme,
          templateFile: "templates/README.md",
        },
      ];
    },
  });
};
