import api from '/api/api'
import leagues from '/api/football'

export default (context, inject) => {
	inject('api', api)
	context.$api = api
	
	inject('leagues', leagues)
	context.leagues = leagues
}
