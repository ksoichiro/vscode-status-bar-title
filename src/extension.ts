import * as vscode from 'vscode';

let myStatusBarItem: vscode.StatusBarItem;

export function activate(context: vscode.ExtensionContext) {
	myStatusBarItem = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Left, 10000);
	context.subscriptions.push(myStatusBarItem);
	updateStatusBarItem(context);
}

function updateStatusBarItem(context: vscode.ExtensionContext): void {
	const icon = context.extensionMode == vscode.ExtensionMode.Production ? '$(project)' : '$(debug)';
	const name = vscode.workspace.name;
	if (name) {
		myStatusBarItem.text = `${icon} ${name}`;
		myStatusBarItem.show();
	}
}