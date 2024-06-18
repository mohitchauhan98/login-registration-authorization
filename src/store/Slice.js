import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

const initialState = {
    user: "",
    token: "",
    loading: false,
    error: ""
}

export const registerUser = createAsyncThunk(
    'registerUser', 
    async (body, { rejectWithValue }) => {
        try {
            const res = await fetch('https://reqres.in/api/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: body.email,
                    password: body.password
                })
            });

            if (!res.ok) {
                const errorData = await res.json();
                return rejectWithValue(errorData);
            }

            return await res.json();
        } catch (err) {
            return rejectWithValue(err);
        }
    }
);

export const signInUser = createAsyncThunk(
    'signInUser', 
    async (body, { rejectWithValue }) => {
        try {
            const res = await fetch('https://reqres.in/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: body.email,
                    password: body.password
                })
            });

            if (!res.ok) {
                const errorData = await res.json();
                return rejectWithValue(errorData);
            }

            const data = await res.json();
            return { 
                token: data.token, 
                user: { 
                    name: "Charles Morris", 
                    email: body.email 
                } 
            };
        } catch (err) {
            return rejectWithValue(err);
        }
    }
);

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        addToken : (state,action) => {
            state.token = localStorage.getItem("token")
        },
        addUser : (state,action) => {
            state.user = JSON.parse(localStorage.getItem("user"))
        },
        logout : (state,action) => {
            state.token = null;
            state.user = null;
            localStorage.clear()
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(registerUser.pending, (state) => {
                state.loading = true;
                state.error = "";
            })
            .addCase(registerUser.fulfilled, (state, { payload }) => {
                state.loading = false;
                state.user = payload;
                state.token = payload.token;
            })
            .addCase(registerUser.rejected, (state, { payload }) => {
                state.loading = false;
                state.error = payload.error || "Failed to register";
            })
                /* sign in user*/
            .addCase(signInUser.pending, (state) => {
                state.loading = true;
                state.error = "";
            })
            .addCase(signInUser.fulfilled, (state, { payload}) => {
                state.loading = false;
                    state.token = payload.token;
                    state.user = payload.user

                    localStorage.setItem('user',JSON.stringify(payload.user))
                    localStorage.setItem('token',payload.token)
            })
            .addCase(signInUser.rejected, (state, { payload }) => {
                state.loading = false;
                state.error = payload.error || "Failed to sign in";
            });
    }
});

export const { addToken , addUser , logout } = userSlice.actions;
export default userSlice.reducer;