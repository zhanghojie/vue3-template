import axios, { AxiosResponse, AxiosRequestConfig, AxiosError } from 'axios';
const service = axios.create({
	baseURL: import.meta.env.VITE_API_BASE_URL,
	withCredentials: true,
	timeout: 5000, //request timeout,
	headers: {
		'Content-Type': 'application/json',
	},
});

service.interceptors.request.use(
	(config: AxiosRequestConfig) => {
		// do something
		return config;
	},
	(error: AxiosError) => {
		return Promise.reject(error);
	},
);

// Response interceptors
service.interceptors.response.use(
	async (response: AxiosResponse) => {
		// do something

		const res = response.data;
		if (res.code === 200) {
			return Promise.resolve(res);
		} else {
			Promise.reject(res);
		}
	},
	(error: AxiosError) => {
		// do something
		return Promise.reject(error);
	},
);
// export default service;
// request不支持泛型 包装一下导出
export default <T = any>(config: AxiosRequestConfig) => {
	return service(config).then((res) => {
		return res.data.data as T;
	});
};
