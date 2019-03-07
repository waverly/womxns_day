#!/bin/bash
rsync \
-hrave \
"ssh -i /Users/chrisconiglio/.ssh/nkla-dev.pem" \
*.js *.json \
"ubuntu@54.82.232.74:/var/www/womxnsday"
