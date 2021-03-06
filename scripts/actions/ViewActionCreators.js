var AppDispatcher = require('../dispatcher/AppDispatcher');
var Constants = require('../constants/Constants');

var ViewActionCreators = {

  addCategory(data) {
    AppDispatcher.dispatch({
      actionType: Constants.ADD_CATEGORY,
      data: data
    });
  },

  addExpense(data) {
    AppDispatcher.dispatch({
      actionType: Constants.ADD_EXPENSE,
      data: data
    });
  },

  editExpense(data) {
    AppDispatcher.dispatch({
      actionType: Constants.EDIT_EXPENSE,
      data: data
    });
  },

  deleteCategory(data) {
    AppDispatcher.dispatch({
      actionType: Constants.DELETE_CATEGORY,
      data: data
    });
  },

  deleteExpense(data) {
    AppDispatcher.dispatch({
      actionType: Constants.DELETE_EXPENSE,
      data: data
    });
  },

  savePositions(data) {
    AppDispatcher.dispatch({
      actionType: Constants.SAVE_POSITIONS,
      data: data
    });
  },

  deletePositions(data) {
    AppDispatcher.dispatch({
      actionType: Constants.DELETE_POSITIONS,
      data: data
    });
  },

  afterDragExpense(data) {
    AppDispatcher.dispatch({
      actionType: Constants.AFTER_DRAG_EXPENSE,
      data: data
    });
  },

  addExpenseToCategory(data) {
    AppDispatcher.dispatch({
      actionType: Constants.ADD_EXPENSE_TO_CATEGORY,
      data: data
    });
  },

  selectNode(data) {
    AppDispatcher.dispatch({
      actionType: Constants.SELECT_NODE,
      data: data
    });
  },

  unselectNode(data) {
    AppDispatcher.dispatch({
      actionType: Constants.UNSELECT_NODE,
      data: data
    });
  }
};

module.exports = ViewActionCreators;