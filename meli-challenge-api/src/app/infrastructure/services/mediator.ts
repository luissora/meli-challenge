import IMediator from "../../contracts/IMediator";

class Mediator implements IMediator {
    #suscriptions: { 
        type: string; 
        fn: <T>(arg?: any) => T | void;
    }[] = []
    
    suscribe(type: string, fn: (arg?: any) => void) {
        if(!this.#suscriptions.find(x => x.type == type.trim())){
            this.#suscriptions.push({ type, fn })
        }
    }

    async send<T>(type: string, arg?: any) : Promise<T> {
        const suscribe = this.#suscriptions.find(x => x.type == type)
        if(!suscribe)
            throw 'Mediator:Send => No se encontro el type que desea ejecutar.'
        
        return suscribe.fn(arg) as T
    }
}

export default new Mediator();