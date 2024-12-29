import { fileURLToPath } from "url";
import { dirname } from "path";
import react from "@vitejs/plugin-react";

// Resolve __dirname equivalent
const __dirname = dirname(fileURLToPath(import.meta.url));

export default {
  plugins: [react()],
  resolve: {
    alias: {
      "@": `${__dirname}/src`, // Define alias for @ to point to the src folder
    },
  },
  server: {
    host: true,
    port: 3009, // Custom development port (changed from default 5173)
    strictPort: true, // Fail if port is in use
  },
  preview: {
    port: 3009, // Custom preview port (changed from default 4173)
    strictPort: true,
  },
};
