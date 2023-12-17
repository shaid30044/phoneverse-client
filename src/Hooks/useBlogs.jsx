import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useBlogs = () => {
  const axiosPublic = useAxiosPublic();

  const { data: blogs = [], refetch: blogsRefetch } = useQuery({
    queryKey: ["blogs"],
    queryFn: async () => {
      const res = await axiosPublic.get("/blogs");
      return res.data;
    },
  });

  return [blogs, blogsRefetch];
};

export default useBlogs;
