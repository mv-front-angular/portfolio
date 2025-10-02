#!/bin/bash

# Criando as collections
mongoimport --db portfolio --collection header --jsonArray --file header.json
mongoimport --db portfolio --collection banner --jsonArray --file banner.json
mongoimport --db portfolio --collection aboutMe --jsonArray --file aboutMe.json
mongoimport --db portfolio --collection experience --jsonArray --file experience.json
mongoimport --db portfolio --collection featureProjects --jsonArray --file featureProjects.json
mongoimport --db portfolio --collection contact --jsonArray --file contact.json