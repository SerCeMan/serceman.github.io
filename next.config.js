/** @type {import('next').NextConfig} */
module.exports = {
    async redirects() {
        return [
            {
                source: '/01-02-2023-jvm-field-guide-memory',
                destination: '/2023-02-01-jvm-field-guide-memory',
                permanent: false,
            },
            {
                source: '/01-06-2016-wild-panama',
                destination: '/2016-06-01-wild-panama',
                permanent: false,
            },
            {
                source: '/02-10-2023-hey-computer-make-me-a-font',
                destination: '/2023-10-02-hey-computer-make-me-a-font',
                permanent: false,
            },
            {
                source: '/14-10-2021-the-five-lies-analysis',
                destination: '/2021-10-14-the-five-lies-analysis',
                permanent: false,
            },
            {
                source: '/16-05-2019-the-matter-of-time',
                destination: '/2019-05-16-the-matter-of-time',
                permanent: false,
            },
            {
                source: '/18-11-2020-allocate-direct',
                destination: '/2020-11-18-allocate-direct',
                permanent: false,
            },
            {
                source: '/21-03-2023-write-predictable-software-not-ergonomic',
                destination: '/2023-03-21-write-predictable-software-not-ergonomic',
                permanent: false,
            },
            {
                source: '/22-06-2015-jnr-fuse',
                destination: '/2015-06-22-jnr-fuse',
                permanent: false,
            },
            {
                source: '/23-07-2020-you-dont-need-no-service-mesh',
                destination: '/2020-07-23-you-dont-need-no-service-mesh',
                permanent: false,
            },
            {
                source: '/23-12-2024-abc-learning-the-alphabet-with-java-annotations',
                destination: '/2024-12-23-abc-learning-the-alphabet-with-java-annotations',
                permanent: false,
            },
            {
                source: '/26-04-2023-platform-engineering-in-the-era-of-llms',
                destination: '/2023-04-26-platform-engineering-in-the-era-of-llms',
                permanent: false,
            },
            {
                source: '/29-06-2017-fantastic-dsls',
                destination: '/2017-06-29-fantastic-dsls',
                permanent: false,
            },
        ];
    },
    images: {
        unoptimized: true,
    },
    output: 'export',
    distDir: 'docs',
};
