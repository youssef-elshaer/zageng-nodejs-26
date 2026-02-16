function check_lowercase(word) {
  if (word.toLowerCase() == word) {
    return true;
  }
  if (word.toUpperCase() == word) {
    return true;
  }
  return false;
}
check_lowercase("hello");
