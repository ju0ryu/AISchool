import { createAction, handleActions } from 'redux-actions';

const INCREASE = 'conter/INCREASE';
const DECREASE = 'conter/DECREASE';

export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);

const initialState = {
  number: 0,
};

//방법2 핸들러 액션 사용
const counter = handleActions(
  {
    [INCREASE]: (state, actions) => ({ number: state.number + 1 }),
    [DECREASE]: (state, actions) => ({ number: state.number - 1 }),
  },
  initialState,
);
//방법1
// function counter(state = initialState, action) {
//   switch (action.type) {
//     case INCREASE:
//       return {
//         number: state.number + 1,
//       };
//     case DECREASE:
//       return {
//         number: state.number - 1,
//       };
//     default:
//       return state;
//   }
// }
export default counter;
