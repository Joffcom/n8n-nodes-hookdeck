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
			{
				name: 'Get',
				value: 'get',
				action: 'Get an event',
				description: 'Get an event',
				routing: {
					request: {
						method: 'GET',
						url: '={{"/events/" + $parameter.eventId }}',
					},
				},
			},
			{
				name: 'Mute',
				value: 'mute',
				action: 'Mute an event',
				description: 'Mute an event',
				routing: {
					request: {
						method: 'PUT',
						url: '={{"/events/" + $parameter.eventId + "/mute" }}',
					},
				},
			},
			{
				name: 'Retry',
				value: 'retry',
				action: 'Retry an event',
				description: 'Retry an event',
				routing: {
					request: {
						method: 'POST',
						url: '={{"/events/" + $parameter.eventId + "/retry" }}',
					},
				},
			},
		],
		default: 'get',
	},
];

export const eventsFields: INodeProperties[] = [
	{
		displayName: 'Event ID',
		name: 'eventId',
		type: 'string',
		default: 'evt_123',
		displayOptions: {
			show: {
				resource: ['events'],
				operation: ['get', 'mute', 'retry'],
			},
		},
	},
];
