const { FuseBox, CSSPlugin, ImageBase64Plugin,CSSResourcePlugin, QuantumPlugin } = require("fuse-box");

const production = process.env.NODE_ENV === 'production'
    || process.env.ENV === 'production'
    || process.argv.includes('--production')

const fuse = FuseBox.init({
    homeDir: "front-end",
    target: "browser",
    output: "public/$name.js",
    useTypescriptCompiler: true,
    sourceMaps: true,

    plugins: [

        [CSSResourcePlugin({
            dist: 'public/css-resources',
            inline: false,
        }),
        CSSPlugin({
            group: 'app.css',
            outFile: 'public/app.css',
            inject: false,
        }),
    ],
        ImageBase64Plugin({
            userDefault: true,
            dist: 'public/css-resources'
        }),

        production && QuantumPlugin({
            bakeApiIntoBundle: 'app',
            treeshake: true,
            uglify: true,
        })
    ],
});


const bundle = fuse.bundle("app")
    .instructions(" > app.js")
if (!production) {
    fuse.dev({ port: 4444, fallback: 'index.html' })
    bundle.hmr().watch("")
}

fuse.run();