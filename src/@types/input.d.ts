export interface InputProps {
 label: string;
 value?: string;
 isDelete?: boolean;
 onChange: (e: string) => void;
 onClick?: (event: React.MouseEvent) => void;
 errorMessage?: string;
 isCheck?: boolean;
 unique?: string;
}