import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default ({ mode }: { mode: string }) => {
  const env = loadEnv(mode, process.cwd(), "");
  return defineConfig({
    plugins: [react()],
    resolve: {
      alias: {
        "~/atoms": path.resolve(__dirname, "./src/components/atoms"),
        "~/molecules": path.resolve(__dirname, "./src/components/molecules"),
        "~/organisms": path.resolve(__dirname, "./src/components/organisms"),
        "~/templates": path.resolve(__dirname, "./src/components/templates"),
        "~/containers": path.resolve(__dirname, "./src/components/containers"),
        "~/pages": path.resolve(__dirname, "./src/pages"),
        "~/shared": path.resolve(__dirname, "./src/shared"),
        "~/style": path.resolve(__dirname, "./src/style"),
        "~": path.resolve(__dirname, "./src"),
      },
    },
    server: {
      proxy: {
        "/functions": {
          target: env.VITE_BASE_URL,
          changeOrigin: true,
        },
      },
    },
    build: {
      rollupOptions: {
        input: ["src/main.tsx"],
        external: (id: string) =>
          id.endsWith(".stories.ts") || id.endsWith(".stories.tsx") ||
          id.endsWith(".stories.js") || id.endsWith(".stories.jsx"),
      },
    },
  });
};
