import cjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import tsc from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";
import terser from "@rollup/plugin-terser";

export default [
  {
    input: "src/mylib.ts",
    output: [
      {
        file: "dist/mylib.umd.js",
        format: "umd",
        name: "mylib",
      },
      {
        file: "dist/mylib.umd.min.js",
        format: "umd",
        name: "mylib",
        plugins: [terser()],
      },
      {
        file: "dist/mylib.cjs.js",
        format: "cjs",
      },
      {
        file: "dist/mylib.es.js",
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
    input: './dist/dts/src/mylib.d.ts',
    output: [{ file: 'dist/mylib.d.ts', format: 'es' }],
    plugins: [dts()],
  },
];
