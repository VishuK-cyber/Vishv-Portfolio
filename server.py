from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer


class NoCacheHandler(SimpleHTTPRequestHandler):
    extensions_map = {
        **SimpleHTTPRequestHandler.extensions_map,
        ".js": "text/javascript",
        ".mjs": "text/javascript",
        ".css": "text/css",
        ".pdf": "application/pdf",
    }

    def end_headers(self):
        self.send_header("Cache-Control", "no-store")
        super().end_headers()


if __name__ == "__main__":
    host = "127.0.0.1"
    port = 5173
    server = ThreadingHTTPServer((host, port), NoCacheHandler)
    print(f"Serving portfolio at http://{host}:{port}")
    server.serve_forever()
