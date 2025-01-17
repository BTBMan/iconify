import { updateStyle } from '../src/render/style';
import {
	cleanupGlobals,
	expectedBlock,
	expectedInline,
	setupDOM,
} from '../src/tests/helpers';

describe('Testing rendering style', () => {
	afterEach(cleanupGlobals);

	it('updateStyle', () => {
		// Setup DOM
		const doc = setupDOM('').window.document;

		// Create container node
		const node = doc.createElement('div');

		// Add style to empty parent
		updateStyle(node, false);
		expect(node.innerHTML).toBe('<style>' + expectedBlock + '</style>');

		// Change inline mode
		updateStyle(node, true);
		expect(node.innerHTML).toBe('<style>' + expectedInline + '</style>');

		// Do not change anything
		updateStyle(node, true);
		expect(node.innerHTML).toBe('<style>' + expectedInline + '</style>');

		// Change to block
		updateStyle(node, false);
		expect(node.innerHTML).toBe('<style>' + expectedBlock + '</style>');
	});
});
