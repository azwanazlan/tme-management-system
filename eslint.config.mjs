import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  //indent two space rule
  {
    rules: {
      indent: ["error", 2],
    },
    files: ["src/**/*.ts", "src/**/*.tsx"],
  },
];

export default eslintConfig;
