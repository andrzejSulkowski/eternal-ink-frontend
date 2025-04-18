export interface EIProps<OnClickEvent = MouseEventHandler<HTMLElement>> {
    className?: string;
    style?: CSSProperties;
    id?: string;
    children?: ReactNode;
    onClick?: (e: OnClickEvent) => void;
    'aria-label'?: string;
}

export interface EIRoute {
    href: string;
    name: string;
    icon?: ReactNode;
}