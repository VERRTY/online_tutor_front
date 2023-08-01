import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RegistrationSchema} from "../type/registrationSchema";
import {Region, Sex} from "../../../../shared/const/common";
import {registrationStudent} from "../Services/RegistrationStudent/RegistrationStudent";

const initialState: RegistrationSchema = {
    isLoading: false,
    error: null,

    candidate: {
        name: '',
        surname: '',
        password: '',
        age: null,
        description: '',
        education: '',
        email: '',
        gender: Sex.MAIL,
        phoneNumber: '',
        region: Region.BISHKEK,
        workExperienceInMonths: 0
    }
};

export const registrationSlice = createSlice({
    name: 'registration',
    initialState,
    reducers: {
        setUsername: (state, action: PayloadAction<string>) => {
            state.candidate.name = action.payload;
        },
        setSurname: (state, action: PayloadAction<string>) => {
            state.candidate.surname = action.payload;
        },
        setPassword: (state, action: PayloadAction<string>) => {
            state.candidate.password = action.payload;
        },
        setAge: (state, action: PayloadAction<number>) => {
            state.candidate.age = action.payload;
        },
        setDescription: (state, action: PayloadAction<string>) => {
            state.candidate.description = action.payload;
        },
        setEducation: (state, action: PayloadAction<string>) => {
            state.candidate.education = action.payload;
        },
        setEmail: (state, action: PayloadAction<string>) => {
            state.candidate.email = action.payload;
        },
        setGender: (state, action: PayloadAction<Sex>) => {
            state.candidate.gender = action.payload;
        },
        setPhoneNumber: (state, action: PayloadAction<string>) => {
            state.candidate.phoneNumber = action.payload;
        },
        setRegion: (state, action: PayloadAction<Region>) => {
            state.candidate.region = action.payload;
        },
        setDefault: (state, action: PayloadAction<Region>) => {
            state.candidate = initialState.candidate
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(registrationStudent.pending, (state, action) => {
                state.isLoading = true
                state.error = null;
            })
            .addCase(registrationStudent.fulfilled, (state, action) => {
                state.isLoading = false
            })
            .addCase(registrationStudent.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.payload
            })

    },
});

export const { actions: registrationActions } = registrationSlice;
export const { reducer: registrationReducers } = registrationSlice;
