import { createContext, useMemo } from "react";
import { atom, selector } from "recoil";

export const countAtom = atom({
    key: "countAtom",
    default: 0
});

export const evenSelector = selector({
    key: "evenSelector",
    get: ({get}) => {
        const count = get(countAtom);
        return {
            isEven: count % 2 === 0,
            isOdd: count % 2 !== 0
        };
    }
});
