/**
 * @author 杨雪枫 987061450@qq.com
 * @description 
 */
// stores/index.ts
import { createContext, useContext } from 'react';
import { AppStore } from './appStore';

export class RootStore {
	appStore: AppStore;

	constructor() {
		this.appStore = new AppStore();
	}
}

const StoreContext = createContext<RootStore>({} as RootStore);

export const StoreProvider = StoreContext.Provider;
export const useStore = () => useContext(StoreContext);
