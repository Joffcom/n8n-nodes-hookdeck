import { INodeProperties } from 'n8n-workflow';

export const issuesOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,

		displayOptions: {
			show: {
				resource: ['issues'],
			},
		},
		options: [
		],
		default: 'get',
	},
];

export const issuesFields: INodeProperties[] = [];
