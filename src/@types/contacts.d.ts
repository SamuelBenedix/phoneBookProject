export interface ContactsProps {
 id?: number | string;
 first_name: string;
 last_name: string;
 isFav?: boolean;
 phones: {
  number: string
 }[],
};


export type ContactContextType = {
 data: ContactsProps[];
 localStorageData?: { id: string }
 setFav?: (id: string) => void;
};
