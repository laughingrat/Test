import $ from 'jquery';
import Promise from 'bluebird';
import fetch from 'isomorphic-fetch';
import xhr from 'w3c-xmlhttprequest';

global.XMLHttpRequest = xhr.XMLHttpRequest;
global.$ = $;
global.Promise = Promise;
global.fetch = fetch;
