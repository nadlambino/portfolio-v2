#!/usr/bin/env python3
"""Webhook endpoint for GitHub deployment triggers."""
import http.server
import json
import subprocess
import sys
import os

WEBHOOK_SECRET = os.environ.get("WEBHOOK_SECRET", "portfolio-deploy-secret")

class DeployHandler(http.server.BaseHTTPRequestHandler):
    def do_POST(self):
        # Verify signature
        signature = self.headers.get("X-Hub-Signature-256", "")
        payload = self.rfile.read(int(self.headers.get("Content-Length", 0)))

        import hmac, hashlib
        expected = "sha256=" + hmac.new(
            WEBHOOK_SECRET.encode(), payload, hashlib.sha256
        ).hexdigest()

        if not hmac.compare_digest(signature, expected):
            self.send_response(403)
            self.end_headers()
            self.wfile.write(b"Invalid signature")
            return

        # Parse event
        data = json.loads(payload)
        ref = data.get("ref", "")
        if ref != "refs/heads/master":
            self.send_response(200)
            self.end_headers()
            self.wfile.write(b"Ignored (not master)")
            return

        # Trigger deployment
        subprocess.Popen([
            "/bin/bash", "-c",
            "cd /home/nadlambino/.openclaw/workspace/nadlambino/portfolio-v2 && "
            "git pull origin master && "
            "sudo docker build -t portfolio-v2 . && "
            "sudo docker stop portfolio || true && "
            "sudo docker rm portfolio || true && "
            "sudo docker run -d -p 80:80 --name portfolio portfolio-v2"
        ])

        self.send_response(200)
        self.end_headers()
        self.wfile.write(b"Deploy triggered")

    def do_GET(self):
        self.send_response(200)
        self.end_headers()
        self.wfile.write(b"Deploy webhook running")

    def log_message(self, format, *args):
        print(f"[DEPLOY] {args[0]}")

if __name__ == "__main__":
    port = int(sys.argv[1]) if len(sys.argv) > 1 else 8080
    server = http.server.HTTPServer(("0.0.0.0", port), DeployHandler)
    print(f"Deploy webhook listening on port {port}")
    server.serve_forever()
