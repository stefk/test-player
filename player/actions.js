export const INIT_PLAYER = 'INIT_PLAYER'

export function init(data, dispatch) {
  return {
    type: INIT_PLAYER,
    data,
    dispatch
  }
}
