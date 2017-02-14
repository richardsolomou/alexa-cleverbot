# alexa-cleverbot

## Setup

Check out this [guide](https://hackernoon.com/build-an-alexa-skill-in-7-minutes-flat-with-node-js-and-stdlib-70611f58c37f) on getting started with StdLib.

Sign in to the [Alexa Skills Kit](https://developer.amazon.com/edw/home.html#/skills/list) and add a new skill named `Cleverbot` with this custom interaction model:

```
// Intent Schema
{
  "intents": [
    {
      "intent": "SayIntent",
      "slots": [
        {
          "name": "say",
          "type": "SAY"
        }
      ]
    },
    {
      "intent": "AMAZON.StopIntent"
    }
  ]
}
```

```
// Sample Utterances
SayIntent {say}
```

Create a custom slot type called `SAY` with the values:
```
what
who
where
when
why
how
```

Point the HTTPS endpoint to your StdLib account's instance of `alexa-cleverbot` (e.g. `https://stdlib_username.stdlib.com/alexa-cleverbot@dev`).

## Environment

```
// env.json
{
  "dev": {
    "cleverbot": {
      "user": "CLEVERBOT_API_USER",
      "key": "CLEVERBOT_API_KEY",
      "nick": "SESSION_NICKNAME"
    }
  },
  "release": {
    "cleverbot": {
      "user": "CLEVERBOT_API_USER",
      "key": "CLEVERBOT_API_KEY",
      "nick": "SESSION_NICKNAME"
    }
  }
}
```

Deploy development version to the HTTPS endpoint

```bash
$ lib up dev
```
