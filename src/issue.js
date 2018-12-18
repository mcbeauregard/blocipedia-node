ReferenceError: /Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/src/views/wikis/show.ejs:38
    36|           <% if(wiki.collaborators) { %>
    37|             <% wiki.collaborators.forEach((collaborators) => { %>
 >> 38|               <li><% include("../collaborators/show.ejs", {collaborator}) %></li>
    39|               <% }) %>
    40|             <% } %>
    41|           </ul>

collaborator is not defined
    at wiki.collaborators.forEach (eval at compile (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/ejs/lib/ejs.js:549:12), <anonymous>:124:46)
    at Array.forEach (<anonymous>)
    at eval (eval at compile (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/ejs/lib/ejs.js:549:12), <anonymous>:121:27)
    at returnedFn (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/ejs/lib/ejs.js:580:17)
    at tryHandleCache (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/ejs/lib/ejs.js:223:34)
    at View.exports.renderFile [as engine] (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/ejs/lib/ejs.js:437:10)
    at View.render (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/express/lib/view.js:135:8)
    at tryRender (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/express/lib/application.js:640:10)
    at Function.render (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/express/lib/application.js:592:3)
    at ServerResponse.render (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/express/lib/response.js:1008:7)
    at ServerResponse.res.render (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/express-flash/lib/express-flash.js:29:16)
    at wikiQueries.getWiki (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/src/controllers/wikiController.js:59:13)
    at Collaborator.scope.all.then (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/src/db/queries.wikis.js:33:15)
    at tryCatcher (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/util.js:16:23)
    at Promise._settlePromiseFromHandler (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/promise.js:512:31)
    at Promise._settlePromise (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/promise.js:569:18)
    at Promise._settlePromise0 (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/promise.js:614:10)
    at Promise._settlePromises (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/promise.js:694:18)
    at Promise._fulfill (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/promise.js:638:18)
    at Promise._resolveCallback (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/promise.js:432:57)
    at Promise._settlePromiseFromHandler (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/promise.js:524:17)
    at Promise._settlePromise (/Users/michellebeauregard/Desktop/Sites/bloc/blocipedia-node/node_modules/bluebird/js/release/promise.js:569:18)