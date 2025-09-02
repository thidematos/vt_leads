import { useQuery } from "@tanstack/react-query";
import { useIsLoading } from "../../../hooks/useLoading";
import { getContacts } from "../../../services/contactAPI";

function useGetContacts() {
  const { isPending: isGetting, data: contacts } = useQuery({
    queryKey: ["contacts"],
    queryFn: getContacts,
  });

  useIsLoading(isGetting);

  return { contacts };
}

export { useGetContacts };
