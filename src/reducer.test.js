import {makeGuess, toggleInfoModal, newGame,
MAKE_GUESS, TOGGLE_INFO_MODAL, NEW_GAME} from './actions'
import {hotAndColdReducer} from './reducer'


describe('hotAndColdReducer', () => {
  const guesses = []
  const guessOne = 12
  const guessTwo = 13
  const feedback = 'Make your guess!'
  const correctAnswer = Math.round(Math.random() * 100)
  const showInfoModal = false

  it('Should set the initial state when nothing is passed in', () => {
    const state = hotAndColdReducer(undefined, {type: 'xyz'})
    expect(state.correctAnswer).toBeGreaterThanOrEqual(0)
    expect(state.correctAnswer).toBeLessThanOrEqual(100)
    expect(Object.keys(state).length).toEqual(4)
    expect(state).toMatchObject({
      guesses: guesses,
      feedback: feedback,
      showInfoModal: showInfoModal
    })
  })

  it('Should return the current state on an unknown action', () => {
    let currentState = {}
    const state = hotAndColdReducer(currentState, {type: 'xyz'})
    expect(state).toBe(currentState)
  })

  describe('newGame', () => {
    it('Should start new game', () => {
      const state = hotAndColdReducer(undefined, {type: NEW_GAME, correctAnswer})
      console.log(state)
      expect(state.correctAnswer).toBeGreaterThanOrEqual(0)
      expect(state.correctAnswer).toBeLessThanOrEqual(100)
      expect(Object.keys(state).length).toEqual(5)
      expect(state).toMatchObject({
        guesses: guesses,
        feedback: feedback,
        showInfoModal: showInfoModal
      })
    })
  })

  describe('makeGuess', () => {
    it('Should make guesses', () => {
      let state = {
        guesses: [],
        feedback: 'Make your guess!',
        correctAnswer: Math.round(Math.random() * 100),
        showInfoModal: false
      }
      state = hotAndColdReducer(state, makeGuess(guessOne))
      state = hotAndColdReducer(state, makeGuess(guessTwo))
      expect(state.guesses.length).toEqual(2)
    })
  })

  describe('showInfoModal', () => {
    it('Should toggle info modal', () => {
      let state = {
        guesses: [],
        feedback: 'Make your guess!',
        correctAnswer: Math.round(Math.random() * 100),
        showInfoModal: false
      }
      state = hotAndColdReducer(state, toggleInfoModal())
      expect(state.showInfoModal).toBe(true)
    })
  })  


})