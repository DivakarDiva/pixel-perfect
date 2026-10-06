// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";
import { transformWithOxc } from "vite";

// Allow JSX inside plain .js files under src/ (portfolio components are .js).
const jsxInJs = {
  name: "jsx-in-js",
  enforce: "pre" as const,
  async transform(code: string, id: string) {
    if (!/\/src\/.*\.js$/.test(id.split("?")[0])) return null;
    return transformWithOxc(code, id.split("?")[0], { lang: "jsx", jsx: { runtime: "automatic" } } as any);
  },
};

export default defineConfig({
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
  },
  vite: {
    plugins: [jsxInJs],
  },
});
