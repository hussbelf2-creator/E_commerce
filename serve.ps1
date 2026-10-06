param([int]$port = 8080)
$listener = New-Object System.Net.HttpListener
$listener.Prefixes.Add("http://localhost:$port/")
$listener.Start()
Write-Host "Server running at http://localhost:$port/"
$base = $PSScriptRoot

while ($listener.IsListening) {
    try {
        $ctx = $listener.GetContext()
        $req = $ctx.Request
        $res = $ctx.Response

        $path = $req.Url.LocalPath.TrimStart('/')
        if (-not $path) { $path = "index.html" }
        $file = Join-Path $base $path

        if (Test-Path $file -PathType Leaf) {
            $bytes = [System.IO.File]::ReadAllBytes($file)
            $ext = [System.IO.Path]::GetExtension($file).ToLower()
            $mime = switch ($ext) {
                ".html" { "text/html; charset=utf-8" }
                ".css"  { "text/css; charset=utf-8" }
                ".js"   { "application/javascript; charset=utf-8" }
                ".json" { "application/json; charset=utf-8" }
                ".jpg"  { "image/jpeg" }
                ".png"  { "image/png" }
                default { "application/octet-stream" }
            }
            $res.ContentType = $mime
            $res.ContentLength64 = $bytes.Length
            $res.OutputStream.Write($bytes, 0, $bytes.Length)
        } else {
            $res.StatusCode = 404
            $msg = [System.Text.Encoding]::UTF8.GetBytes("Not Found")
            $res.ContentLength64 = $msg.Length
            $res.OutputStream.Write($msg, 0, $msg.Length)
        }
        $res.Close()
    } catch {
        Write-Host "Error: $_"
    }
}
