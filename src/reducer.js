const initialState = {
    active: false,
    reset: true,
    startDate: (new Date()).getTime(),
    value: 0
};

export default (state = initialState, action) => {
    switch (action.type) {
        case 'START':
            return {...state, active: true, reset: false, startDate: (new Date()).getTime()};
        case 'STOP':
            return {...state, active: false};
        case 'RESET':
            return {...state, active: false, reset: true, value: 0};
        case 'INCREMENT':
            return {...state, value: state.value + (new Date()).getTime() - state.startDate, startDate: (new Date()).getTime()};
        default:
            return state;
    }
};
