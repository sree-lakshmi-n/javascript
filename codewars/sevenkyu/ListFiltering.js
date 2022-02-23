/*
* List Filtering
* Takes a list of non-negative integers and strings and returns a new list
* with the strings filtered out.

* */

function filter_list(l) {
  return l.filter((e) => {
    return typeof e != 'string';
  })
}