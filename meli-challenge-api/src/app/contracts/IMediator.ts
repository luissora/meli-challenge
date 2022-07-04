export default interface IMediator {
    suscribe: (type: string, fn: (arg?: any) => void) => void;
    send: <T> (type: string, arg?: any) => Promise<T>;
}