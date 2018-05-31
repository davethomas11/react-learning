import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


let dimen = 50;

window.onpopstate = function(e) {
    QueryChange.onChange(getQuery());
}

let QueryChange = {
    onChange: (qs) => {}
}

function updateQuery(stateObject, stateName, qs) {
    window.history.pushState(stateObject, stateName, `${window.location.pathname}?${qs}`);
}

function getQuery() {
    return (function(a) {
        if (a == "") return {};
        var b = {};
        for (var i = 0; i < a.length; ++i)
        {
            var p=a[i].split('=', 2);
            if (p.length == 1)
                b[p[0]] = "";
            else
                b[p[0]] = decodeURIComponent(p[1].replace(/\+/g, " "));
        }
        return b;
    })(window.location.search.substr(1).split('&'));
}

ReactDOM.render(
    <App query={getQuery()} updateQuery={updateQuery} onQueryChange={QueryChange} />, 
    document.getElementById('root'));