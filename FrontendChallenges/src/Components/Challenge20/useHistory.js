import { useReducer, useCallback } from 'react';
import { historyReducer, initialState } from './historyReducer';

const useHistory = (initialValue) => {
    const [state, dispatch] = useReducer(historyReducer, {
        ...initialState,
        present: initialValue
    });

    const canUndo = state.past.length > 0;
    const canRedo = state.future.length > 0;

    const undo = useCallback(() => dispatch({ type: 'UNDO' }), []);
    const redo = useCallback(() => dispatch({ type: 'REDO' }), []);

    const set = useCallback((value) => dispatch({ type: 'SET', newPresent: value }), []);
    const reset = useCallback((value) => dispatch({ type: 'RESET', newPresent: value }), []);

    return {
        state: state.present, 
        set,                  
        undo,
        redo,
        reset,
        canUndo,
        canRedo,
        history: state 
    };
};

export default useHistory;