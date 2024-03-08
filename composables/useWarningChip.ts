
const showWarning = ref(false);
const warningMsg = ref("");
const warningDuration = ref(5000);
const timer = ref<NodeJS.Timeout | null>(null);


export const useWarningChip = () => {  
    const setWarning = (msg: string, duration: number = 5000) => {
      warningMsg.value = msg;
      warningDuration.value = duration;
      showWarning.value = true;
  
      if (timer.value) {
        clearTimeout(timer.value);
      }
  
      timer.value = setTimeout(() => {
        showWarning.value = false;
        console.log("set warning message to false")
      }, warningDuration.value);
    };
  
    const clearWarning = () => {
      showWarning.value = false;
    };
  
    return {
      showWarning,
      warningMsg,
      warningDuration,
      setWarning,
      clearWarning,
    };
}