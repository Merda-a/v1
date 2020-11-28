import { newsReduser } from "./news-reduser";
import { timetableReduser } from "./timetable-reduser";

let store = {
    _state: {
        timetablePage: {
            dataLesson: [
                { id: 1, time: "1th", name: "УЭСПД", Auditore: "239", Lectural: "Liplianin", type: "lecture" },
                { id: 2, time: "2th", name: "ФК", Auditore: "213", Lectural: "Sidorov", type: "practice" },
                { id: 3, time: "3th", name: "Д444", Auditore: "239", Lectural: "Palchev", type: "laboratry" }
            ],
            newLesson: { id: 0, time: " ", name: " ", Auditore: " ", Lectural: " ", type: " " },
            dataGroups: [
                { name: "442" },
                { name: "443" },
                { name: "423" },
                { name: "453" },
                { name: "452" }
            ],
        },
        newsPage: {
            News: [
                { newM: "I am a free man", id: 1 },
                { newM: "Glory MU", id: 2 },
            ],
            newPostText: "add news"
        },
    },
    GoToWork() {
        console.log('State change');
    },
    subscribe(observer) {
        this.GoToWork = observer;
    },
    GetState() {
        return this._state;
    },
    GetTimetablePage() {
        return this._state.timetablePage;
    },
    dispatch(action) {
        this._state.newsPage = newsReduser(this.GetState().newsPage, action);
        this._state.timetablePage = timetableReduser(this.GetState().timetablePage, action)
        debugger;
        this.GoToWork( this._state);
    }
}


window.store = store;
export default store;
