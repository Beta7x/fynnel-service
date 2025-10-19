const { build } = require("esbuild");

// List all functions entry point
const entryPoints = [
  "src/index.ts"
  // "src/functions/auth.ts",
  // "src/functions/user.ts",
  // "src/functions/billing.ts",
  // "src/functions/notification.ts",
  // "src/functions/report.ts",
];

build({
  entryPoints,
  outdir: "dist",       // output folder
  bundle: true,         // bundling biar 1 file per function
  minify: true,         // kecilin output
  platform: "node",     // runtime target
  target: "node22",     // Serverless function Node.js 22
  format: "cjs",        // Lambda with CommonJS
  sourcemap: false,     // Optional: disable for small size output
  splitting: false,     // matikan code-splitting (biar tiap funtion standalone)
  external: ["@prisma/client", "newrelic"], // Exclude lib native
}).catch((e) => {
  console.error("error: ", e);
  process.exit(1);
});
