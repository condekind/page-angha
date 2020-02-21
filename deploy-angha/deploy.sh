#!/bin/bash
#=============================================================================#

# trap for exit signals to avoid messing directories
sigbye () {
  exit_code=$?
  STTY=$(stty -g) 
  stty intr undef
  cd $basedir
  stty ${STTY}
  exit $exit_code
}

STTY=$(stty -g)
stty intr undef # Disable interrupts
{
  basedir="$(pwd)"
  trap sigbye INT; trap sigbye QUIT; trap sigbye TERM; trap sigbye EXIT;
}
stty ${STTY} # Reenable interrupts

## Compiling atomic file swap (not portable, see README.md for details)
#[[ ! -f swap ]] || { make swap && exit $?; }

[[ "${basedir##*/}" =~ "deploy-angha" ]] && cd ..
prod=${prod:-0}

if [[ ! $prod -eq 0 ]]; then
	page_dir=/home/www-data/public/cuda.dcc.ufmg.br/public/angha
	[[ -d files ]]                              || exit $?
	[[ -d $page_dir ]]                          || exit $?
  [[ $HOSTNAME == "cuda" ]]                   || exit $?
	npm install                                 || exit $?
	ng build --prod --base-href="/angha/"       || exit $?
	rm -rf                  $page_dir.bkp.d     || exit $?
  mv      dist/page-angha $page_dir.bkp.d     || exit $?
	cp -r files 						$page_dir.bkp.d     || exit $?
	cp .htaccess 						$page_dir.bkp.d     || exit $?

  ## If running a modern kernel: i) comment the moves below and
  ## ii) uncomment the "make swap" above and the swap call below.
  ## Swap the angha directory served by apache with the backup directory
  #./deploy-angha/swap     $page_dir{,.bkp.d}  || exit $? 
  
  # Gambs to please the old kernel
  STTY=$(stty -g)
  stty intr undef # Disable interrupts
  mv $page_dir{,.tmp}
  mv $page_dir{.bkp.d,}
  mv $page_dir{.tmp,.bkp.d}
  stty ${STTY} # Reenable interrups
else
  echo "Generating developer build and starting development server"
  echo "WARNING: do not run this in production!"
	ng build                                    || exit $?
	npx lite-server --baseDir="dist/page-angha" || exit $?
fi

