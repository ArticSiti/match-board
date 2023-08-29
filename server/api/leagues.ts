export default defineEventHandler((value) => {
    let data = `/v3/football/${value}?api_token=3Njjml2SszeSdSXvq1RXjVDQsE6gEI83a2gkral6aDe8AAnb7od5vLSsn7gi`
    return {
        data
    }
})