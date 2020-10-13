declare const isEffectiveObject: (obj: object) => boolean;
declare const isEffectiveValue: (value: any) => boolean;
declare const deleteKeys: (obj: object, keys: string | Array<string>) => void;
declare const deleteInvalidateKeys: (obj: object) => void;
declare const isObjectEqual: (obj: object, other: object) => boolean;
export { deleteKeys, deleteInvalidateKeys, isObjectEqual, isEffectiveObject, isEffectiveValue, };
