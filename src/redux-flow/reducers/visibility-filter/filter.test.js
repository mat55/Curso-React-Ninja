import { expect } from 'chai'
import deepFreeze from 'deep-freeze'
import filter, { initialState } from './index'
import {
    SET_VISIBILITY_FILTER,
    SHOW_ALL,
    SHOW_COMPLETED,
    SHOW_ACTIVE
    } from './action'

it('Should be a function', () => {
  expect(filter).to.be.a('function')
})

it('Should show all todo items', () => {
  const before = SHOW_COMPLETED
  const action = deepFreeze({
    type: SET_VISIBILITY_FILTER,
    payload: { filter: SHOW_ALL }
  })
  const after = SHOW_ALL
  expect(filter(before, action)).to.be.equal(after)
})

it('Should show completed todo items', () => {
  const before = SHOW_ALL
  const action = deepFreeze({
    type: SET_VISIBILITY_FILTER,
    payload: { filter: SHOW_COMPLETED }
  })
  const after = SHOW_COMPLETED
  expect(filter(before, action)).to.be.equal(after)
})

it('Should show active todo items', () => {
  const before = SHOW_ALL
  const action = deepFreeze({
    type: SET_VISIBILITY_FILTER,
    payload: { filter: SHOW_ACTIVE }
  })
  const after = SHOW_ACTIVE
  expect(filter(before, action)).to.be.equal(after)
})

it('Should return latest state when an action is unknown', () => {
  const before = SHOW_ALL
  const action = deepFreeze({
    type: 'UNKNOWN'
  })
  const after = SHOW_ALL
  expect(filter(before, action)).to.be.equal(after)
})

it('Should return initialState when a state is undefined', () => {
  const before = undefined
  const action = deepFreeze({})
  const after = initialState
  expect(filter(before, action)).to.be.equal(after)
})
