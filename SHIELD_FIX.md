# Shield remediation

Upgrade lodash 4.17.4 → 4.17.21

CVE-2020-8203 (HIGH) affects lodash 4.17.4: Prototype pollution in lodash before 4.17.20 via the zipObjectDeep function, allowing an attacker to modify the prototype of Object.. Upgrading to 4.17.21 incorporates the upstream patch. Applying this fix removes the vulnerable code path from the dependency tree.

This branch was opened automatically by C3 Shield to remediate a detected CVE.
