export default  {
    appName: "TestName",
    appVersion: "1.0",
    apiHost: process.env.VUE_APP_API_URL,
    apiToken: localStorage.getItem('token'),
    apiPublicKey: "9waefrwae4jkbhdfgjsd99lkla21wexakljhagfh23jkxgh767",
    requestTimeout: 10000
}
