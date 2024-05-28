import { Status } from "./index";

export const statusColors: Record<Status, string> = {
    pending: 'text-ei-primary-faded',
    engraving: 'text-ei-warning',
    engraved: 'text-ei-success',
    timeout: 'text-ei-danger'
  };