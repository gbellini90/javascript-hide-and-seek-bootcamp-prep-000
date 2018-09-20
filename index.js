function getFirstSelector(selector){
  const firstSelector=document.querySelector(selector)
  return firstSelector
}

function nestedTarget(){
  const nest=document.getElementById('nested').querySelector('.target')
  return nest
}

function increaseRankBy(n){
  const rank=document.getElementById('app').querySelectorAll('ul.ranked-list')
  for (let i=0;i<rank.length;i++){
    rank[i].innerHTML=(parseInt(rank[i].innerHTML)+n)
  }
  return rank
}

function deepestChild(){
  const child=document.querySelector('#grand-node div div div div')
return child
  }