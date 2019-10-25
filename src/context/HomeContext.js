import React from 'react';
import axios from 'axios';
import { withRouter } from "react-router";
import { Loading } from '../components/Loading';

//FOR CACHING
import LRU from 'lru-cache';
import md5 from 'md5';
import produce from 'immer';//MUTATE DATA IN JS

const homeEndpoint = `http://ostrapark.narciss-taurus.de/wordpress/wp-json/ostra/v1/home`;

const initialState = {
	loading: true,
	error: '',
	cache: [() => {}, ''],
	posts: []
};

function apiCache(res, req ){
	const cache = new LRU(200);
	const key = `${md5(JSON.stringify(req))}`;
	const value = cache.get(key) || {status: 'new', data: null};
	
	value.data = res;
	cache.set(key, produce(value, draft => {
		draft.status = 'resolved';
		draft.data = res;
	}));
	console.log(value)
}

const reducer = (currentState, action) => {
	switch(action.type){
		case 'FETCH_SUCCESS':
			return {
				loading: false,
				posts: action.payload,
				// cache: [localStorage.setItem('session', action.payload), 'Cached successfully'],
				// cache: [() => {}, ''],
				cache: [apiCache(action.payload, homeEndpoint), 'Cached successfully'],
				error: ''
			}
		case 'FETCH_ERROR':
			return {
				loading: false,
				posts: [],
				cache: [() => {}, 'No cache cuz there\'s no data'],
				error: 'Something went wrong with fetching!'
			}
		default:
			return currentState;
	}
};

export const HomeContext = React.createContext();

export const HomeProvider = (props) => {
	const [state, dispatch] = React.useReducer(reducer, initialState);

	React.useEffect(() => {
		const CancelToken = axios.CancelToken;
		const source = CancelToken.source();

		axios.get(homeEndpoint, { cancelToken: source.token })
			.then(response => {
				dispatch({type: 'FETCH_SUCCESS', payload: response.data})
			})
			.catch(error => {
				dispatch({type: 'FETCH_ERROR'})
			})

		return () => {
			source.cancel()
		}
	}, []);

	return(
		<HomeContext.Provider value={[state, dispatch]} >
			{console.log(state)}
			{state.loading ? <Loading/> : props.children }
		</HomeContext.Provider>
	)

};


export const HomeProviderWithRouter = withRouter(HomeContext);