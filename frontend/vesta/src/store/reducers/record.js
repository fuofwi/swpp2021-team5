/* eslint-disable */
import * as actionTypes from '../actions/actionType';

const initialState = {
  userRecords: [
    {
      id: 1,
      image: "/sushi_example_image.jpeg",
      date: "2021/11/09",
      liked: true,
    },
    {
      id: 2,
      image: "/sushi_example_image.jpeg",
      date: "2021/11/09",
      liked: false,
    },
  ],
  selectedRecord: null,
  selectedReview: null,
};
const recordReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_RECORDS: {
      return { ...state, userRecords: action.records };
    }
    case actionTypes.TOGGLE_LIKED: {
      const toggledRecords = state.userRecords.map((rec) => {
        if (rec.id === action.targetID) {
          return { ...rec, liked: !rec.liked };
        } return { ...rec };
      });
      return { ...state, userRecords: toggledRecords };
    }
    case actionTypes.GET_RECORD: {
      return { ...state, selectedRecord: action.record };
    }
    default: {
      break;
    }
  }
  return state;
};

export default recordReducer;
