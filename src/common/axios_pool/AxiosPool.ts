import axios, {AxiosInstance} from "axios";

interface Config {
    BASE_URL?: string;
    MAX_INSTANCES: number;
}


class AxiosPool {
    instances: Map<number, AxiosInstance>;
    private date: Date = new Date();

    constructor(config: Config) {
        this.instances = new Map();
        for (let i = 0; i < config.MAX_INSTANCES; ++i) {
            this.instances.set(i, axios.create({
                baseURL: config.BASE_URL
            }));
        }
    }

    getClient(): AxiosInstance {
        return <AxiosInstance>this.instances.get( this.date.getMilliseconds() % this.instances.size);
    }
}

export {AxiosPool, Config};