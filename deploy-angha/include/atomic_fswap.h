#ifndef ATOMIC_FSWAP
#define ATOMIC_FSWAP
#define _GNU_SOURCE
#include <stdio.h>
#include <stdlib.h>
#include <limits.h>
#include <string.h>
#include <fcntl.h>
#include <unistd.h>
#ifndef RENAME_EXCHANGE
#define RENAME_EXCHANGE (1 << 1)
#endif
#ifndef PATH_MAX
#define PATH_MAX 1024
#endif
#endif
