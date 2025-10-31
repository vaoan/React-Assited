import { useQuery } from "@tanstack/react-query";
import getUserData from "../../application/getter/userData";

export const queryKey = "userData";

const useGetUserData = () => {
  const useData = useQuery({
    queryKey: [queryKey],
    queryFn: getUserData,
  });

  return useData;
};

export default useGetUserData;
