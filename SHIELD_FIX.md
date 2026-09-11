# Shield remediation

Upgrade underscore 1.8.3 → 1.12.1

CVE-2021-23358 (CRITICAL) affects underscore 1.8.3: nodejs-underscore: Arbitrary code execution via the template function. Upgrading to 1.12.1 incorporates the upstream patch. Applying this fix removes the vulnerable code path from the dependency tree.

This branch was opened automatically by C3 Shield to remediate a detected CVE.
