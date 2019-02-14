## Configuration

Dump the following into your environment:

```
# Airtable API key
AIRTABLE_KEY=replaceme

# The URL to POST club info to that triggers a check-in email
ZAPIER_WEBHOOK_URL=replaceme

# The key Zapier needs to post with (to prevent spam)
PASSWORD=replaceme

# See the production config at https://dashboard.heroku.com/apps/checkin-hackclub/settings
```

In development you can throw your config into `env.json`, which overrides any environmental variables you may have set.

## Setup

```
# Launch a live reloading server
$ yarn && yarn dev
```
