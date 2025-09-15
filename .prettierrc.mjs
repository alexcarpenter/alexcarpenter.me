/** @type {import("prettier").Config} */
export default {
  plugins: ["prettier-plugin-tailwindcss", "prettier-plugin-astro"],
  tailwindFunctions: ["cn", "clsx", "cva"],
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
      },
    },
  ],
};
