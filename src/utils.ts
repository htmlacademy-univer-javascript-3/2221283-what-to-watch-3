export function convertRatingToText(rating:number):string{
  let textRating = '';
  if (rating <= 3){
    textRating = 'Bad';
  } else if (rating > 3 && rating <= 5){
    textRating = 'Normal';
  } else if (rating > 5 && rating < 8){
    textRating = 'Good';
  } else if (rating >= 8){
    textRating = 'Very good';
  }
  return textRating;
}

export const convertTime = (time: number) => {
  const hours = Math.floor(time / 60);
  const minutes = time % 60;
  return `${hours}h ${minutes}m`;
};
