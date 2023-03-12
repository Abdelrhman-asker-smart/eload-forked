const header = (token) => {
  return {
    headerForJson: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
      "Content-Length": "<calculated when request is sent>",
    },
    headerForForm: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "multipart/form-data",
      "Content-Length": "<calculated when request is sent>",
    },
    headerToUpdateForm: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "multipart/form-data",
      "Content-Length": "<calculated when request is sent>",
    },
  };
};

export default header;
