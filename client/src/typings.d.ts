type TClient = {
	id: string;
	name: string;
	email: string;
	phone: string;
};

type TProject = {
	id: string;
	name: string;
	status: string;
	description: string;
	client: TClient;
};
