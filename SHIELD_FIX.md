# Shield remediation

Upgrade ejs 2.5.7 → 3.1.7

CVE-2022-29078 (CRITICAL) affects ejs 2.5.7: ejs: server-side template injection in outputFunctionName. Upgrading to 3.1.7 incorporates the upstream patch. Applying this fix removes the vulnerable code path from the dependency tree.

This branch was opened automatically by C3 Shield to remediate a detected CVE.
