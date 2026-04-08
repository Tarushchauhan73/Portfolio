import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const env = globalThis as typeof globalThis & {
  process?: {
    env?: Record<string, string | undefined>;
  };
};

const repositoryName = env.process?.env?.GITHUB_REPOSITORY?.split("/")[1];
const githubPagesBase =
  env.process?.env?.GITHUB_ACTIONS && repositoryName
    ? `/${repositoryName}/`
    : "/";

export default defineConfig({
  base: githubPagesBase,
  plugins: [react()],
});
