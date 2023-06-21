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
		],
		default: 'get',
	},
];

export const attemptsFields: INodeProperties[] = [];
