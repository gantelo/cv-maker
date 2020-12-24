import { Deps } from 'src/models/general';

export const getDeps = (): Deps => {
  const fetchWithRejections = async <T = any>(input: RequestInfo, init?: RequestInit): Promise<Response> => {
    const response = await fetch(input, init);
    if (response.status >= 200 && response.status < 400) {
      return response;
    }
    throw response;
  };
  // const apiDeps: ApiDeps = { http: fetchWithRejections };
  const apiDeps: any = { http: fetchWithRejections };

  // const apiService = ApiService(apiDeps);
  return { apiService: {} };
};
