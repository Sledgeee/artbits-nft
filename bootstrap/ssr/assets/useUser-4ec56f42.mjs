import { usePage } from "@inertiajs/react";
const useUser = () => usePage().props.auth.user;
export {
  useUser as u
};
