import { INodeProperties } from 'n8n-workflow';

export const attemptsOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,

		displayOptions: {
			show: {
				resource: ['attempts'],
			},
		},
		options: [
			{
				name: 'Get',
				value: 'get',
				action: 'Get an attempt',
				description: 'Get an attempt',
				routing: {
					request: {
						method: 'GET',
						url: '={{"/attempts/" + $parameter.attemptId }}',
					},
				},
			},
		],
		default: 'get',
	},
];

export const attemptsFields: INodeProperties[] = [
	{
		displayName: 'Attempt ID',
		name: 'attemptId',
		type: 'string',
		default: 'atm_123',
		displayOptions: {
			show: {
				resource: ['attempts'],
				operation: ['get'],
			},
		},
	},
];
