import { defineBuildConfig } from "unbuild";

export default defineBuildConfig({
	declaration: true,
	entries: ["src/index"],
	// This is the magic part
	rollup: {
		emitCJS: true,
		inlineDependencies: true, // This will bundle better-auth into your dist files
		esbuild: {
			tsconfigRaw: {
				compilerOptions: {
					experimentalDecorators: true,
				},
			},
		},
	},
	// Explicitly tell unbuild which dependencies to bundle
	externals: [
		"@nestjs/common",
		"@nestjs/core",
		"reflect-metadata",
		"rxjs",
		// Do NOT put better-auth here; we want it bundled!
	],
});
