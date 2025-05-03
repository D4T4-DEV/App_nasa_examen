import { RootStackParamList } from "@/navigation/types";

export interface CardActions {
    title: string;
    subtitle: string;
    textExpl: string;
    textExpl2: string;
    routeName: keyof RootStackParamList;
}