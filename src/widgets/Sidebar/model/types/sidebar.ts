export interface SidebarItemType {
    path: string;
    text: string;
    i18ns?: string;
    authOnly?: boolean;
    Icon: React.VFC<React.SVGProps<SVGSVGElement>>;
}
