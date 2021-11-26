import { interceptor } from "../Utils/interceptor";
import { useMutation } from "react-query";

interface IBody {
  page?: string;
  q?: string;
}
const axiosInstance = interceptor();

export default function useGetsContacts() {
  const data = useMutation((props: IBody) => {
    return axiosInstance
      .get(`/contacts`, {
        params: {
          page: props.page,
          q: props.q
        },
      })
      .then((res) => {
        return res.data;
      });
  });
  return data;
}
