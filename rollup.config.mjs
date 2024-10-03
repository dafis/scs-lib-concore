import cjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import tsc from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";
import terser from "@rollup/plugin-terser";

export default [
  {
    input: "src/concore.ts",
    output: [
      {
        file: "dist/concore.umd.js",
        format: "umd",
        name: "concore",
      },
      {
        file: "dist/concore.umd.min.js",
        format: "umd",
        name: "concore",
        plugins: [terser()],
      },
      {
        file: "dist/concore.cjs.js",
        format: "cjs",
      },
      {
        file: "dist/concore.es.js",
        format: "es",
      },
    ],
    plugins: [
      cjs(),
      resolve({
        moduleDirectories: ["node_modules"],
      }),
      tsc(),
    ],
    external: [],
  },
  {
    input: './dist/dts/src/concore.d.ts',
    output: [{ file: 'dist/concore.d.ts', format: 'es' }],
    plugins: [dts()],
  },
];
