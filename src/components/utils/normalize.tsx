export const normalizeHeigh = (str: string | null, parametrs: number[]) => {
  if(str === null) return false
  let heigh: string[] = []
  let heighSorted: number[] = [];

  heighSorted.push(Number(str.slice(str.indexOf('-') + 2)))
  heighSorted.push(Number(str.slice(0, str.indexOf('-') - 1)))

  heighSorted = heighSorted.filter(item => !isNaN(item));

  let min: number = Math.min(...heighSorted)
  let max: number = Math.max(...heighSorted)

  if(min >= parametrs[0] && parametrs[1] >= max) {
    return true
  } else {
    return false
  }
}