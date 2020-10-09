import * as vscode from 'vscode';

let myStatusBarItem: vscode.StatusBarItem;

export function activate({ subscriptions }: vscode.ExtensionContext) {
	myStatusBarItem = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Left, 10000);
	subscriptions.push(myStatusBarItem);
	updateStatusBarItem();
}

function updateStatusBarItem(): void {
	myStatusBarItem.text = `$(project) ${vscode.workspace.name}`;
	myStatusBarItem.show();
}