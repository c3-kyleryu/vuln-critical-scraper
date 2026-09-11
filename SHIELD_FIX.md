# Shield remediation

Upgrade lodash 4.17.4 → 4.18.0

CVE-2026-4800 (HIGH) affects lodash 4.17.4: lodash: lodash: Arbitrary code execution via untrusted input in template imports. Upgrading to 4.18.0 incorporates the upstream patch. Applying this fix removes the vulnerable code path from the dependency tree.

This branch was opened automatically by C3 Shield to remediate a detected CVE.
