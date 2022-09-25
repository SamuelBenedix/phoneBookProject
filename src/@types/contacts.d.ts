export interface ContactsProps {
 id?: number | string;
 first_name: string;
 last_name: string;
 phones: {
  number: string
 }[],
 fav?: boolean;
};


export type ContactContextType = {
 data: ContactsProps[];
 setFav: (id: number) => void;
};