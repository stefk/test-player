/**
 * Returns a function that will execute a callback
 * after a certain amount of time. Any call to that
 * function in the meanwhile will postpone the callback
 * execution by the same amount of time, thus preventing
 * any concurrent executions.
 *
 * @param {Number}   time
 * @param {Function} callback
 */
export function delayUnique(time, callback) {
  var timeout = false

  return (...args) => {
    if (timeout) {
      clearTimeout(timeout)
    }

    timeout = setTimeout(() => {
      timeout = false
      callback.apply(null, args)
    }, time)
  }
}
