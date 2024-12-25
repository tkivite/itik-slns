import axios from "axios";
import { GET_EDUCATION_LEVEL } from "../apis";
import { useQuery } from "react-query";

const RQGetEducationLevel = () => {
  const getEducationLevel = async () => {
    const response = await axios.get(GET_EDUCATION_LEVEL);

    return response?.data;
  };

  return useQuery(["education-level"], () => getEducationLevel(), {
    refetchOnWindowFocus: false,
    staleTime: 1000 * 60 * 30,
  });
};

export default RQGetEducationLevel;
