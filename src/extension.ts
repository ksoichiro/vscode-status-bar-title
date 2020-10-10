import * as vscode from 'vscode';

let myStatusBarItem: vscode.StatusBarItem;

export function activate(context: vscode.ExtensionContext) {
	myStatusBarItem = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Left, 10000);
	context.subscriptions.push(myStatusBarItem);
	updateStatusBarItem(context);
}

function updateStatusBarItem(context: vscode.ExtensionContext): void {
	// Workaround for detecting development mode:
	// https://github.com/microsoft/vscode/issues/10272
	const isDevelopment = vscode.env.sessionId === 'someValue.sessionId';
	const icon = isDevelopment ? '$(debug)' : '$(project)';
	const name = vscode.workspace.name;
	if (name) {
		myStatusBarItem.text = `${icon} ${name}`;
		myStatusBarItem.show();
	}
}