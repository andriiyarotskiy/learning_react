export type stateType = {
    collapsed: boolean
}
export type actionType = {
    type: string
}
export const reducer = (state: stateType, action: actionType): stateType => {
    switch (action.type) {
        case 'TOGGLE' :
            return {
                ...state,
                collapsed: !state.collapsed
            }
        default :
            throw new Error('Bad Action Type')
    }
    return state
}