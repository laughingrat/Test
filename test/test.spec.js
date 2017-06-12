// import $ from 'jquery';
// import http from 'xmlhttprequest';
// import fetch from 'isomorphic-fetch';
// import XMLHttpRequest from 'node-http-xhr';

// jasmine.DEFAULT_TIMEOUT_INTERVAL = 50000;

describe('test', () => {
  it('should fetch success....', (done) => {

    return fetch('http://www.ebay.com/')
      .then((res) => {
        console.log(res);
        done();
      })
      .catch(err => console.log(err));
  })

  it('should get success....', (done) => {
    $.get('http://www.ebay.com/', (res) => {
      console.log(res);
      done();
    }).fail((xhr, statusText, err) => {
      console.log(statusText, err);
    })
  })

  it('test xmlhttp', (done) => {

    const xhr = new XMLHttpRequest();



    xhr.onload = (xhr, success, error) => {
      console.log(success);
    };

    xhr.onreadystatechange = () => {
      console.log('****', xhr.readyState)
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          console.log(xhr.responseText)
        } else {
          console.log("Error", xhr.statusText, xhr.responseText);
        }
      }
    }

    xhr.onerror = (error) => {
      console.log(error);
      console.log(xhr.status, xhr.statusText);
    };

    xhr.ontimeout = () => console.log('timeout');

    xhr.onabort = () => console.log('abort');
    // Note: You may not use a timeout for synchronous requests with an owning window.
    // (https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest)

    xhr.open('get', 'http://www.ebay.com/', true);
    xhr.send(null);

  })
})
