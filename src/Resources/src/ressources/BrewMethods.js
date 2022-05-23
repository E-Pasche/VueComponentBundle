import { APISettings } from './config.js';

export default {
    
    index( ){
        return fetch( APISettings.baseURL + '/books', {
            method: 'GET',
            headers: APISettings.headers
        } )
        .then( function( response ){
            if( response.status != 200 ){
                throw response.status;
            }else{
                return response.json();
            }
        });
    },

    store( data ){
        APISettings.headers.set('Content-Type', 'application/json');

        return fetch( APISettings.baseURL + '/books', {
            method: 'POST',
            headers: APISettings.headers,
            body: data
        } )
        .then( function( response ){
            if( response.status != 201 ){
                throw response.status;
            }else{
                console.log('test')
                return response.json();
            }
        }.bind(this))
        .then( function( data ){
            console.log('test2')
            this.fetchResponse = data;
        }.bind(this))
        .catch( function( error ){
            this.fetchError = error;
        }.bind(this));
    }
}