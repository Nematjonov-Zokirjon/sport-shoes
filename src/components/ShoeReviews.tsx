import { Star } from "lucide-react";

type Review = {
  title: string;
  text: string;
  rating: 4 | 5;
  avatar?: string;
  image?: string;
};

const reviews: Review[] = [
  {
    title: "Good Quality",
    text: "I highly recommend shopping from kicks",
    rating: 5,
    image:
      "https://static.nike.com/a/images/t_web_pw_592_v2/f_auto/28aa9267-92bb-4dc0-a908-63aaa9710781/ZM+VAPOR+16+ACADEMY+FG%2FMG+NU2.png",
  },
  {
    title: "Very Comfortable",
    text: "Perfect shoes for daily use for daily use",
    rating: 4,
    image:
      "https://static.nike.com/a/images/t_web_pw_592_v2/f_auto/28aa9267-92bb-4dc0-a908-63aaa9710781/ZM+VAPOR+16+ACADEMY+FG%2FMG+NU2.png",
  },
  {
    title: "Worth the Price",
    text: "Fast delivery and nice packaging",
    rating: 5,
    image:
      "https://static.nike.com/a/images/t_web_pw_592_v2/f_auto/28aa9267-92bb-4dc0-a908-63aaa9710781/ZM+VAPOR+16+ACADEMY+FG%2FMG+NU2.png",
  },
];

const ShoeReviews = () => {
  return (
    <div >
      <h3 className="mt-4 text-[#1F7A4D] font-bold mb-10 text-2xl lg:text-4xl uppercase">
        Reviews
      </h3>

      <div className="flex gap-6 flex-wrap justify-center">
        {reviews.map((review, index) => (
        <div
  key={index}
  className="rounded-2xl p-6 w-[400px] border border-gray-200 shadow-lg hover:shadow-2xl transition-shadow duration-300"
>
  {/* Top */}
  <div className="flex">
    <div className="w-1/2 text-start">
      <h4 className="text-xl font-bold">{review.title}</h4>
      <p className="text-sm text-gray-600 mt-1">{review.text}</p>

      {/* Stars */}
      <div className="flex gap-1 mt-2">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            size={16}
            className={
              i < review.rating
                ? "fill-yellow-400 text-yellow-400"
                : "text-gray-300"
            }
          />
        ))}
      </div>
    </div>

    <div className="w-1/2 flex items-center justify-end">
      <img
        src="/person.png"
        className="w-[70px] h-full object-contain rounded-2xl"
        alt=""
      />
    </div>
  </div>

  {/* Product Image */}
  {review.image && (
    <img
      src={review.image}
      alt={review.title}
      className="mt-6 w-full h-[180px] object-cover rounded-2xl"
    />
  )}
</div>

        ))}
      </div>
    </div>
  );
};

export default ShoeReviews;
