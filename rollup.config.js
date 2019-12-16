import babel from "rollup-plugin-babel";
import includePaths from "rollup-plugin-includepaths";

let includePathOptions = {
  include: {},
  paths: ["src/"],
  external: [],
  extensions: [".js", ".json", ".html"]
};

export default [
  {
    input: "src/components/componentlistener/index.js",
    output: {
      name: "aw-component-listener",
      file: "dist/index.js",
      format: "cjs"
    },
    external: ["react"],
    plugins: [
      babel({
        exclude: "node_modules/.**"
      }),
      includePaths(includePathOptions)
    ]
  }
];
