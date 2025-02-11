import { User } from "../type";

export interface ContactsProps {
  sections: {title: string; data: User[]}[];
}
