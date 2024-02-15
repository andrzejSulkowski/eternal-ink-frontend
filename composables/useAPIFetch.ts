import { useFetch } from "#app"

type useFetchType = typeof useFetch

//TODO: enable to extend options to for example await a SSE Call
///Use only with typical Methods like GET, POST, PUT, DELETE
/// Difference to useFetch is that it uses the runtimeConfig to set the baseURL
export const useAPIFetch: useFetchType = (path, options = {}) => {
  const config = useRuntimeConfig()

  let baseURL = "";
  if(config.public.mockedBackend){
    baseURL = config.public.baseURLMock;
  }else {
    baseURL = config.public.baseURL;
  }
  options.baseURL = baseURL;

  return useFetch(path, options)
}



