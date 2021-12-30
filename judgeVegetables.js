const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
];

const metric = 'redness';

judgeVegetable(vegetables, metric);


function judgeVegetable(vegetables, metric) {
  let maxValue = 0;
  let index = 0;
  for (let i = 0 ; i < vegetables.length; i++) {
    
    if (vegetables[i][metric] > maxValue) {
      index = i; 
      maxValue = vegetables[i][metric];

    }
  }
  return vegetables[index].submitter;
}

console.log(judgeVegetable(vegetables,'redness'));
