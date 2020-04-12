export const handleChangeAction = (text) => {
  return {
    type: "HANDLE_CHANGE_ACTION",
    payload: text,
  };
};

export const handleSubmitAction = (text) => {
  return {
    type: "HANDLE_SUBMIT_ACTION",
    payload: text,
  };
};

export const handleDeleteAction = (id) => {
  return {
    type: "HANDLE_DELETE_ACTION",
    payload: id,
  };
};
