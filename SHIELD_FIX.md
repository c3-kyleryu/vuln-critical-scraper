# Shield remediation

Upgrade lodash 4.18.0 → 4.17.12

CVE-2019-10744 (CRITICAL) affects lodash 4.18.0: nodejs-lodash: prototype pollution in defaultsDeep function leading to modifying properties. Upgrading to 4.17.12 incorporates the upstream patch. Applying this fix removes the vulnerable code path from the dependency tree.

This branch was opened automatically by C3 Shield to remediate a detected CVE.
