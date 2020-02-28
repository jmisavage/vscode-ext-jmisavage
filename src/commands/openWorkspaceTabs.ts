import * as vscode from 'vscode';

export async function openWorkspaceTabs(args: any) {
    const workspace: vscode.WorkspaceFolder[] | undefined = vscode.workspace.workspaceFolders?.reverse();

    if (workspace) {
        for(let i = 0; i < workspace.length; i++) {
            const termName = workspace[i].name;
            if (i === 0) {
                await vscode.commands.executeCommand('workbench.action.terminal.newInActiveWorkspace');
            } else {
                await vscode.commands.executeCommand('workbench.action.terminal.split');
            }
            await vscode.commands.executeCommand('workbench.action.terminal.sendSequence', { text: `cd ${workspace[i].uri.fsPath} && clear\n` });
            await vscode.commands.executeCommand('workbench.action.terminal.renameWithArg', { name: termName });
        }
    }
}