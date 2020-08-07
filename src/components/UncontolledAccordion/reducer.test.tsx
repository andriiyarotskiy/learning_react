import {reducer, stateType} from "./reducer";

test('collapsed should be true', () => {
    const startState: stateType = {collapsed: false}
    const endState = reducer(startState, {type: 'TOGGLE'})
    expect(startState.collapsed).toBeFalsy()
    expect(endState.collapsed).toBeTruthy()
})

test('reducer should throw error because action type is incorrect', () => {
    const startState: stateType = {collapsed: false}
    expect(() => {
        reducer(startState, {type: 'FAKE'})
    }).toThrowError()
})