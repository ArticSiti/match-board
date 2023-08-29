import {ref} from 'vue'

export default function useFetch(url, options = {}) {
	const data = ref(null)
	const error = ref(null)
	const loading = ref(false)
	const {signal, abort} = new AbortController()
	
	loading.value = true
	const baseUrl = '/v3/'
	const apiKey = '?api_token=3Njjml2SszeSdSXvq1RXjVDQsE6gEI83a2gkral6aDe8AAnb7od5vLSsn7gi'
	const headers = {
		'Content-Type': 'application/json',
	}
	if (options.headers) {
		options.headers = {...headers, ...options.headers}
	}
	const fetchData = async () => {
		try {
			const res  = await fetch(`${baseUrl}${url}${apiKey}`,{signal, ...options})
			if(!res.ok){
				error.value = "could not fetch data"
			}
			data.value = await  res.json()
		} catch (err){
			error.value = err.message
		}
		loading.value = false
	}
	return {data, error, loading, abort, fetchData}
}