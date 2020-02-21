CC=gcc
CFLAGS=-static -std=gnu17 -O3 -I.
OBJ=atomic_fswap.o 
DEPS=atomic_fswap.h

%.o: %.c $(DEPS)
	$(CC) -c $< $(CFLAGS) -o $@

swap: $(OBJ)
	$(CC) $^ $(CFLAGS) -o $@

clean:
	rm -rf $(OBJ) swap
