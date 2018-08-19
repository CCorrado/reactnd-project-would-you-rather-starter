# Chris' Would You Rather Project

Status: In Development

## TL;DR

To get started developing right away:

* install all project dependencies with `npm install`
* start the development server with `npm start`

##  Local _DATA.js 

This app is based on a pre-configured dataset located in `./utils/_DATA.js`
There are 2 types of data, `users` and `questions`

The API in this file is split up into a few public methods (exposed in `./utils/api.js`)
* [`getUsers`](#getUsers)
* [`getQuestions`](#getQuestions)
* [`saveQuestion`](#saveQuestion)
* [`saveAnswer`](#saveAnswer)

### `getUsers`

Method Signature:

```js
_getUsers()
```

* Returns an Object containing all Users

### `getQuestions`

Method Signature:

```js
_getQuestions()
```
* Returns an Object containing all Questions

### `saveQuestion`

Method Signature:

```js
_saveQuestion()
```

* Saves a new Question in memory.

### `saveAnswer`

Method Signature:

```js
_saveQuestionAnswer()
```

* Saves an Answer to a Question in memory.

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).