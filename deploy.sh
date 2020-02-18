#!/bin/bash

prod=${prod:-0}

if [[ $prod -eq 1 ]]; then
	npm install
	ng build --prod --base-href="/angha/"
	[[ ! $? -eq 0 ]] && exit 1
	cp -r dist/page-angha/* /home/www-data/public/cuda.dcc.ufmg.br/public/angha
	cp -r files 						/home/www-data/public/cuda.dcc.ufmg.br/public/angha
	cp .htaccess 						/home/www-data/public/cuda.dcc.ufmg.br/public/angha
else
	ng build --watch &>/dev/null &
	[[ ! $? -eq 0 ]] && exit 1
	npx lite-server --baseDir="dist/page-angha"
	kill %1
fi
