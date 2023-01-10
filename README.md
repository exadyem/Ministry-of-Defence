# Ministry-of-Defence

For the connection between the Polar H10 heart monitor and the websocket created, we had to reverse engineer the workings of the Polar H10, trying to obtain the heart rate via self written procedures and sending it out via websockets. Geert-Jan van Ouwendorp made this possible, and all code needed is to be found in his GitLab repository linked below. In this repository, it is explained how to properly install the files. 
Mind that only people with an FHICT GitLab account can access this repository, please contact Geert-Jan van Ouwendorp for any issues.
https://git.fhict.nl/I874904/polar-h10-noble

With use of the Polar H10, we bumped into a couple of issues - mainly the Bluetooth that wasn't being recognized on our laptops. We used the Raspberry Pi for the connection instead, however this was a slow and tedious process, as the code often decided to just not work. We recommend looking into an ANT+ connection - as the Polar H10 does support that and it can be used with GoldenCheetah - an application which is often used for data insights of sporting technology gear. 

The websocket server has to be ran as the administrator in a terminal, otherwise it will simply not work.
The EMG Muscle Detector sensor has to be attached in a specific way - in the video linked below, it is shown how to connect them. The video shows attachement to the underarm, however we recommend placing it near the neck and shoulder muscles as this shows most signs of stress. 
https://www.youtube.com/watch?v=1LjE07z5r7c&t=153s


For other questions about the project and/or code, reach out to 435189@student.fontys.nl (Elin Top) and/or 430719@student.fontys.nl (Yvon Kokke), as they closely worked with the codes uploaded here.
