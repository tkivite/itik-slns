import axios from "axios";
import { useQuery } from "react-query";
import { GET_PAYMENT_SCHEDULES } from "../apis";

const RQGetPaymentSchedule = () => {
  const getPaymentSchedulesLevel = async () => {
    const response = await axios.get(GET_PAYMENT_SCHEDULES);
    return response?.data;
  };

  return useQuery(["get-payment-schedules"], () => getPaymentSchedulesLevel(), {
    refetchOnWindowFocus: false,
    staleTime: 1000 * 60 * 30,
  });
};

export default RQGetPaymentSchedule;
