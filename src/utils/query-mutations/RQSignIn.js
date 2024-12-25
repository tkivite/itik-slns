import axios from "axios";
import { SIGN_UP_STUDENT } from "../apis";
import { useMutation } from "react-query";

const RQSignIn = (onSuccess, onError) => {
  const apiLogin = async (data) => {
    const clientSecret = "clientSecret";
    const clientId = "clientId";
    const timestamp = new Date()
      .toISOString()
      .replace(/[-:.TZ]/g, "")
      .slice(0, 14); // Format: YYYYMMDDHHmmss

    const combinedString = `${clientSecret}:${clientId}:${timestamp}`;
    const base64Encoded = btoa(combinedString);

    const response = await axios.post(SIGN_UP_STUDENT, data, {
      headers: {
        Authorization: base64Encoded,
      },
    });

    return response?.data;
  };
  return useMutation(apiLogin, { onSuccess, onError });
};

export default RQSignIn;
