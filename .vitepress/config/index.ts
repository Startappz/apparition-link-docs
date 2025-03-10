import { defineConfig } from "vitepress";
import { shared } from "./shared";
import { en } from "./en";
import { fa } from "./fa";

export default defineConfig({
  ...shared,
  locales: {
    root: { label: "English", ...en },
    fa: { label: "فارسی", ...fa },
  },
});
