
export default interface IModels<T> {
    get: () => Promise<T>;
    getById: (id?: string) => Promise<T>;
    add: (item?: T) => void;
    update: (item?: T) => void;
    delete: (id?: string) => void;
}