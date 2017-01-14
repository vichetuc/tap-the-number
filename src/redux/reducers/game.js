/* @flow */
import { pullAt, takeRight } from 'lodash'
import type { Action } from 'src/redux/types'
import type { Tile } from 'src/types'

// ===========================
//   STATE TYPE
// ===========================
export type State = {
  board: Array<Tile>,
  isRunning: boolean,
  difficulty: number
}

// ===========================
//   INITIAL STATE
// ===========================
export const initialState: State = {
  board: [],
  isRunning: false,
  difficulty: 1
}

// ===========================
//   REDUCER
// ===========================
export default (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case 'BUILD_BOARD':
      return { ...state, board: action.payload.board, difficulty: action.payload.difficulty, isRunning: true }

    default:
      return state
  }
}

// ===========================
//   SELECTORS
// ===========================
// export const getVisibleTiles = ({ game }: { game: State}): Array<Tile> => {
  // return takeRight(game.tiles, 5)
// }
