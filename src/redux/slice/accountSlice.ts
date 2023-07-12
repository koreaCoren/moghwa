import { createSlice } from '@reduxjs/toolkit';
interface AccountInterface {
    isAccount: boolean;
    AccountType: string;
}

const initialState: AccountInterface = {
    isAccount: false,
    AccountType: 'login',
};

export const accountSlice = createSlice({
    name: 'account',
    initialState,
    reducers: {
        onAccount: (state) => {
            state.isAccount = true;
            state.AccountType = 'login';
        },
        offAccount: (state) => {
            state.isAccount = false;
        },
        Login: (state) => {
            state.AccountType = 'login';
        },
        SignUp: (state) => {
            state.AccountType = 'signup';
        },
    },
});

export const { onAccount, offAccount, Login, SignUp } = accountSlice.actions;
export default accountSlice.reducer;
