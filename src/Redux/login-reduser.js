import { GetUser, RedirectAuth } from "../API/authAPI"

const SET_USER = 'GET_USER'

let initState =
{
    loginPage: {
        user: {
            name: null,
            email: null,
            role: []
        },
        isLoadingUser: false,
        access_token: null,
        id_token: null,
        refresh_token: null
    }
}

export const LoginReduser = (state = initState, action) => {
    let copyState = {
        ...state
    }
    switch (action.type) {
        case SET_USER:
            if (action.userInfo) {
                copyState.loginPage.isLoadingUser = true;
                copyState.loginPage.access_token = action.userInfo.access_token;
                copyState.loginPage.id_token = action.userInfo.id_token;
                copyState.loginPage.refresh_token = action.userInfo.refresh_token;
                copyState.loginPage.user.name = action.userInfo.profile.name;
                copyState.loginPage.user.email = action.userInfo.profile.email;
                if (Array.isArray(action.userInfo.profile.role)) {
                    copyState.loginPage.user.role = [ ...action.userInfo.profile.role ];
                } else {
                    copyState.loginPage.user.role = action.userInfo.profile.role;
                }
            }
            return copyState;

        default:
            return state;
    }
}

export const getUserInfoThunkCreator = () => {

    return (dispatch) => {
        GetUser().then(data => {
            dispatch(setUserInfoAC(data));
        });
    }
}

export const RedirectCallback = () => {
    RedirectAuth();
}

const setUserInfoAC = (userInfo) => {
    let action = { type: SET_USER, userInfo }
    return action;
}

