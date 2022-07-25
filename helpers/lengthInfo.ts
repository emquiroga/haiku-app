export default function lengthInfo (lenght: number, flag: 5 | 7) {
    if(flag === 5) {
        if(lenght === 5) return "green"
        if(lenght > 5 || lenght < 1) return "red"
        if(lenght > 2 || lenght < 4) return "yellow"
        return "black"
    } else if (flag === 7) {
        if(lenght === 7) return "green"
        if(lenght > 7 || lenght < 2) return "red"
        if(lenght > 3 || lenght < 5) return "yellow"
        return "black"
    }
}