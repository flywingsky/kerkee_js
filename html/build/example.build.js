/*
 * This is an example build file that demonstrates how to use the build system for
 * require.js.
 *
 * THIS BUILD FILE WILL NOT WORK. It is referencing paths that probably
 * do not exist on your machine. Just use it as a guide.
 *
 *
 */

({
    // app顶级目录，非必选项。如果指定值，baseUrl则会以此为相对路径
    appDir: "some/path/",

    // 模块根目录。默认情况下所有模块资源都相对此目录。
    // 若该值未指定，模块则相对build文件所在目录。
    // 若appDir值已指定，模块根目录baseUrl则相对appDir。
    baseUrl: "./",

    // 配置文件目录
    mainConfigFile: '../some/path/to/main.js',

    // 设置模块别名
    // RequireJS 2.0 中可以配置数组，顺序映射，当前面模块资源未成功加载时可顺序加载后续资源
    paths: {
        "foo.bar": "../scripts/foo/bar",
        "baz": "../another/path/baz"
    },

    // 配置 CommonJS 的 package See http://requirejs.org/docs/api.html#packages for more information.
    packagePaths: [],
    packages: [],

    // 指定输出目录，若值未指定，则相对 build 文件所在目录
    dir: "../some/path",

    // 在 RequireJS 2.0.2 中，输出目录的所有资源会在 build 前被删除
    // 值为 true 时 rebuild 更快，但某些特殊情景下可能会出现无法预料的异常
    keepBuildDir: true,

    // 国际化配置
    locale: "en-us",

    // JS 文件优化方式，目前支持以下几种：
    //   uglify: （默认） 使用 UglifyJS 来压缩代码
    //   closure: 使用 Google's Closure Compiler 的简单优化模式
    //   closure.keepLines: 使用 closure，但保持换行
    //   none: 不压缩代码
    optimize: "uglify",

    // 使用 UglifyJS 时的可配置参数
    // See https://github.com/mishoo/UglifyJS for the possible values.
    uglify: {
        toplevel: true,
        ascii_only: true,
        beautify: true,
        max_line_length: 1000
    },

    // 使用 Closure Compiler 时的可配置参数
    closure: {
        CompilerOptions: {},
        CompilationLevel: 'SIMPLE_OPTIMIZATIONS',
        loggingLevel: 'WARNING'
    },

    // CSS 优化方式，目前支持以下几种：
    // none: 不压缩，仅合并
    // standard: 标准压缩，移除注释、换行，以及可能导致 IE 解析出错的代码
    // standard.keepLines: 除标准压缩外，保留换行
    // standard.keepComments: 除标准压缩外，保留注释 (r.js 1.0.8+)
    // standard.keepComments.keepLines: 除标准压缩外，保留注释和换行 (r.js 1.0.8+)
    optimizeCss: "standard.keepLines",

    // 是否忽略 CSS 资源文件中的 @import 指令
    cssImportIgnore: null,

    // 一般用于命令行，可将多个 CSS 资源文件打包成单个 CSS 文件
    cssIn: "path/to/main.css",
    out: "path/to/css-optimized.css",

    // 处理所有的文本资源依赖项，从而避免为加载资源而产生的大量单独xhr请求
    inlineText: true,

    // 是否开启严格模式
    // 由于很多浏览器不支持 ES5 的严格模式，故此配置默认值为 false
    useStrict: false,

    //Specify build pragmas. If the source files contain comments like so:
    //>>excludeStart("fooExclude", pragmas.fooExclude);
    //>>excludeEnd("fooExclude");
    //Then the comments that start with //>> are the build pragmas.
    //excludeStart/excludeEnd and includeStart/includeEnd work, and the
    //the pragmas value to the includeStart or excludeStart lines
    //is evaluated to see if the code between the Start and End pragma
    //lines should be included or excluded. If you have a choice to use
    //"has" code or pragmas, use "has" code instead. Pragmas are harder
    //to read, but they can be a bit more flexible on code removal vs.
    //has-based code, which must follow JavaScript language rules.
    //Pragmas also remove code in non-minified source, where has branch
    //trimming is only done if the code is minified via UglifyJS or
    //Closure Compiler.
    pragmas: {
        fooExclude: true
    },

    //Same as "pragmas", but only applied once during the file save phase
    //of an optimization. "pragmas" are applied both during the dependency
    //mapping and file saving phases on an optimization. Some pragmas
    //should not be processed during the dependency mapping phase of an
    //operation, such as the pragma in the CoffeeScript loader plugin,
    //which wants the CoffeeScript compiler during the dependency mapping
    //phase, but once files are saved as plain JavaScript, the CoffeeScript
    //compiler is no longer needed. In that case, pragmasOnSave would be used
    //to exclude the compiler code during the save phase.
    pragmasOnSave: {
        //Just an example
        excludeCoffeeScript: true
    },

    //Allows trimming of code branches that use has.js-based feature detection:
    //https://github.com/phiggins42/has.js
    //The code branch trimming only happens if minification with UglifyJS or
    //Closure Compiler is done. For more information, see:
    //http://requirejs.org/docs/optimization.html#hasjs
    has: {
        'function-bind': true,
        'string-trim': false
    },

    //Similar to pragmasOnSave, but for has tests -- only applied during the
    //file save phase of optimization, where "has" is applied to both
    //dependency mapping and file save phases.
    hasOnSave: {
        'function-bind': true,
        'string-trim': false
    },

    // 命名空间，完整实例可以参考 http://requirejs.org/docs/faq-advanced.html#rename
    namespace: 'foo',

    // 跳过 pragmas 处理
    skipPragmas: false,

    //If skipModuleInsertion is false, then files that do not use define()
    //to define modules will get a define() placeholder inserted for them.
    //Also, require.pause/resume calls will be inserted.
    //Set it to true to avoid this. This is useful if you are building code that
    //does not use require() in the built project or in the JS files, but you
    //still want to use the optimization tool from RequireJS to concatenate modules
    //together.
    skipModuleInsertion: false,

    //Specify modules to stub out in the optimized file. The optimizer will
    //use the source version of these modules for dependency tracing and for
    //plugin use, but when writing the text into an optimized layer, these
    //modules will get the following text instead:
    //If the module is used as a plugin:
    //    define({load: function(id){throw new Error("Dynamic load not allowed: " + id);}});
    //If just a plain module:
    //    define({});
    //This is useful particularly for plugins that inline all their resources
    //and use the default module resolution behavior (do *not* implement the
    //normalize() method). In those cases, an AMD loader just needs to know
    //that the module has a definition. These small stubs can be used instead of
    //including the full source for a plugin.
    stubModules: ['text', 'bar'],

    //If it is not a one file optimization, scan through all .js files in the
    //output directory for any plugin resource dependencies, and if the plugin
    //supports optimizing them as separate files, optimize them. Can be a
    //slower optimization. Only use if there are some plugins that use things
    //like XMLHttpRequest that do not work across domains, but the built code
    //will be placed on another domain.
    optimizeAllPluginResources: false,

    // 处理级联依赖，默认为 false，此时能够在运行时动态 require 级联的模块。为 true 时，级联模块会被一同打包
    findNestedDependencies: false,

    //If set to true, any files that were combined into a build layer will be
    //removed from the output folder.
    removeCombined: false,

    modules: [
        {
            // 模块 alias 名称
            name: "foo/bar/bop",

            //For build profiles that contain more than one modules entry,
            //allow overrides for the properties that set for the whole build,
            //for example a different set of pragmas for this module.
            //The override's value is an object that can
            //contain any of the other build options in this file.
            //
            override: {
                pragmas: {
                    fooExclude: true
                }
            }
        },

        // 将 alias 别名为 foo/bar/bop 和 foo/bar/bee 的模块打包成一个文件
        {
            name: "foo/bar/bop",
            include: ["foo/bar/bee"]
        },

        // 将 foo/bar/bip 及其依赖项一并打包，但不包括 foo/bar/bop
        {
            name: "foo/bar/bip",
            exclude: [
                "foo/bar/bop"
            ]
        },

        // 排除指定模块，但若该模块对所打包文件有级联依赖关系，则仍会被打包进去
        {
            name: "foo/bar/bin",
            excludeShallow: [
                "foo/bar/bot"
            ]
        },

        // insertRequire 在 RequireJS 2.0 中被引入，在 built 文件的末尾插入 require([]) 以触发模块加载并运行
        // insertRequire: ["foo/baz"] 即 require(["foo/baz"])
        // 详情见 https://github.com/jrburke/almond
        {
            name: "foo/baz",
            insertRequire: ["foo/baz"]
        }
    ],

    // 仅优化单个模块及其依赖项
    name: "foo/bar/bop",
    include: ["foo/bar/bee"],
    insertRequire: ['foo/bar/bop'],
    out: "path/to/optimized-file.js",

    // An alternative to "include"
    deps: ["foo/bar/bee"],

    // RequireJS 2.0 中，out 可以是一个函数
    out: function (text) {
        // 自定义优化内容
    },

    // 模块包裹函数，顾名思义使用特定内容包裹模块，如此一来 define/require 就不再是全局变量，在 end 中可以暴露一些全局变量供整个函数使用
    wrap: {
        start: "(function() {",
        end: "}());"
    },

    // 另一种模块包裹方式
    // (function() { + content + }());
    wrap: true,

    // 另一种模块包裹方式，包裹内容可以是指定文件
    wrap: {
        startFile: "part/start.frag",
        endFile: "parts/end.frag"
    },

    // 不优化某些文件
    fileExclusionRegExp: /^\./,

    // 默认保留模块的 license 注释
    preserveLicenseComments: true,

    // 设置 logging level
    // TRACE: 0,
    // INFO: 1,
    // WARN: 2,
    // ERROR: 3,
    // SILENT: 4
    // Default is 0.
    logLevel: 0,

    // 在每个文件模块被读取时的操作函数，可在函数体内作适当变换
    onBuildRead: function (moduleName, path, contents) {
        return contents.replace(/foo/g, 'bar');
    },

    // 在每个文件模块被写入时的操作函数
    onBuildWrite: function (moduleName, path, contents) {
        return contents.replace(/bar/g, 'foo');
    },

    // 若为true，优化器会强制在文件中包裹一层 define(require, exports, module) {})
    cjsTranslate: true,

    //Introduced in 2.0.2: a bit experimental.
    //Each script in the build layer will be turned into
    //a JavaScript string with a //@ sourceURL comment, and then wrapped in an
    //eval call. This allows some browsers to see each evaled script as a
    //separate script in the script debugger even though they are all combined
    //in the same file. Some important limitations:
    //1) Do not use in IE if conditional comments are turned on, it will cause
    //errors:
    //http://en.wikipedia.org/wiki/Conditional_comment#Conditional_comments_in_JScript
    //2) It is only useful in optimize: 'none' scenarios. The goal is to allow
    //easier built layer debugging, which goes against minification desires.
    useSourceUrl: true
})