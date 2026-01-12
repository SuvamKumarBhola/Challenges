export const initialState = {
    past: [],
    present: null,
    future: []
};

export const historyReducer = (state, action) => {
    const { past, present, future } = state;

    switch (action.type) {
        case 'UNDO':
            if (past.length === 0) return state;

            const previous = past[past.length - 1];
            const newPast = past.slice(0, past.length - 1);

            return {
                past: newPast,
                present: previous,
                future: [present, ...future]
            };

        case 'REDO':
            if (future.length === 0) return state;

            const next = future[0];
            const newFuture = future.slice(1);

            return {
                past: [...past, present],
                present: next,
                future: newFuture
            };

        case 'SET':
            if (action.newPresent === present) return state; 

            return {
                past: [...past, present],
                present: action.newPresent,
                future: [] 
            };

        case 'RESET':
            return {
                past: [],
                present: action.newPresent,
                future: []
            };

        default:
            return state;
    }
};