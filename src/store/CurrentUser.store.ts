import { atom } from "jotai";
import { IUser } from "../interfaces/User.interface";

export const CurrentUserAtom = atom<IUser | null>(null);
export const LogInUserAtom = atom<IUser | null>(null);
