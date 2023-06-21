import { INodeType, INodeTypeDescription } from 'n8n-workflow';
import {
	attemptsOperations,
	attemptsFields,
	eventsOperations,
	eventsFields,
	issuesOperations,
	issuesFields,
	requestsOperations,
	requestsFields,
 } from './descriptions';

export class Hookdeck implements INodeType {
	description : INodeTypeDescription = {
		displayName: 'Hookdeck',
		name: 'Hookdeck',
		icon: 'file:hookdeck.svg',
		group: ['transform'],
		version: 1,
		subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
		description: 'Interact with the Hookdeck API',
		defaults: {
			name: 'Hookdeck',
		},
		inputs: ['main'],
		outputs: ['main'],
		credentials: [
			{
				name: 'hookdeckApi',
				required: true,
			},
		],
		requestDefaults: {
			baseURL: 'https://api.hookdeck.com/2023-01-01',
			headers: {},
		},
		properties : [
			{
				displayName: 'Resource',
				name: 'resource',
				type: 'options',
				noDataExpression: true,
				options: [
					{
						// eslint-disable-next-line n8n-nodes-base/node-param-resource-with-plural-option
						name: 'Attempts',
						value: 'attempts',
					},
					{
						name: 'Events',
						value: 'events',
					},
					{
						name: 'Issues',
						value: 'issues',
					},
					{
						name: 'Requests',
						value: 'requests',
					},
				],
				default: 'attempts',
			},

			...attemptsOperations,
			...attemptsFields,
			...eventsOperations,
			...eventsFields,
			...issuesOperations,
			...issuesFields,
			...requestsOperations,
			...requestsFields,

		],
	};
}
