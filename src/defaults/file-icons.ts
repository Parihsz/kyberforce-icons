interface FileIcons {
	[key: string]: {
		languages?: string[];
		names?: string[];
		extensions?: string[];
	};
}

/// keep-sorted
export const fileIcons: FileIcons = {
	"assembly": {
		extensions: ["asm", "a51", "inc", "nasm", "s", "ms", "agc", "ags", "aea", "argus", "mitigus", "binsource"],
	},
	"astro": {
		languages: ["astro"],
		extensions: ["astro"],
		names: ["astro.config.js", "astro.config.mjs", "astro.config.cjs", "astro.config.ts", "astro.config.cts", "astro.config.mts"],
	},
	"audio": {
		extensions: ["aac", "aiff", "alac", "flac", "m4a", "m4p", "mogg", "mp3", "oga", "opus", "wav", "wma", "wv", "mid", "midi"],
	},
	"binary": {
		languages: ["code-text-binary"],
		extensions: ["bin", "exe", "msi", "dll"],
	},
	"bun": {
		names: ["bun.lock", "bun.lockb", "bunfig.toml"],
	},
	"c": {
		languages: ["c"],
		extensions: ["c", "i", "mi"],
	},
	"changelog": {
		names: [
			"changelog",
			"changelog.md",
			"changelog.rst",
			"changelog.txt",
			"changes",
			"changes.md",
			"changes.rst",
			"changes.txt",
		],
	},
	"code-of-conduct": {
		names: [
			"code_of_conduct",
			"code_of_conduct.md",
			"code_of_conduct.txt",
			"contributing",
			"contributing.md",
			"contributing.txt",
			"contributing.rst",
			"funding.yml",
		],
	},
	"codeowners": {
		names: ["codeowners", "owners"],
	},
	"config": {
		languages: [
			// TODO: design icons for these
			"editorconfig",
			"ini",
			"properties",
			"spring-boot-properties",
		],
		extensions: [
			"config",
			"config.json",
			"config.yaml",
			"config.yml",
			"config.toml",
			"config.js",
			"config.cjs",
			"config.mjs",
			"config.ts",
			"config.lua",
			"config.luau",
			// TODO: design icons for these
			"lock",
			"env",
			"envrc",
			"ini",
			"dlc",
			"config",
			"conf",
			"properties",
			"prop",
			"settings",
			"option",
			"props",
			"prefs",
			"sln.dotsettings",
			"sln.dotsettings.user",
			"cfg",
		],
		names: [
			// TODO: design icons for these
			"cspell.json",
			".cspell.json",
			"biome.json",
			"biome.jsonc",
			"cargo.lock",
			"cargo.toml",
			".commitlintrc",
			".commitlintrc.js",
			".commitlintrc.cjs",
			".commitlintrc.ts",
			".commitlintrc.cts",
			".commitlintrc.json",
			".commitlintrc.yaml",
			".commitlintrc.yml",
			".commitlint.yaml",
			".commitlint.yml",
			"deno.json",
			"deno.jsonc",
			".editorconfig",
			".env.defaults",
			".env.example",
			".env.sample",
			".env.template",
			".env.schema",
			".env.local",
			".env.dev",
			".env.development",
			".env.alpha",
			".env.e2e",
			".env.qa",
			".env.dist",
			".env.prod",
			".env.production",
			".env.stage",
			".env.staging",
			".env.preview",
			".env.test",
			".env.testing",
			".env.development.local",
			".env.qa.local",
			".env.production.local",
			".env.staging.local",
			".env.test.local",
			".env.uat",
			".env.cat",
			"esbuild.js",
			"esbuild.ts",
			"esbuild.cjs",
			"esbuild.mjs",
			".firebaserc",
			"fvm_config.json",
			"gatsby-config.js",
			"gatsby-config.mjs",
			"gatsby-config.ts",
			".graphqlconfig",
			".graphqlrc",
			".graphqlrc.json",
			".graphqlrc.js",
			".graphqlrc.cjs",
			".graphqlrc.ts",
			".graphqlrc.toml",
			".graphqlrc.yaml",
			".graphqlrc.yml",
			".huskyrc",
			".huskyrc.json",
			".huskyrc.js",
			".huskyrc.yaml",
			".huskyrc.yml",
			".prettierrc",
			".prettierrc.js",
			".prettierrc.cjs",
			".prettierrc.json",
			".prettierrc.json5",
			".prettierrc.yaml",
			".prettierrc.yml",
			".prettierrc.toml",
			".prettierrc.mjs",
			".prettierignore",
			"rustfmt.toml",
			".rustfmt.toml",
			"rust-toolchain.toml",
			"clippy.toml",
			".vscodeignore",
			".styluaignore",
		],
	},
	"cpp": {
		languages: ["cpp"],
		extensions: ["cc", "cpp", "cxx", "c++", "cp", "mii", "ii"],
	},
	"cs": {
		languages: ["csharp"],
		extensions: ["cs", "csx", "csharp", "csproj"],
	},
	"css": {
		languages: ["css"],
		extensions: ["css", "css.map", "less"],
	},
	"csv": {
		languages: ["csv", "tsv", "psv"],
		extensions: ["csv", "tsv", "psv", "xls", "xlsx", "xlsm"],
	},
	"dart": {
		languages: ["dart"],
		extensions: ["dart", "freezed.dart", "g.dart"],
	},
	"database": {
		languages: ["sql"],
		extensions: ["pdb", "sql", "pks", "pkb", "accdb", "mdb", "sqlite", "sqlite3", "pgsql", "postgres", "plpgsql", "psql", "db", "db3", "dat"],
	},
	"docker": {
		languages: ["dockerfile", "dockercompose"],
		extensions: [
			"dockerfile",
			"containerfile",
			"dockerignore",
			"containerignore",
			"docker-compose.yml",
			"docker-compose.yaml",
			"compose.yaml",
			"compose.yml",
		],
		names: [
			"dockerfile",
			"dockerfile.prod",
			"dockerfile.production",
			"dockerfile.alpha",
			"dockerfile.beta",
			"dockerfile.stage",
			"dockerfile.staging",
			"dockerfile.dev",
			"dockerfile.development",
			"dockerfile.local",
			"dockerfile.test",
			"dockerfile.testing",
			"dockerfile.ci",
			"dockerfile.web",
			"dockerfile.worker",

			"containerfile",
			"containerfile.prod",
			"containerfile.production",
			"containerfile.alpha",
			"containerfile.beta",
			"containerfile.stage",
			"containerfile.staging",
			"containerfile.dev",
			"containerfile.development",
			"containerfile.local",
			"containerfile.test",
			"containerfile.testing",
			"containerfile.ci",
			"containerfile.web",
			"containerfile.worker",

			"docker-compose.yml",
			"docker-compose.override.yml",
			"docker-compose.prod.yml",
			"docker-compose.production.yml",
			"docker-compose.alpha.yml",
			"docker-compose.beta.yml",
			"docker-compose.stage.yml",
			"docker-compose.staging.yml",
			"docker-compose.dev.yml",
			"docker-compose.development.yml",
			"docker-compose.local.yml",
			"docker-compose.test.yml",
			"docker-compose.testing.yml",
			"docker-compose.ci.yml",
			"docker-compose.web.yml",
			"docker-compose.worker.yml",

			"docker-compose.yaml",
			"docker-compose.override.yaml",
			"docker-compose.prod.yaml",
			"docker-compose.production.yaml",
			"docker-compose.alpha.yaml",
			"docker-compose.beta.yaml",
			"docker-compose.stage.yaml",
			"docker-compose.staging.yaml",
			"docker-compose.dev.yaml",
			"docker-compose.development.yaml",
			"docker-compose.local.yaml",
			"docker-compose.test.yaml",
			"docker-compose.testing.yaml",
			"docker-compose.ci.yaml",
			"docker-compose.web.yaml",
			"docker-compose.worker.yaml",

			"compose.yaml",
			"compose.override.yaml",
			"compose.prod.yaml",
			"compose.production.yaml",
			"compose.alpha.yaml",
			"compose.beta.yaml",
			"compose.stage.yaml",
			"compose.staging.yaml",
			"compose.dev.yaml",
			"compose.development.yaml",
			"compose.local.yaml",
			"compose.test.yaml",
			"compose.testing.yaml",
			"compose.ci.yaml",
			"compose.web.yaml",
			"compose.worker.yaml",

			"compose.yml",
			"compose.override.yml",
			"compose.prod.yml",
			"compose.production.yml",
			"compose.alpha.yml",
			"compose.beta.yml",
			"compose.stage.yml",
			"compose.staging.yml",
			"compose.dev.yml",
			"compose.development.yml",
			"compose.local.yml",
			"compose.test.yml",
			"compose.testing.yml",
			"compose.ci.yml",
			"compose.web.yml",
			"compose.worker.yml",
		],
	},
	"drizzle-orm": {
		names: ["drizzle.config.ts", "drizzle.config.js"],
	},
	"eslint": {
		names: [
			".eslintignore",
			".eslintcache,",
			".eslintrc.js",
			".eslintrc.cjs",
			".eslintrc.yaml",
			".eslintrc.yml",
			".eslintrc.json",
			".eslintrc-md.js",
			".eslintrc-jsdoc.js",
			".eslintrc",
			"eslint.config.js",
			"eslint.config.cjs",
			"eslint.config.mjs",
			"eslint.config.ts",
			"eslint.config.cts",
			"eslint.config.mts",
		],
	},
	"event": {
		extensions: ["zap", "blink"],
	},
	"font": {
		extensions: ["woff", "woff2", "ttf", "eot", "suit", "otf", "bmap", "fnt", "odttf", "ttc", "font", "fonts", "sui", "ntf", "mrf"],
	},
	"git": {
		languages: ["git", "git-commit", "git-rebase", "ignore"],
		extensions: ["patch", "gitlab-ci.yml", "gitlab-ci.yaml"],
		names: [
			".git",
			".gitignore",
			".gitmessage",
			".gitignore-global",
			".gitignore_global",
			".gitattributes",
			".gitattributes-global",
			".gitattributes_global",
			".gitconfig",
			".gitmodules",
			".gitkeep",
			".keep",
			".gitpreserve",
			".gitinclude",
			".git-blame-ignore",
			".git-blame-ignore-revs",
			".git-for-windows-updater",
			"git-history",
			".gitpod.yml",
		],
	},
	"gleam": {
		languages: ["gleam"],
		extensions: ["gleam"],
		names: ["gleam.toml"],
	},
	"go-mod": {
		names: ["go.mod", "go.sum", "go.work", "go.work.sum"],
	},
	"go": {
		languages: ["go"],
		extensions: ["go", "tmpl", "templ", "gotmpl", "gohtml", "go.tmp", "go.html"],
	},
	"h": {
		extensions: ["h", "hh", "hpp", "hxx", "h++", "hp", "tcc", "inl"],
	},
	"hcl": {
		languages: ["hcl"],
		extensions: ["hcl"],
	},
	"html": {
		languages: ["html"],
		extensions: ["htm", "html", "xhtml", "html_vm", "asp"],
	},
	"image": {
		extensions: [
			"png",
			"jpeg",
			"jpg",
			"gif",
			"ico",
			"tif",
			"tiff",
			"psd",
			"psb",
			"ami",
			"apx",
			"avif",
			"bmp",
			"bpg",
			"brk",
			"cur",
			"dds",
			"dng",
			"exr",
			"fpx",
			"gbr",
			"img",
			"jbig2",
			"jb2",
			"jng",
			"jxr",
			"pgf",
			"pic",
			"raw",
			"webp",
			"eps",
			"afphoto",
			"ase",
			"aseprite",
			"clip",
			"cpt",
			"heif",
			"heic",
			"kra",
			"mdp",
			"ora",
			"pdn",
			"reb",
			"sai",
			"tga",
			"xcf",
			"jfif",
			"ppm",
			"pbm",
			"pgm",
			"pnm",
			"icns",
		],
	},
	"java": {
		languages: ["java"],
		extensions: ["jar", "java", "class", "jsp"],
	},
	"javascript-config": {
		names: ["jsconfig.json"],
		extensions: ["jsconfig.json", "js.map", "mjs.map", "cjs.map"],
	},
	"javascript": {
		languages: ["javascript"],
		extensions: ["esx", "js", "cjs", "mjs"],
	},
	"json": {
		languages: ["json", "jsonl", "jsonc", "hjson", "snippets"],
		extensions: ["json", "jsonc", "tsbuildinfo", "json5", "jsonl", "ndjson", "hjson", "webmanifest", "code-snippets"],
		names: [".jscsrc", ".jshintrc", "composer.lock", ".jsbeautifyrc", ".esformatter", "cdp.pid", ".lintstagedrc", ".whitesource"],
	},
	"julia": {
		languages: ["julia", "juliamarkdown"],
		extensions: ["jl"],
	},
	"kotlin": {
		extensions: ["kt", "kts"],
	},
	"license": {
		extensions: ["cer", "cert", "crt", "pfx"],
		names: [
			"copying",
			"copying.md",
			"copying.rst",
			"copying.txt",
			"copyright",
			"copyright.md",
			"copyright.rst",
			"copyright.txt",
			"license",
			"license-agpl",
			"license-apache",
			"license-bsd",
			"license-mit",
			"license-gpl",
			"license-lgpl",
			"unlicense",
			"license.md",
			"license.rst",
			"license.txt",
			"licence",
			"licence-agpl",
			"licence-apache",
			"licence-bsd",
			"licence-mit",
			"licence-gpl",
			"licence-lgpl",
			"unlicence",
			"licence.md",
			"licence.rst",
			"licence.txt",
		],
	},
	"lua": {
		languages: ["lua"],
		extensions: ["lua"],
		names: [".luacheckrc"],
	},
	"luau-config": {
		names: [".luaurc", ".robloxrc"],
	},
	"luau-def": {
		extensions: ["d.luau"],
	},
	"luau": {
		languages: ["luau"],
		extensions: ["luau"],
	},
	"markdown": {
		languages: ["markdown"],
		extensions: ["md", "mdx", "markdown", "rst"],
	},
	"next": {
		names: ["next.config.js", "next.config.mjs", "next.config.ts", "next.config.mts"],
	},
	"nim": {
		languages: ["nim", "nimble"],
		extensions: ["nim", "nims", "nimble", "paths"],
	},
	"nix": {
		languages: ["nix"],
		extensions: ["nix"],
		names: ["flake.lock"],
	},
	"node": {
		names: [
			"package.json",
			"package-lock.json",
			".nvmrc",
			".esmrc",
			".node-version",
			"pnpm-lock.yaml",
			"pnpm-workspace.yaml",
			".pnpmfile.cjs",
		],
	},
	"npm": {
		names: [".npmignore", ".npmrc"],
	},
	"nuxt": {
		names: [".nuxtignore", ".nuxtrc", "nuxt.config.js", "nuxt.config.ts"],
	},
	"pcss": {
		languages: ["postcss"],
		extensions: ["pcss", "sss"],
		names: [
			"postcss.config.js",
			"postcss.config.cjs",
			"postcss.config.mjs",
			"postcss.config.ts",
			"postcss.config.cts",
			"postcss.config.mts",
			".postcssrc.js",
			".postcssrc.cjs",
			".postcssrc.ts",
			".postcssrc.cts",
			".postcssrc",
			".postcssrc.json",
			".postcssrc.yaml",
			".postcssrc.yml",
		],
	},
	"php": {
		languages: ["php"],
		extensions: ["php", "phtml"],
	},
	"powershell": {
		languages: ["bat", "powershell"],
		extensions: ["bat", "cmd", "ps1", "psm1", "psd1", "ps1xml", "psc1", "pssc"],
	},
	"python": {
		languages: ["python"],
		extensions: ["py", "pyc", "pyo", "pyd"],
		names: ["pyproject.toml", "requirements.txt", "requirements-dev.txt", "requirements-test.txt", ".python-version"],
	},
	"react-typescript": {
		languages: ["typescriptreact"],
		extensions: ["tsx"],
	},
	"react": {
		languages: ["javascriptreact"],
		extensions: ["jsx"],
	},
	"readme": {
		names: ["readme.md", "readme.rst", "readme.txt", "readme"],
	},
	"roblox": {
		extensions: ["rbxl", "rbxlx", "rbxm", "rbxmx", "project.json", "meta.json", "model.json"],
	},
	"ruby": {
		languages: ["ruby"],
		extensions: ["rb", "erb", "rbs"],
		names: [".ruby-version", "gemfile", "gemfile.lock"],
	},
	"rust": {
		languages: ["rust"],
		extensions: ["rs", "ron"],
	},
	"scala": {
		languages: ["scala"],
		extensions: ["scala", "sc"],
	},
	"scss": {
		languages: ["scss", "sass"],
		extensions: ["scss", "sass"],
	},
	"security": {
		names: ["security.md", "security.txt", "security"],
	},
	"shell": {
		languages: ["shellscript", "awk"],
		extensions: ["sh", "ksh", "csh", "tcsh", "zsh", "bash", "awk", "fish"],
		names: [
			"applypatch-msg",
			"pre-applypatch",
			"post-applypatch",
			"pre-commit",
			"prepare-commit-message",
			"commit-msg",
			"post-commit",
			"pre-rebase",
			"post-checkout",
			"post-merge",
			"pre-receive",
			"update",
			"post-receive",
			"post-update",
			"pre-auto-gc",
			"post-rewrite",
			"pre-push",
		],
	},
	"storybook": {
		extensions: [
			"story.svelte",
			"stories.svelte",
			"story.vue",
			"stories.vue",
			"stories.js",
			"stories.jsx",
			"stories.mdx",
			"story.js",
			"story.jsx",
			"stories.ts",
			"stories.tsx",
			"storybook.ts",
			"storybook.tsx",
			"story.ts",
			"story.tsx",
			"story.mdx",
			"stories.lua",
			"stories.luau",
			"story.lua",
			"story.luau",
			"storybook.lua",
			"storybook.luau",
		],
	},
	"svelte": {
		languages: ["svelte"],
		extensions: ["svelte"],
		names: ["svelte.config.js", "svelte.config.ts", "svelte.config.cjs", "svelte.config.mjs"],
	},
	"svg": {
		languages: ["svg"],
		extensions: ["svg"],
	},
	"swift": {
		languages: ["swift"],
		extensions: ["swift"],
	},
	"tailwind": {
		names: [
			"tailwind.js",
			"tailwind.ts",
			"tailwind.config.js",
			"tailwind.config.cjs",
			"tailwind.config.mjs",
			"tailwind.config.ts",
			"tailwind.config.cts",
			"tailwind.config.mts",
		],
	},
	"terraform": {
		languages: ["tf"],
		extensions: ["tf", "tf.json", "tfvars", "tfstate", "tfbackend"],
	},
	"test-blue": {
		extensions: [
			"spec.ts",
			"spec.cts",
			"spec.mts",
			"cy.ts",
			"e2e-spec.ts",
			"e2e-spec.cts",
			"e2e-spec.mts",
			"test.ts",
			"test.cts",
			"test.mts",
			"ts.snap",

			"spec-d.ts",
			"test-d.ts",

			"spec.tsx",
			"test.tsx",
			"tsx.snap",
			"cy.tsx",

			"spec.lua",
			"test.lua",

			"jest.config.ts",
			"jest.config.tsx",
			"jest.config.lua",
			"jest.setup.ts",
			"jest.setup.tsx",
			"jest.setup.lua",
			"jest.teardown.ts",
			"jest.teardown.tsx",
			"jest.teardown.lua",
		],
		names: ["spec.lua", "test.lua", "tests.lua"],
	},
	"test-teal": {
		extensions: [
			"spec.luau",
			"test.luau",
			"jest.config.luau",
			"jest.setup.luau",
			"jest.teardown.luau",
		],
		names: ["spec.luau", "test.luau", "tests.luau"],
	},
	"test-yellow": {
		extensions: [
			"spec.js",
			"spec.cjs",
			"spec.mjs",
			"e2e-spec.js",
			"e2e-spec.cjs",
			"e2e-spec.mjs",
			"test.js",
			"test.cjs",
			"test.mjs",
			"js.snap",
			"cy.js",
			"spec.jsx",
			"test.jsx",
			"jsx.snap",
			"cy.jsx",

			"jest.config.js",
			"jest.config.jsx",
			"jest.setup.js",
			"jest.setup.jsx",
			"jest.teardown.js",
			"jest.teardown.jsx",
		],
	},
	"text": {
		languages: ["plaintext"],
		extensions: ["txt", "pdf", "rtf", "doc", "docx"],
	},
	"todo": {
		extensions: ["todo"],
		names: ["todo.md", "todos.md", "todo.txt", "todos.txt", "todo", "todos"],
	},
	"toml": {
		languages: ["toml"],
		extensions: ["toml"],
	},
	"typescript-config": {
		extensions: ["tsconfig.json"],
		names: [
			"tsconfig.json",
			"tsconfig.app.json",
			"tsconfig.editor.json",
			"tsconfig.spec.json",
			"tsconfig.base.json",
			"tsconfig.build.json",
			"tsconfig.eslint.json",
			"tsconfig.lib.json",
			"tsconfig.lib.prod.json",
			"tsconfig.node.json",
			"tsconfig.test.json",
			"tsconfig.e2e.json",
			"tsconfig.web.json",
			"tsconfig.webworker.json",
			"tsconfig.worker.json",
			"tsconfig.config.json",
			"tsconfig.vitest.json",
			"tsconfig.cjs.json",
			"tsconfig.esm.json",
			"tsconfig.mjs.json",
			"tsconfig.doc.json",
			"tsconfig.paths.json",
			"tsconfig.main.json",
			"tsconfig.cypress-ct.json",
			"tsconfig.components.json",
		],
	},
	"typescript-def": {
		extensions: ["d.ts", "d.cts", "d.mts"],
	},
	"typescript": {
		languages: ["typescript"],
		extensions: ["ts", "cts", "mts"],
	},
	"video": {
		extensions: [
			"webm",
			"mkv",
			"flv",
			"vob",
			"ogv",
			"ogg",
			"gifv",
			"avi",
			"mov",
			"qt",
			"wmv",
			"yuv",
			"rm",
			"rmvb",
			"mp4",
			"m4v",
			"mpg",
			"mp2",
			"mpeg",
			"mpe",
			"mpv",
			"m2v",
		],
	},
	"vite": {
		names: [
			"vite.config.js",
			"vite.config.mjs",
			"vite.config.cjs",
			"vite.config.ts",
			"vite.config.cts",
			"vite.config.mts",

			"vitest.config.ts",
			"vitest.config.mts",
			"vitest.config.cts",
			"vitest.config.js",
			"vitest.config.mjs",
			"vitest.config.cjs",
			"vitest.workspace.js",
			"vitest.workspace.ts",
			"vitest.workspace.json",
		],
	},
	"vue": {
		languages: ["vue"],
		extensions: ["vue"],
		names: [
			"vue.config.js",
			"vue.config.cjs",
			"vue.config.mjs",
			"vue.config.ts",
			"vue.config.cts",
			"vue.config.mts",
			".vuerc",
		],
	},
	"web-assembly": {
		languages: ["wasm"],
		extensions: ["wasm", "wat"],
	},
	"xml": {
		languages: ["xml"],
		extensions: [
			"xml",
			"plist",
			"xsd",
			"dtd",
			"xsl",
			"xslt",
			"resx",
			"iml",
			"xquery",
			"tmLanguage",
			"manifest",
			"project",
			"xml.dist",
			"xml.dist.sample",
			"dmn",
			"jrxml",
			"xaml",
			"axaml",
		],
		names: [".htaccess"],
	},
	"yaml": {
		languages: ["yaml", "spring-boot-properties-yaml"],
		extensions: ["yml", "yaml"],
	},
	"yarn-lock": {
		names: ["yarn.lock"],
	},
	"yarn": {
		names: [
			".yarnrc",
			".yarnclean",
			".yarn-integrity",
			"yarn-error.log",
			".yarnrc.yml",
			".yarnrc.yaml",
			"yarn.config.cjs",
		],
	},
	"zig": {
		extensions: ["zig"],
	},
	"zip": {
		extensions: [
			"7z",
			"arj",
			"aseprite-extension",
			"bz",
			"bz2",
			"db",
			"gz",
			"paq8n",
			"paq8o",
			"pkg",
			"rar",
			"tar",
			"tbz",
			"tbz2",
			"tgz",
			"xz",
			"z",
			"zip",
			"zpaq",
			"zst",
		],
	},
};

export const languageIds: { [key: string]: string } = {};
export const fileNames: { [key: string]: string } = {};
export const fileExtensions: { [key: string]: string } = {};

for (const [id, value] of Object.entries(fileIcons)) {
	if (value.languages) {
		for (const lang of value.languages) {
			languageIds[lang] = id;
		}
	}

	if (value.names) {
		for (const name of value.names) {
			fileNames[name] = id;
		}
	}

	if (value.extensions) {
		for (const ext of value.extensions) {
			fileExtensions[ext] = id;
		}
	}
}
