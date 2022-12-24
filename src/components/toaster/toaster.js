import { toast } from "toast-notification-alert";

const Toaster = () => {
  toast.show({ title: "Enter Name", position: "topfullwidth", type: "alert" });
};

export default Toaster;
