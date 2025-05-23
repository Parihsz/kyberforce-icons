$publisher = "parihsz"
$themeName = "kyberforce-icon-theme"
$extensionFolder = "$publisher.$themeName"
$sourcePath = (Get-Location).Path
$targetPath = "$env:USERPROFILE\.vscode\extensions\$extensionFolder"
if (Test-Path $targetPath){
    Write-Host "Removing existing theme installation at $targetPath.."
    Remove-Item -Recurse -Force $targetPath
}
Write-Host "Copying theme from $sourcePath to $targetPath.."
Copy-Item -Path $sourcePath -Destination $targetPath -Recurse -Force

Write-Host "`nKyberforce icon theme installed locally!"
Write-Host "Now ctrl+shift+p and select 'Kyberforce - variant' in preferences"
