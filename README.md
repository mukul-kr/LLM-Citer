# LLM Citer

## Note

The frontend folder contains the code created using vite. It is currently in broken state. Frontend2 contains the code created using the create-react-app. It is currently working. I will be working on the frontend2 folder and will be removing the frontend folder soon.

## Introduction

This is a simple tool to help you cite your code in your paper. It is inspired by [this](https://libguides.ccsu.edu/c.php?g=736245&p=9555042) and the discussion in [this](https://www.youtube.com/watch?v=oBfmzY8GonI) Jenkins meeting.

## How this works

Just put model name you have used in the LLM Model section, provide it the date when the last conversation happpened as this will be necessary to find which version of model was used in generating the result, paste the exact content you are using and provide the reference conversation. It will generate a for for you that will help you cite those in an easy way.

## How to use

You can use this tool in two ways. You can either use the [online version](https://llm-citer.herokuapp.com/) or you can use the offline version. To use the offline version, you need to have [Node.js](https://nodejs.org/en/) installed in your system. Then you can clone this repository and run the following commands:

```bash
cd backend && npm install && npm run dev
```

This will start the backend in your local machine. Then you can go to [http://localhost:3000](http://localhost:3000) to use the tool.


```bash
cf frontend2 && npm install && npm start
```

This will start the frontend in your local machine. Then you can go to [http://localhost:3001](http://localhost:3001) to use the tool.


## Contribution

If you want to contribute to this project, please feel free to fork this repository and send a pull request. If you have any suggestions, please feel free to open an issue.