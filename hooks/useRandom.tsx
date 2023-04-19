const useRandom = () : number => {
    return Math.random() * (99999 - 10000) + 10000;
}

export default useRandom;