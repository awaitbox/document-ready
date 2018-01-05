/**
 * Await for this to run code after the DOM has been parsed and loaded (but not
 * sub-resources like images, scripts, etc).
 *
 * @example
 * ```js
 * async function main() {
 *     await documentReady()
 *     console.log('Document ready!')
 * }
 * main()
 * ```
 *
 * The _passThrough private arg is not public API, it makes it useful to
 * write Promise chains like this:
 *
 * @example
 * ```js
 * fetch( ... )
 *   .then( ... )
 *   .then( documentReady ) // passes data through
 *   .then( data => console.log( 'use the data!', data ) )
 * ```
 */
export default
async function documentReady( _passThrough ) {

    if ( document.readyState === 'loading' ) {
        await new Promise( resolve => {
            document.addEventListener( 'DOMContentLoaded', resolve )
        } )
    }

    return _passThrough

}
