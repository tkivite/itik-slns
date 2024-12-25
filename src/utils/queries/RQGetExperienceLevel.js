import { useQuery } from "react-query";
import { GET_EXPERIENCE_LEVEL } from "../apis";
import axios from "axios";

const RQGetExperienceLevel = () => {
  const getExperienceLevel = async () => {
    const response = await axios.get(GET_EXPERIENCE_LEVEL);

    return response?.data;
  };

  return useQuery(["experience"], () => getExperienceLevel(), {
    refetchOnWindowFocus: false,
    staleTime: 1000 * 60 * 30,
  });
};

export default RQGetExperienceLevel;
