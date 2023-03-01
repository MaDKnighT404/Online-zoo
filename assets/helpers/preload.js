export const sources = [
  '../../assets/images/pandas.webp',
  '../../assets/images/eagle.webp',
  '../../assets/images/gorilla.webp',
  '../../assets/images/two_toed_sloth.webp',
  '../../assets/images/cheetahs.webp',
  '../../assets/images/penguin.webp',
  '../../assets/images/alligator.webp',
  '../../assets/images/horse.webp',
  '../../assets/images/hyena.webp',
  '../../assets/images/owl.webp',
  '../../assets/images/puma.webp',
  '../../assets/images/wolf.webp',
];

export function preloadImages(sources) {
  for(let source of sources) {
    let img = document.createElement('img');
    img.src = source;

  }
}
