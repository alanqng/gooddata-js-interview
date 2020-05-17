# gooddata-js-interview
For testing just install all dependicies with `yarn install` and then run the app with  `yarn start`, you will be able to change the months and received the correct data for each month.

## GoodData Homework

### Introduction

Your task is to enhance the application using the [GoodData.UI](https://sdk.gooddata.com/gooddata-ui/).

### Prerequisites

To successfully complete this tutorial, you are required to:

* Be familiar with the modern JavaScript ecosystem.
* Have `node.js` and `yarn` installed in your development environment.
  * If you do not have these tools installed, you can get them from https://nodejs.org/ and https://yarnpkg.com/ respectively.

### Initialization

1. Make a [fork of this repository and clone it](https://help.github.com/en/articles/fork-a-repo).
2. Run `cd gooddata-js-interview`.
3. Run `yarn install`.
4. Run `yarn start`.
5. Visit https://localhost:3000/account.html, and log in using your GoodData account credentials.
   - If you do not have a GoodData account yet, [create one](https://gooddata-examples.herokuapp.com/registration). After creating a GoodData account, you will be redirected to our GoodData.UI Live Examples. Feel free to get inspired there, but its not related to this homework.
6. Visit https://localhost:3000/, and make sure that two column charts are loaded like this:

![Screenshot after initialization](https://github.com/gooddata/gooddata-js-interview/blob/master/public/screen.png "Initialization Screenshot")

### Task

__Make the dropdown work. That is, the dropdown `onChange` should reload the upper chart appropriately.__

When you are done, send us the link to your source code repo and the instructions how to run the demo.

We are looking for re-usable code. You are strongly encouraged to "over-engineer" this to show off your software architecture and designing skills. Assume that this abstract application will be the first component of a large scale application.

### GoodData.UI Documentation

[GoodData.UI Documentation](https://sdk.gooddata.com/gooddata-ui/docs/about_gooddataui.html)

### Troubleshooting

###### Cloning the repo fails
* If cloning using SSH fails, try HTTPS instead: `git clone https://github.com/gooddata/gooddata-js-interview.git`.

###### Server https://developer.na.gooddata.com/ seems to be down.
* If you decided to work on this homework during the weekend, it is possible our platform may be down for several hours due to maintenance (typically on Saturdays). If https://developer.na.gooddata.com/ is down, try again in an hour or two. If you need more time to work on this homework, let us know.

###### Charts do not get loaded.
* Most likely, you are not logged in correctly. Check the Network tab in Google Chrome DevTools. If you see `HTTP 401 ERROR`, visit https://localhost:3000/account.html and log in properly.

###### Anything else?
* Contact your recruiter for further information.

---

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).
