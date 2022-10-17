hexo.extend.helper.register("count_years", function(item){
    var count = 0
    for (var i = 0; i < item.length; i++) {
        item[i].count = item[i].posts.length;
        count += 1
    }
    return count;
    // ...
  });