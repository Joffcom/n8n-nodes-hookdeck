import { INodeProperties } from 'n8n-workflow';

export const requestsOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,

		displayOptions: {
			show: {
				resource: ['requests'],
			},
		},
		options: [
			{
				name: 'Get',
				value: 'get',
				action: 'Get a request',
				description: 'Get a request',
				routing: {
					request: {
						method: 'GET',
						url: '={{"/requests/" + $parameter.requestId }}',
					},
				},
			},
		],
		default: 'get',
	},
];

export const requestsFields: INodeProperties[] = [
	{
		displayName: 'Request ID',
		name: 'requestId',
		type: 'string',
		default: 'req_123',
		description: 'Request ID',
		displayOptions: {
			show: {
				resource: ['requests'],
				operation: ['get'],
			},
		},
	},
];
