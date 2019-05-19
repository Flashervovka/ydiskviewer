const initialState = [];

export default function breadCrumbs(state = initialState, action) {
    if (action.type === 'ON_CHANGE_PATH') {
        let crumbs = action.path.split("/");
        let newState = [];
        for(let i = 0;i<crumbs.length;i++){
            let crumb = crumbs[i];
            if(crumb!=='')newState.push({label:crumb,active:false,path:crumb === "disk:" ? "/":crumb})
        }
        newState[newState.length-1].active = true;
        return newState;
    }
    return state;
}