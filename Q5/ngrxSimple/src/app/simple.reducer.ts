import { Action } from "@ngrx/store";

export function simpleReducer(state: string = 'Hello', action: Action){
    console.log(action.type, state);

    switch(action.type){
        case 'SPANISH':
        return state = 'Hola'

        case 'FRENCH': 
        return state = 'Bonjour'

        default: return state
    }
}