const api = () => {
  return {
    changePassword: `${
      process.env.React_App_Base_Url
    }/api/updatepassword?email=${localStorage.getItem("email")}`,
    addTeamMember: `${process.env.React_App_Base_Url}/api/team/createteam/team`,
    addMedia: `${process.env.React_App_Base_Url}/api/media/createmediapartner/media`,
    fetchTeamData: `${process.env.React_App_Base_Url}/api/team/getallteam`,
    updateTeam: `${process.env.React_App_Base_Url}/api/team/updateteam/team`,
  };
};
export const apiWithParams = (id) => {
  return {
    getTeamById: `${process.env.React_App_Base_Url}/api/team/getteam/${id}`,
    deleteTeam: `${process.env.React_App_Base_Url}/api/team/deleteteam/${id}`,
    // deleteFaq: `${process.env.React_App_Base_Url}/api/faq/deletesinglequestionnaire/${id}`,
  };
};
export const apiWithTwoParams = (id, buttonType) => {
  return {
    // createAnnouncement: `${process.env.React_App_Base_Url}/api/offering/addnewannoucment/${id}/${buttonType}`,
  };
};

export default api;
