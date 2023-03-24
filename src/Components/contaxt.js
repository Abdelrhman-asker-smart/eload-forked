import { createContext, useState } from "react";

export let ContextStore = createContext([]);
export default function ContextStoreProvider({children}){
    let [list,setList] = useState(false)

    return <ContextStore.Provider value={{list,setList}}>
        {children}
    </ContextStore.Provider>

}


