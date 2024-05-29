export default {
  globals: {
    // Define browser globals
    window: true,
    document: true,
    console: true,
    // Add custom globals specific to your project
    // For example:
    myGlobalVariable: true
  },
  overrides: [
    {
      files: ["*.js", "*.jsx"],
      extends: [
        "eslint:recommended", // Using ESLint's recommended configuration
        "plugin:react/recommended" // Adding the recommended React configuration
      ],
      plugins: ["react"], // Adding the React plugin
      rules: {
        // Add any custom rules specific to your project
      }
    }
  ]
};
