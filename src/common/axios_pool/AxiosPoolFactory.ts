import {AxiosPool, Config} from "./AxiosPool";

export class AxiosPoolFactory {
    private static INSTANCE: AxiosPool;

    static createPool(config: Config, shared = false): AxiosPool {
        if (shared) {
            if (this.INSTANCE == null) {
                this.INSTANCE = new AxiosPool(config);
            }
            return this.INSTANCE;
        }

        return new AxiosPool(config);
    }
}
