
export type SearchItem = {
    id?: number,
    name?: string,
    date?: {
        date: number,
        month: number,
        year: number
    },
    time?: {
        date: number,
        month: number,
        year: number
    }
}
export type UserInfo = {
    email?: string,
    birthday?: {
        date: number,
        month: number,
        year: number
    },
    wishlist?: string[],
    searchRecent?: SearchItem[],
    fullname?: string,
    phone?: string,
    username?: string,
    
}
export type userPayload = {
    user: {
        logined?: boolean,
        
        userInfo?: UserInfo
    },
}
export interface ErrorAction {
    type: string,
    payload: {
        message: string
    }
}
export interface SuccessAction<T> {
    type: string,
    payload: T
}
// Initial state
export const defaultUserState: userPayload = {
    user: {},
    
}


export type userAction = SuccessAction<userPayload> | ErrorAction
    | SuccessAction<UserInfo>    
    | SuccessAction<undefined>

const userReducer = (state: userPayload = defaultUserState, action: userAction) => {
    switch (action.type) {
        default:
        return state;
    }

}

export default userReducer;