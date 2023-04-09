# VProfessor.ai - A Virtual Professor for Students

VProfessor.ai contains a multitude of functions designed to facilitate online learning. Users can upload either a wav/mp3/ text files. Then, a transcript of the audio is returned, along with a summary of the data. This includes key words and main topics, Wikipedia page links, current events from NewsAPI, and recommended YouTube videos. From here, users can either read the summary report on the website, or download it as a pdf for their personal studying. Additionally, users may "ask the professor" a question, and get a quick short answer for themselves.

# Tech Stack

Azure Stack: Azure Speech-to-Text, Azure Text Analytics, Azure Blob Storage and Azure App Service. 

Front end: HTML, CSS, JS, Bootstrap 

Back end: Node.js 

Others: Newsapi, Mediawiki, YouTube data API, JSPdf, FFMPeg, wolframalpha api

# Installation

Clone git repository

cd foldername

Install package.json dependencies

Run node app.js

Removed all API keys since it is public. 

Please request for one or create relevant API keys and replace in js files in scripts folder under public.

API keys to replace: 
1. Get Azure Text analytics - API and End point URL in mediatosummary.js file 
2. Get Azure cognitive speech-to-text- API key and Region in mediatosummary.js file 
3. Get Azure blob storage- Storage connection string in mediatosummary.js file
4. Get NEWSAPI - API key in newscrapper.js  file
5. Get Youtube- API Key for fetching recommended videos from youtube in mediatosummary.js file

Demo Link: https://youtu.be/N1baJE7AnVU

