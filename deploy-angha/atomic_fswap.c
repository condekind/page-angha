#include "include/atomic_fswap.h"

int main(int argc, char *argv[])
{
  if (argc != 3)   { printf("Error: Wrong number of arguments\n"); return -1; }
  int path_max = (( PATH_MAX < 1024) ? 1024 : PATH_MAX);
  if (strlen(argv[1]) >= path_max) { printf("Error: Long path\n"); return -1; }
  if (strlen(argv[2]) >= path_max) { printf("Error: Long path\n"); return -1; }
  char f1ap[path_max]; memset(f1ap, 0, path_max); realpath(argv[1], f1ap);
  char f2ap[path_max]; memset(f2ap, 0, path_max); realpath(argv[2], f2ap);
  int fd1 = open(f1ap, O_PATH), fd2 = open(f2ap, O_PATH), err;
  if ((err = renameat2(fd1, f1ap, fd2, f2ap, RENAME_EXCHANGE))) perror("Error");
  close(fd1); close(fd2); return err;
}
