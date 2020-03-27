FROM node:13.6-buster
LABEL author "__ksh__<koushuu.matsubara@loft.tokyo>"
LABEL maintainer "loFT LLC <info@loft.tokyo>"

RUN apt-get update && apt-get install -y less vim curl g++ build-essential \
    python python-pip locales && rm -rf /var/lib/apt/lists/*
RUN echo "ja_JP UTF-8" > /etc/locale.gen
RUN locale-gen

ENV LANG ja_JP.UTF-8
ENV TZ Asia/Tokyo
ENV HOST=0.0.0.0
ENV PORT=3000


RUN mkdir /opt/app
WORKDIR /opt/app
ADD . /opt/app
RUN yarn install
RUN yarn build
EXPOSE 3000
CMD ["yarn", "start"]
