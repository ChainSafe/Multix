
export const getIntersection = (array1 = [] as string[], array2 = [] as string[]) => array1.filter(v1 => array2.some(v2 => v1.includes(v2)))
export const getDifference = (array1 = [] as string[], array2 = [] as string[]) => array1.filter(v1 => !array2.includes(v1))
