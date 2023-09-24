export const customDelay = async(time = 200) => {
  return new Promise(resolve => setTimeout(resolve,time));
}
