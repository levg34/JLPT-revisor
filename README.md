# JLPT-revisor
Be prepared for the JLPT by importing vocabulary or kanji lists for any level.

Kanji lists can be found here: https://tangorin.com/vocabulary

Click on the list you want, then click on download, and click on ``TSV``, ``Add readings in romaji``, ``Reading always first``, then click on ``Download``.

![tangorin](https://levg34.github.io/img/tangorin.PNG)

## How to use

- Download the zip and double-click on ``index.html`` (works offline), or go to https://levg34.github.io/JLPT-revisor/

- Select the kind of test you would like to try (by default: Japanese --> English)

![select mode](https://levg34.github.io/img/select_mode.PNG)

- Click on "Chose file" and open a TSV test file
  - If you downloaded the zip, you can use data/data.tsv
  - If not, you can download this file from my GitHub https://github.com/levg34/JLPT-revisor/raw/master/data/data.tsv (or use a list from tangorin.com)
  
You are ready to start the test!

- Enter the answer on the input, then click OK or hit enter key

![start](https://levg34.github.io/img/start.PNG)

- If you are incorrect, an help with be displayed. You can try as much as you want

- If you are correct
  - If your answer matches exactly at least one possible answer, all answers will be displayed and this word will be considered known when you click on ``know`` or by pressing enter
  - If your answer matches partialy the answer, you will be given the choice to consider the word known by clicking on ``know`` or pressing ``+`` on your keyboard, or go to the next word by clicking ``next`` or pushing ``-``
  
You can save your progress at any moment by clicking ``save progress``. Your progress will be downloaded as a TSV file, which you can reload anytime.

There are a few other commands for you to know:  

- ``hint`` : a hint will be displayed
- ``answer`` : the answer will be displayed, and you will not be able to set this word as known for this turn. You can also enter ``?`` in the answer field, then press enter. 

The two progressbar below represent:

- Your position, that is to say at which index word are you compared with the length of the file
- Your progress, that is to say the number of words you already know compared with the length of the file

A word known will not be repeated. When you reach the last word of the file, you return to the first unknown word.

## Licence
All rights reserved

## Other
Feel free to let me know of any bug / enhancement