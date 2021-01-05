# Reaper Coding Challenge

This app fetches and generates 4 pages of sales of the following product in json format into results folder.

1. ps5 in /result/PS_5 folder

2. xbox series into /result/X_Box folder

## Installation

```bash
npm install
```

## Usage

```bash
npm start 
```


```bash
node server
```


## Note 
- Daily (Cron Time) in the app is formatted as (['*/60 */23 * * *']())
  - This means that 60 minutes is added to 23 Hours to complete 24 Hours 
  - (['* */24 * * *']()) is wrong because 1 min is add to 24 hour automatically
- After Data has been generated daily 
- The End points returns results of data that has been generated in current day and previous days.

## Approach

1. Time Driven Approach is Used For Bot

2. Event Driven Approach For Api - EndPoint


## Links
  - [Api docs](https://documenter.getpostman.com/view/14005736/TVzLpLZY)

  - [XBOX Get endpoint](https://ebay-xbox-ps5-bot.herokuapp.com/api/v1/xbox)
  - [PS5 Get endpoint](https://ebay-xbox-ps5-bot.herokuapp.com/api/v1/ps5)

  - [XBOX Page](https://ebay-xbox-ps5-bot.herokuapp.com/x_box)
  - [PS5 Page](https://ebay-xbox-ps5-bot.herokuapp.com/ps_5)
  
  - [DOC Page](https://ebay-xbox-ps5-bot.herokuapp.com/api/v1/docs)
