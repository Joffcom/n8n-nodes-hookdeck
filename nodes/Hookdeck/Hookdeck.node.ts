import { INodeType, INodeTypeDescription, NodeConnectionType } from 'n8n-workflow';
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
		name: 'hookdeck',
		icon: 'file:hookdeck.svg',
		group: ['transform'],
		version: 1,
		subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
		description: 'Interact with the Hookdeck API',
		defaults: {
			name: 'Hookdeck',
		},
		usableAsTool: true,
		inputs: [NodeConnectionType.Main],
		outputs: [NodeConnectionType.Main],
		credentials: [
			{
				name: 'hookdeckApi',
				required: true,
			},
		],
		requestDefaults: {
			baseURL: 'https://api.hookdeck.com/2025-01-01',
			headers: {},
		},
		properties : [
			{
				displayName:
					'This node is deprecated and is no longer maintained. Please install and use the verified Hookdeck node (<a href="https://www.npmjs.com/package/@hookdeck/n8n-nodes-hookdeck" target="_blank">@hookdeck/n8n-nodes-hookdeck</a>) from Hookdeck instead.',
				name: 'deprecatedNotice',
				type: 'notice',
				default: '',
			},
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
