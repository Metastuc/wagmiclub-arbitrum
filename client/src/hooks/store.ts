import { create } from "zustand";

type userStore = {
	userName: string;
	userTitle: string;
	isLoggedIn: boolean;
	setUserName: (name: string) => void;
	setUserTitle: (title: string) => void;
	setIsLoggedIn: (bool: boolean) => void;
};

export const useUserStore = create<userStore>((set) => ({
	userName: "Sabinus",
	userTitle: "Investor",
	isLoggedIn: false,

	// setUserName: (name: string) =>
	// 	set((state) => ({ ...state, userName: name })),

	// setUserTitle: (title: string) =>
	// 	set((state) => ({ ...state, userTitle: title })),

	// setIsLoggedIn: (bool: boolean) =>
	// 	set((state) => ({ ...state, isLoggedIn: bool })),

	setUserName: function (name: string) {
		return set(function (state) {
			return { ...state, userName: name };
		});
	},

	setUserTitle: function (title: string) {
		return set(function (state) {
			return { ...state, userTitle: title };
		});
	},

	setIsLoggedIn: function (bool: boolean) {
		return set(function (state) {
			return { ...state, isLoggedIn: bool };
		});
	},
}));
