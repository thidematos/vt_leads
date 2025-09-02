import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteContact } from "../../../services/contactAPI";
import { useIsLoading } from "../../../hooks/useLoading";
import toast from "react-hot-toast";

function useDeleteContact() {
  const queryClient = useQueryClient();

  const { isPending: isUpdating, mutate: deleteContactFn } = useMutation({
    mutationFn: (data) => deleteContact(data),
    onSuccess: () => {
      toast.success("Contato deletado.");
      queryClient.invalidateQueries({
        queryKey: ["contacts"],
      });
    },
    onError: (err) => {
      console.log(err);
      toast.error(err.response.data.message);
    },
  });

  useIsLoading(isUpdating);

  return deleteContactFn;
}

export { useDeleteContact };
