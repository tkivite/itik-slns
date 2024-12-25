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
};
