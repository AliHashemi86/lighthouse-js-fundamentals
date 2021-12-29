let trash = "recycling";
let bins = {
  waste: 4,
  recycling: 3,
  compost: 5
};

function smartGarbage(trash, bins) {
  if (trash === "waste") {
    bins.waste++;
  } else if (trash === "recycling") {
    bins.recycling++;
  } else if (trash === "compost") {
    bins.compost++;
  }
  return bins;
}
console.log(smartGarbage(trash,bins));