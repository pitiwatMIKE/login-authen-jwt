import { httpClient } from "./HttpClient";

export const checkToken = (callback) => {
  const token = localStorage.getItem("tokenAccess");

  httpClient
    .get("/checktoken", {
      headers: { token: token },
    })
    .then((res) => {
      const err = null;
      const result = {
        data: {
          status: true,
          token: token,
          message: "Login success",
        },
      };
      callback(err, result);
    })
    .catch((err) => {
      const result = {
        data: {
          status: false,
          token: null,
          message: "",
        },
      };
      callback(err, result);
      localStorage.removeItem("tokenAccess");
    });
};

// export const checkToken = () => {
//   const token = localStorage.getItem("tokenAccess");
//   httpClient
//     .get("http://localhost:5000/api/checktoken", {
//       headers: { token: token },
//     })
//     .then((result) => {
//       console.log(result);
//     })
//     .catch((err) => {
//       localStorage.removeItem("tokenAccess");
//     });
// };
