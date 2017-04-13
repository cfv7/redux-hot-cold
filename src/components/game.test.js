import React from 'react'
import {shallow, mount} from 'enzyme'
import Game from './game'
import { makeGuesses, newGame, toggleInfoModal } from '../actions' 
import store from '../store'

describe('<Game />', () => {

  let dummyGuesses = []
  beforeAll(() => {
    for(let i = 0; i < 10; i++ ) {
      dummyGuesses.push(i)
    }
  })

  it('Should render without crashing', () => {
    shallow(<Game />)
  })
  it('Can add guesses to state', () => {
    const dispatch = jest.fn()
    const guess = 7
    const wrapper = mount(<Game 
      guess={guess} guesses={[]} 
      dispatch={dispatch} />)
    const instance = wrapper.instance()
    instance.makeGuess(guess)
    expect(dispatch).toHaveBeenCalledWith(makeGuess(guess))

  })
})