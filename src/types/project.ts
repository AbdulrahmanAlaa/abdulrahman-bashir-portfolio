export interface ProjectData {
    id: number;
    title: string;
    description: string;
    image: string;
    link: string;
    hasAndroid?: boolean;
    hasIOS?: boolean;
    component: React.ComponentType;
}
