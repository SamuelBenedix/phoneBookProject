export interface ButtonProps {
 isDisabled?: boolean;
 onClick?: (event: React.MouseEvent) => void;
 children: React.ReactNode;
 icon?: boolean;
 isDanger?: boolean;
 isPrimary?: boolean;
 isSecondary?: boolean;
 isDelete?: boolean;
 isBig?: boolean;
 primary?: boolean;
 type?: 'submit' | 'button';
}