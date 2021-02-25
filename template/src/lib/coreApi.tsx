import apiInstance from "./axiosConfig";

interface apiParams {
  link: string;
  config?: object;
}

interface apiParamsForPost extends apiParams {
  data: object;
}

interface coreApi {
  /** usage like coreApi.GET({ link: "YOUR_LINK" }) */
  GET: ({ link, config }: apiParams) => Promise<any>;
  /** usage like coreApi.POST({ link: "YOUR_LINK", data: {}, config: {} }) */
  POST: ({ link, data, config }: apiParamsForPost) => Promise<any>;
  /** usage like coreApi.POST({ link: "YOUR_LINK", data: {}, config: {} }) */
  PATCH: ({ link, data, config }: apiParamsForPost) => Promise<any>;
  /** usage like coreApi.POST({ link: "YOUR_LINK", config: {} }) */
  DELETE: ({ link, config }: apiParams) => Promise<any>;
  /** usage like coreApi.POST({ link: "YOUR_LINK", data: {}, config: {} }) */
  PUT: ({ link, data, config }: apiParamsForPost) => Promise<any>;
}

const coreApi: coreApi = {
  GET: ({ link, config }: apiParams): Promise<any> => {
    return apiInstance.get(link, config);
  },
  POST: ({ link, data, config = {} }: apiParamsForPost) => {
    return apiInstance.post(link, data, config);
  },
  PATCH: ({ link, data = {}, config = {} }: apiParamsForPost) => {
    return apiInstance.patch(link, data, config);
  },
  DELETE: ({ link, config = {} }: apiParams) => {
    return apiInstance.delete(link, config);
  },
  PUT: ({ link, data = {}, config = {} }: apiParamsForPost) => {
    return apiInstance.put(link, data, config);
  },
};

export default coreApi;
