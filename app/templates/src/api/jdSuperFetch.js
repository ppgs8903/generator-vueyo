//超时的FETCH
export default function jdSuperFetch(fetch_promise, timeout) {
  var abort_fn = null;
  var abort_promise = new Promise(function(resolve, reject) {
    abort_fn = function() {
      reject('abort promise');
    };
  });
  var abortable_promise = Promise.race([
    fetch_promise,
    abort_promise
  ]);
  setTimeout(function() {
    abort_fn();
  }, timeout);
  return abortable_promise;
}


