import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const usePhones = () => {
  const axiosPublic = useAxiosPublic();

  const { data: phones = [], refetch: phonesRefetch } = useQuery({
    queryKey: ["phones"],
    queryFn: async () => {
      const res = await axiosPublic.get("/phones");
      return res.data;
    },
  });

  return [phones, phonesRefetch];
};

export default usePhones;
