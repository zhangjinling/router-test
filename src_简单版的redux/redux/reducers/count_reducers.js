const initCount = 110
export default function increase(pre = initCount,action){
  switch (action.type) {
    case 'increase':
      return pre + action.data
    case 'decrease':
        return pre - action.data
    default:
      return pre
  }
}