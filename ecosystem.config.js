module.exports = {
    apps: [
        {
            name: "portfolio",
            script: "serve",
            args: "-s dist",
            cwd: "./",
            env: {
                NODE_ENV: "production",
            },
            instances: 1,
            autorestart: true,
            watch: false,
            max_memory_restart: "1G",
        },
    ],
};