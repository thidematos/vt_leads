import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createContact } from "../../../services/contactAPI";
import toast from "react-hot-toast";
import { UseModal } from "../../../context/ModalProvider";
import { useIsLoading } from "./../../../hooks/useLoading";

function useCreateContact() {
  const queryClient = useQueryClient();
  const { toggleModal } = UseModal();

  const { isPending: isCreating, mutate: createContactFn } = useMutation({
    mutationFn: (data) => createContact(data),
    onSuccess: () => {
      toast.success("Contato estabelecido!");
      queryClient.invalidateQueries({
        queryKey: ["contatos"],
      });
      toggleModal({ status: false, component: null });
    },
    onError: (err) => {
      console.log(err);
      toast.error(err.message);
    },
  });

  useIsLoading(isCreating);

  return createContactFn;
}

export { useCreateContact };
