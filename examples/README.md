---
hide_table_of_contents: true
---

# arkmq-org.io examples

This directory contains example YAML files to create and configure an Artemis broker on Kubernetes.

If you are new to Artemis on Kubernetes, start with [a basic deployment](artemis/artemis_single.yaml):

1. Deploy the operator as described in the [Operator help](docs/help/006-operator.md).
2. Create a basic broker deployment:

```bash
kubectl create -f examples/artemis/artemis_single.yaml -n <namespace>
```

See https://arkmq-org.io/ for tutorials and more information about Artemis.

For security enabled (TLS) connections example, please follow guide [Secured connection with arkmq-org Operator](docs/tutorials/ssl-broker-setup.md)
