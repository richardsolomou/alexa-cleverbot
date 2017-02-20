# alexa-cleverbot

## Getting started

Install StdLib CLI tools:

```bash
$ npm install lib.cli -g
```

## Setup environment

Create a file named `env.json` and copy in your [cleverbot.io](https://cleverbot.io/login) API credentials:

```
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

## Deploy skill

Create an [StdLib](http://stdlib.com/) account and modify the `stdlib` object in `package.json` to match your username. Then, deploy the development version:

```bash
$ lib up dev
```

## Create skill

Sign in to the [Alexa Skills Kit](https://developer.amazon.com/edw/home.html#/skills/list) and add a new skill named `Cleverbot` with the following custom interaction model:

### Intent schema

```
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

### Custom slot types

Create a custom slot type called `SAY` with some random values:
```
what
who
where
when
why
how
```

### Sample utterances

```
SayIntent {say}
```

### Configuration

Point the HTTPS endpoint to your StdLib account's instance of `alexa-cleverbot` (e.g. `https://stdlib_username.stdlib.com/alexa-cleverbot@dev`).

## Testing the skill

Test skill locally

```bash
$ lib .
```

```bash
$ lib . SayIntent --say Hello
```
