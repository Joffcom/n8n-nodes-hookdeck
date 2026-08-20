import {
	IAuthenticateGeneric,
	Icon,
	ICredentialTestRequest,
	ICredentialType,
	INodeProperties,
} from 'n8n-workflow';

export class HookdeckApi implements ICredentialType {
	name = 'hookdeckApi';
	displayName = 'Hookdeck API';
	icon: Icon = {
		light: 'file:../nodes/Hookdeck/hookdeck.svg',
		dark: 'file:../nodes/Hookdeck/hookdeck.dark.svg',
	};
	documentationUrl = 'https://hookdeck.com/api-ref#authentication';
	properties: INodeProperties[] = [
		{
			displayName: 'API Key',
			name: 'apiKey',
			type: 'string',
			typeOptions: {
				password: true,
			},
			default: '',
		},
	];

	authenticate: IAuthenticateGeneric = {
		type: 'generic',
		properties: {
			headers: {
				Authorization: '={{"Bearer " + $credentials.apiKey}}',
			},
		},
	};

	test: ICredentialTestRequest = {
		request: {
			baseURL: 'https://api.hookdeck.com',
			url: '/2025-01-01/webhooks?limit=1',
		},
	};
}
