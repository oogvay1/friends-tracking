import path from "node:path"
import { defineConfig } from "vite"

export default defineConfig({
    server: {
        host: true,
    },
    resolve: {
        alias: {
            "@app": path.resolve(__dirname, "./src"),
            "@lib": path.resolve(__dirname, "./src/library"),
        },
    },
});