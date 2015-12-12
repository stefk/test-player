import debounce from 'lodash/function/debounce'

/**
 * Creates a debounced event handler that will execute
 * a callback after a certain amount of time. Any subsequent
 * call in the meanwhile postpones the callback execution by
 * the same amount of time.
 *
 * @param {Function} callback
 * @param {Number}   delay
 */
export function makeEventDebouncer(callback, delay) {
  const debounced = debounce(callback, delay)

  return e => {
    e.persist()
    debounced(e)
  }
}
