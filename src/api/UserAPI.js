import axios from 'axios'
export default {
    index( params ){
        return axios.get( 'https://jsonplaceholder.typicode.com/users', {
            params: params
        })
    },

    show( id ){
        return axios.get( 'https://jsonplaceholder.typicode.com/users'+id );
    },

    update( id, data ){
        return axios.put( 'https://jsonplaceholder.typicode.com/users'+id, data );
    },

    create( data ){
        return axios.post( 'https://jsonplaceholder.typicode.com/users', data );
    },

    delete( id ){

    }
}