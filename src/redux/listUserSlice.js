import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    name: "Johann",
    surname: "Stenzel",
    login: "user@gmail.com",
    password: "qwerty1",
    telephone: "997889190",
    country: "DE",
    patients: [
      {
        name: "Julia",
        surname: "Johnson",
        email: "jjohnson@gmail.com",
        gender: "female",
        birth: "2001-11-01",
        location: "New York",
        telephone: "+380 303 232 123",
        index: "12312",
        mutation: "",
        classification: "",
        seizureDiary: "",
      },
      {
        name: "Miko",
        surname: "Ortega",
        email: "megasnake@gmail.com",
        gender: "male",
        birth: "2000-11-02",
        location: "New Orlean",
        telephone: "+190 103 212 135",
        index: "12313",
        mutation: "",
        classification: "",
        seizureDiary: "",
      },
    ],
  },
];

export const listUserSlice = createSlice({
  name: "listUser",
  initialState,
  reducers: {
    updateUser: (state, action) => {
      return [
        ...state,
        {
          ...action.payload,
        },
      ];
    },
    addUser: (state, action) => {
      return [
        ...state,
        {
          ...action.payload,
          patients: [],
        },
      ];
    },
    removeUser: (state, action) => {
      return state.filter((element) => element.login !== action.payload.login);
    },
    addPatient: (state, action) =>
      state.forEach((e) => {
        if (e.login === action.payload.userID.toString()) {
          e.patients.push({
            name: action.payload.patient.name.toString(),
            surname: action.payload.patient.surname.toString(),
            email: action.payload.patient.email.toString(),
            gender: action.payload.patient.gender.toString(),
            birth: action.payload.patient.birth.toString(),
            location: action.payload.patient.location.toString(),
            telephone: action.payload.patient.telephone.toString(),
            index: action.payload.patient.index.toString(),
            mutation: action.payload.patient.mutation.toString(),
            classification: action.payload.patient.classification.toString(),
            seizureDiary: action.payload.patient.seizureDiary.toString(),
          });
        }
      }),
    removePatient: (state, action) =>
      state.map((user) => {
        if (user.login === action.payload.userID.toString()) {
          const patientList = user.patients;
          return {
            ...user,
            patients: patientList.filter(
              (element) => element.index !== action.payload.patient.index
            ),
          };
        } else return user;
      }),
  },
});

export const selectListUser = (state) => state.listUser;
export const selectCurrentUser = (currentUserLogin) => (state) =>
  state.listUser.filter((e) => e.login === currentUserLogin)[0];

export const selectPatient = (patientIndex, currentUserLogin) => (state) =>
  state.listUser
    .filter((e) => e.login === currentUserLogin.toString())[0]
    .patients.filter((p) => parseInt(p.index) === parseInt(patientIndex))[0];

export const selectPatientsId = (currentUserLogin) => (state) => {
  let patientsArray = state.listUser.filter(
    (e) => e.login === currentUserLogin
  )[0].patients;
  let indexArray = [];
  patientsArray.forEach((e) => indexArray.push(parseInt(e.index)));
  return indexArray.sort((a, b) => a - b);
};

export const { addUser, removeUser, addPatient, removePatient, updateUser } =
  listUserSlice.actions;
export default listUserSlice.reducer;
