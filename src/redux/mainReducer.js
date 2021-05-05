import {mainAPI} from "../api/api";

const SET_RESULT = 'SET_RESULT';

let initialState = {
    listKhajit: [
        {
            "id": 1,
            description: "Ты Каджит вор.",
            image: "https://vignette.wikia.nocookie.net/elderscrolls/images/2/25/%D0%9A%D0%B0%D0%B4%D0%B6%D0%B8%D1%82_%28Skyrim%29.png/revision/latest/top-crop/width/220/height/220?cb=20120902010054&path-prefix=ru"
        },
        {
            "id": 2,
            description: "Ты Каджит маг",
            image: "data:image/jpeg;base64,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"
        },
        {
            "id": 3,
            description: "Ты каджит купец",
            image: "https://i.pinimg.com/originals/8d/9c/44/8d9c4437321deb527373d0d77a62ce98.jpg"
        },
        {
            "id": 4,
            description: "Ты не Каджит! Ты кот срун",
            image: "https://krasivosti.pro/uploads/posts/2021-04/1617956772_29-p-kot-v-tualete-34.jpg"
        }
    ]
};

const mainReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_RESULT: {
            return {
                ...state,
                listKhajit: action.listKhajit
            }
        }
        default:
            return state;
    }

}

export const setResult = (listKhajit) => ({type: SET_RESULT, listKhajit})


export const getResultThunk = () => (dispatch) => {
    mainAPI.getResult().then(response => {
        dispatch(setResult(response.data))
    })

}


export default mainReducer;
