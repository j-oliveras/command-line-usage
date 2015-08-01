module.exports = {
    options: {
        title: "a typical app",
        description: "Generates something useful",
        forms: [
            "$ cat input.json | my-app [<options>]",
            "$ my-app <files>"
        ],
        groups: {
            main: { 
                title: "Main options",
                description: "This group contains the most important options."
            }
        },
        footer: "Project home: https://github.com/me/my-app",
        hide: [ "five" ]
    },
    data: [
        { name: "help", alias: "h", type: Boolean, description: "Display this usage guide.", group: "main" },
        { name: "files", alias: "f", type: String, multiple: true, defaultOption: true, description: "The input files to process", group: "main" },
        { name: "timeout", alias: "t", type: Number, description: "Timeout value in ms", group: "main" }
    ]
};