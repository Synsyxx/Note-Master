import {
    GETTING_NOTES,
    RECEIVED_NOTES,
    ADDING_NOTE,
    NOTE_ADDED,
    DELETING_NOTE,
    NOTE_DELETED,
    UPDATING_NOTE,
    UPDATED_NOTE
  } from "../actions/actions";
  
  const initialState = {
    notes: [],
    gettingNotes: false,
    receivedNote: false,
    addingNote: false,
    addedNote: false,
    deletingNote: false,
    deletedNote: false,
    updatingNote: false,
    updatedNote: false,
  };
  
  export const reducer = (state = initialState, action) => {
    switch (action.type) {
      case GETTING_NOTES:
        return { ...state, gettingNotes: true };
      case RECEIVED_NOTES:
        return { ...state, gettingNotes: false, notes: action.payload };
      case ADDING_NOTE:
        return { ...state, addingItem: true };
      case NOTE_ADDED:
        return { ...state, addingItem: false, notes: action.payload };
      case DELETING_NOTE:
        return { ...state, deletingNote: true };
      case NOTE_DELETED:
        return { ...state, deletingNote: false, notes: action.payload };
      case UPDATING_NOTE:
        return { ...state, updatingNote: true };
      case UPDATED_NOTE:
        return { ...state, updatingNote: false, notes: action.payload };
      default:
        return state;
    }
  };
