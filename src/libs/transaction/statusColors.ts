import { Status } from "./index";

export const statusColors: Record<Status, string> = {
  "waiting-for-funds": "text-ei-primary-faded",
  "confirming-funds": "text-ei-warning",
  engraving: "text-ei-warning",
  engraved: "text-ei-success",
  timeout: "text-ei-danger",
};
