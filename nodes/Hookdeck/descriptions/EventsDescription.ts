import { INodeProperties } from 'n8n-workflow';

export const eventsOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,

		displayOptions: {
			show: {
				resource: ['events'],
			},
		},
		options: [
		],
		default: 'get',
	},
];

export const eventsFields: INodeProperties[] = [];
