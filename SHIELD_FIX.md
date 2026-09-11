# Shield remediation

Upgrade handlebars 4.0.5 → 4.7.9

CVE-2026-33937 (CRITICAL) affects handlebars 4.0.5: handlebars.js: Handlebars: Remote Code Execution via crafted Abstract Syntax Tree object in compile(). Upgrading to 4.7.9 incorporates the upstream patch. Applying this fix removes the vulnerable code path from the dependency tree.

This branch was opened automatically by C3 Shield to remediate a detected CVE.
