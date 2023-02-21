module.exports = {
    siteUrl: 'https://serce.me',
    generateRobotsTxt: false,
    generateIndexSitemap: false,
    transform: async (config, path) => {
        return {
            loc: path,
        }
    },
}