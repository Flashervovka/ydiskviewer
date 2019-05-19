const initialState = [];

export default function diskSources(state = initialState, action) {
    if (action.type === 'ON_GET_DISK_SOURCES') {
        return [...action.diskSources];
    }
    return state;
}