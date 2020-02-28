import * as vscode from 'vscode';
import { openWorkspaceTabs } from './commands/openWorkspaceTabs';

// this method is called when your extension is activated
export function activate(context: vscode.ExtensionContext) {
    context.subscriptions.push(
        vscode.commands.registerCommand('jmisavage.shortcuts.workspaceTerminals',
            async (args) => {
                return openWorkspaceTabs(args);
            }
        )
    );
}

// this method is called when your extension is deactivated
export function deactivate() {}
