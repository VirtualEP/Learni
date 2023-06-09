import axios from "axios";
import { API_ROUTES } from "./useServerHook";

const BASE_API_URL = API_ROUTES+"/api";

export default function useApiHook() {
  const signin = async ({ email, password }) => {
    const { status, data } = await axios.post(BASE_API_URL + "/auth/login", {
      email,
      password,
    });

    if (status !== 200) {
      console.log("failed");
      return;
    }

    return { user: data.user, token: data.token };
  };

  const signup = async ({
    email,
    password,
    firstName,
    lastName,
    country,
    type,
  }) => {
    const { status, data } = await axios.post(BASE_API_URL + "/auth/register", {
      email,
      password,
      firstName,
      lastName,
      country,
      type,
    });

    if (status !== 200) {
      console.log("failed");
      return;
    }

    return { user: data.user, token: data.token };
  };

//   const editProfile = async ({ email, firstName, lastName }) => {
//     const { status, data } = await axios.post(BASE_API_URL + "/auth/register", {
//       email,
//       firstName,
//       lastName,
//     });
//     if (status !== 200) {
//       console.log("failed");
//       return;
//     }

//     return { user: data.user, token: data.token };
//   };

  const resetPassword = async () => {
    const { status, data } = await axios.post(BASE_API_URL + "/auth/reset", {
      email,
    });

    if (status !== 200) {
      console.log("failed");
      return;
    }

    return data;
  };

  return { signin, signup, resetPassword };
}
