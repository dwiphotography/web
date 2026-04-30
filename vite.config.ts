import { defineConfig } from "vite";
import { devtools } from "@tanstack/devtools-vite";

import { tanstackStart } from "@tanstack/react-start/plugin/vite";

import viteReact from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { nitro } from "nitro/vite";

const config = defineConfig(({ command, mode }) => {
  const isBuild = command === "build";

  return {
    resolve: { tsconfigPaths: true },
    server: {
      allowedHosts: ["stg1.zhub.eu.org"],
    },
    plugins: [
      devtools(),
      isBuild && nitro({ rollupConfig: { external: [/^@sentry\//] } }),
      tailwindcss(),
      tanstackStart(),
      viteReact(),
    ],
  };
});

export default config;
