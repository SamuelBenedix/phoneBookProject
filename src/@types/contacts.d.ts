
export interface ContactProps {
 id?: number | string;
 first_name: string;
 last_name: string;
 isFav?: boolean;
}

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
 setFav?: (ContactsProps) => void;
 setData?: (props: any) => void;
 localData?: any;
 setNewData: (ContactProps) => void;
 removeData: (id: number) => void
};
