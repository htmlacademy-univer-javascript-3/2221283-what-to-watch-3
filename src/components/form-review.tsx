import { ChangeEvent, FormEvent, useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../hooks';
import { sendReview } from '../redux/store/api-actions';

export default function FormReview() {
  const params = useParams();
  const navigate = useNavigate();
  const date = new Date();
  const [disabled, setDisabled] = useState(true);
  const [isValidate, setIsValidate] = useState(false);
  const [review, setReview] = useState({
    id: params.id,
    date: date,
    user: '',
    comment: '',
    rating: -1,
  });

  const dispatch = useAppDispatch();

  function handleSubmit(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault();

    if (isValidate){
      dispatch(sendReview({
        comment: review.comment,
        rating: review.rating,
        id: review.id ? review.id : '',
      }));
      navigate(-1);
    }
  }

  useEffect(()=>{
    setDisabled((review.comment === '') || (review.rating === -1));
  },[review.comment, review.rating]);

  useEffect(()=>{
    setIsValidate((review.comment.length >= 50) && (review.comment.length <= 400));
  },[review.comment]);

  function handleText(event: ChangeEvent<HTMLTextAreaElement>): void {
    setReview({...review, comment: event.target.value});
  }

  function handleRating(event: ChangeEvent<HTMLInputElement>): void {
    setReview({...review, rating: parseInt(event.target.value, 10)});
  }

  return (
    <div className="add-review">
      <form onSubmit={handleSubmit} className="add-review__form">
        <div className="rating">
          <div className="rating__stars">
            <input
              className="rating__input"
              id="star-10"
              type="radio"
              name="rating"
              defaultValue={10}
              onChange={handleRating}
            />
            <label className="rating__label" htmlFor="star-10">
          Rating 10
            </label>
            <input
              className="rating__input"
              id="star-9"
              type="radio"
              name="rating"
              defaultValue={9}
              onChange={handleRating}
            />
            <label className="rating__label" htmlFor="star-9">
          Rating 9
            </label>
            <input
              className="rating__input"
              id="star-8"
              type="radio"
              name="rating"
              defaultValue={8}
              onChange={handleRating}
            />
            <label className="rating__label" htmlFor="star-8">
          Rating 8
            </label>
            <input
              className="rating__input"
              id="star-7"
              type="radio"
              name="rating"
              defaultValue={7}
              onChange={handleRating}
            />
            <label className="rating__label" htmlFor="star-7">
          Rating 7
            </label>
            <input
              className="rating__input"
              id="star-6"
              type="radio"
              name="rating"
              defaultValue={6}
              onChange={handleRating}
            />
            <label className="rating__label" htmlFor="star-6">
          Rating 6
            </label>
            <input
              className="rating__input"
              id="star-5"
              type="radio"
              name="rating"
              defaultValue={5}
              onChange={handleRating}
            />
            <label className="rating__label" htmlFor="star-5">
          Rating 5
            </label>
            <input
              className="rating__input"
              id="star-4"
              type="radio"
              name="rating"
              defaultValue={4}
              onChange={handleRating}
            />
            <label className="rating__label" htmlFor="star-4">
          Rating 4
            </label>
            <input
              className="rating__input"
              id="star-3"
              type="radio"
              name="rating"
              defaultValue={3}
              onChange={handleRating}
            />
            <label className="rating__label" htmlFor="star-3">
          Rating 3
            </label>
            <input
              className="rating__input"
              id="star-2"
              type="radio"
              name="rating"
              defaultValue={2}
              onChange={handleRating}
            />
            <label className="rating__label" htmlFor="star-2">
          Rating 2
            </label>
            <input
              className="rating__input"
              id="star-1"
              type="radio"
              name="rating"
              defaultValue={1}
              onChange={handleRating}
            />
            <label className="rating__label" htmlFor="star-1">
          Rating 1
            </label>
          </div>
        </div>
        <div className="add-review__text">
          {!isValidate && (<label htmlFor='review-text'>Comment must be larger then 50, and less then 400</label>)}
          <textarea
            onChange={handleText}
            className="add-review__textarea"
            name="review-text"
            id="review-text"
            placeholder="Review text"
            defaultValue={''}
          />
          <div className="add-review__submit">
            <button disabled={disabled} className="add-review__btn" type="submit">
          Post
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
