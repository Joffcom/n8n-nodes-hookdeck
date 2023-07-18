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
			{
				name: 'Dismiss',
				value: 'dismiss',
				action: 'Dismiss an issue',
				description: 'Dismiss an issue',
				routing: {
					request: {
						method: 'DELETE',
						url: '={{"/issues/" + $parameter.issueId }}',
					},
				},
			},
			{
				name: 'Get',
				value: 'get',
				action: 'Get an issue',
				description: 'Get an issue',
				routing: {
					request: {
						method: 'GET',
						url: '={{"/issues/" + $parameter.issueId }}',
					},
				},
			},
			{
				name: 'Update',
				value: 'update',
				action: 'Update an issue',
				description: 'Update an issue',
				routing: {
					request: {
						method: 'PUT',
						url: '={{"/issues/" + $parameter.issueId }}',
					},
				},
			},
		],
		default: 'get',
	},
];

export const issuesFields: INodeProperties[] = [
	{
		displayName: 'Issue ID',
		name: 'issueId',
		type: 'string',
		default: 'iss_123',
		displayOptions: {
			show: {
				resource: ['issues'],
				operation: ['dismiss', 'get', 'update'],
			},
		},
	},
	{
		displayName: 'Status',
		name: 'status',
		type: 'options',
		default: 'OPENED',
		options: [
			{
				name: 'Acknowledged',
				value: 'ACKNOWLEDGED',
			},
			{
				name: 'Ignored',
				value: 'IGNORED',
			},
			{
				name: 'Opened',
				value: 'OPENED',
			},
			{
				name: 'Resolved',
				value: 'RESOLVED',
			},
		],
		displayOptions: {
			show: {
				resource: ['issues'],
				operation: ['update'],
			},
		},
		routing: {
			send: {
				type: 'body',
				property: 'status',
			},
		},
	},
];
