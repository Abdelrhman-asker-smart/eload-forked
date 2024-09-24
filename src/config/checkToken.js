import Cookies from "js-cookie";

export const checkTokenExpiryDate = ({ cookie }) => {
  //   // console.log(cookie);
  const newFunction = (token) => {
    const base64Url = token.split(".")[1];
    const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    const jsonPayload = decodeURIComponent(
      window
        .atob(base64)
        .split("")
        .map(function (c) {
          return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
        })
        .join("")
    );
    return JSON.parse(jsonPayload);
  };
  const decoded = newFunction(cookie.artfi_token);
  const currentTime = Math.floor(Date.now() / 1000);
  if (decoded.exp <= currentTime) {
    const removeCookiesOnLoad = () => {
      Cookies.remove("artfi_token", { path: "" });
      localStorage.removeItem("email");
      localStorage.removeItem("name");
      localStorage.setItem("reloginRequired", JSON.stringify(true));
    };
    removeCookiesOnLoad();
    window.location.replace("/");
    // return true;
  }
  //   return false;
  //   window.location.href = "/";
};
