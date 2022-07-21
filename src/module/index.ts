import services from '@/utils/axios';

interface IResponseType<P = {}> {
	code?: number;
	status: number;
	msg: string;
	data: P;
}

interface ILogin {
	token: string;
	expires: number;
}

export const Login = (username: string, password: string) => {
	return services<IResponseType<ILogin>>({
		url: '/api/auth/login',
		method: 'POST',
		data: { username, password },
	});
};
