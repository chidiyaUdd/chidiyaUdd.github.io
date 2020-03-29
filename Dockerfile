  
FROM 392585469273.dkr.ecr.ap-south-1.amazonaws.com/chidiyaudd:v1

RUN apt-get install git -y

RUN git clone --single-branch --branch master https://SportsUnity:efbd57434405153979392f14cec2869f43bf5d35@github.com/SportsUnity/ChidiyaUdd.git

RUN rm -rf /usr/share/nginx/html/*

RUN cp -R ChidiyaUdd /usr/share/nginx/html/

RUN rm -rf ChidiyaUdd/




RUN ls
RUN ls

EXPOSE 80
