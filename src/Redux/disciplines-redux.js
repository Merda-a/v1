import { getDisciplinesAPI } from "../API/api"


const GET_DISCIPLINES = 'GET_DISCIPLINES'

let initState =
{
    disciplines: [
        {id:"ded4ceaa-c987-40c2-dcc9-08d888820a0f",
        name:"АЛВС",
        fullName:"Администрирование локальных вычислительных сетей",
        countHours:90,
        countHoursGZ:8,
        countHoursPZ:24,
        countHoursLeck:30,
        countHoursSEM:0,
        countHoursLR:0,
        countHoursMZ:4,
        countHoursTest:0,
        countHoursСontrolWork:2,
        countHoursSWZ:18,
        isExam:false,
        dateOfPlan:"2012-04-23T18:25:43.511",
        countNorm:600,
        semester:1,
        specializationDB:null}
    ]
}

export const DisciplinesReduser = (state = initState, action) => {
    let copyState = {
        ...state
    }
    switch (action.type) {
        case GET_DISCIPLINES:
            debugger

            copyState.cadetsPage.cadets = [...action.data];

            return copyState;


        default:
            return state;
    }
}


export const getDisciplinesThunkCreator = () => {
    return (dispatch) => {
        getDisciplinesAPI().then(data => {
            console.log("getUsersThunkCreator");
            console.log(data);
            if (data) {
                dispatch(setDisciplinesAC(data));
            }
        });
    }
}


const setDisciplinesAC = (data) => {
    console.log('setDisciplinesAC');
    console.log(data);
    let action = { type: GET_DISCIPLINES, data }
    return action;
}
