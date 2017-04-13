import { newGame, makeGuess, toggleInfoModal, NEW_GAME, MAKE_GUESS, TOGGLE_INFO_MODAL} from './actions'

describe('newGame', () => {
  it('Should return the action newGame', () => {
    const action = newGame()
    expect(action.type).toEqual(NEW_GAME)
    expect(action.correctAnswer).toBeGreaterThanOrEqual(0)
    expect(action.correctAnswer).toBeLessThanOrEqual(100)
  })
})

describe('makeGuess', () => {
  it('Should return the action makeGuess', () => {
    const guess = 55
    const action = makeGuess(guess)
    expect(action.type).toEqual(MAKE_GUESS)
    expect(action.guess).toEqual(guess)
  })
})

describe('toggleInfoModal', () => {
  it('Should return the action toggleInfoModal',() => {
    const action = toggleInfoModal()
    expect(action.type).toEqual(TOGGLE_INFO_MODAL)
  })
})

