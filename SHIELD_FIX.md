# Shield remediation

Upgrade minimist 0.0.8 → 0.2.4

CVE-2021-44906 (CRITICAL) affects minimist 0.0.8: minimist: prototype pollution. Upgrading to 0.2.4 incorporates the upstream patch. Applying this fix removes the vulnerable code path from the dependency tree.

This branch was opened automatically by C3 Shield to remediate a detected CVE.
