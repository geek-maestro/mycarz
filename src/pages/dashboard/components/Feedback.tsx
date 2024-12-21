const Feedback = () => {
  const feedbacks = [
    {
      id: 1,
      name: "Alice Johnson",
      date: "March 15, 2024",
      avatar: "https://i.pravatar.cc/150?img=32",
      comment:
        "The car rental process was smooth, and the vehicle was in excellent condition. Highly recommended!",
    },
    {
      id: 2,
      name: "Robert Brown",
      date: "April 10, 2024",
      avatar: "https://i.pravatar.cc/150?img=47",
      comment:
        "Exceptional service and a great selection of cars. Will definitely rent again!",
    },
    {
      id: 3,
      name: "Emily Davis",
      date: "April 12, 2024",
      avatar: "https://i.pravatar.cc/150?img=20",
      comment:
      "The support team was super helpful, and the car exceeded my expectations!",
    },
    {
      id: 4,
      name: "Michael Wilson",
      date: "May 5, 2024",
      avatar: "https://i.pravatar.cc/150?img=52",
      comment:
        "Quick and efficient service. The car was spotless and ready on time. Great job!",
    },
    {
      id: 5,
      name: "Sophia Martinez",
      date: "May 20, 2024",
      avatar: "https://i.pravatar.cc/150?img=40",
      comment:
        "A fantastic experience! The team was professional, and the car performed perfectly.",
    },
    {
      id: 6,
      name: "James Anderson",
      date: "June 1, 2024",
      avatar: "https://i.pravatar.cc/150?img=33",
      comment:
      "I appreciate the friendly staff and excellent vehicle options. Highly recommend this service.",
    },
    {
      id: 7,
      name: "Isabella Lee",
      date: "June 10, 2024",
      avatar: "https://i.pravatar.cc/150?img=29",
      comment:
        "Wonderful experience! The team went above and beyond to make everything perfect.",
    },
    {
      id: 8,
      name: "Daniel Garcia",
      date: "June 20, 2024",
      avatar: "https://i.pravatar.cc/150?img=12",
      comment:
      "Affordable prices and a hassle-free process. I'll definitely use this service again.",
    },
    {
      id: 9,
      name: "Olivia Clark",
      date: "July 4, 2024",
      avatar: "https://i.pravatar.cc/150?img=38",
      comment:
        "The booking was simple, and the car was in pristine condition. Great service all around!",
    },
  ];

  return (
    <div className="py-8">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-gray-300">
          Feedback from Our Customers
        </h2>
        <p className="text-gray-400 mt-2">
          Hear what our customers have to say about their experience.
        </p>
      </div>
      <div className="carousel carousel-center bg-neutral rounded-box space-x-6 px-4 py-6 w-full">
        {feedbacks.map((feedback) => (
          <div
            key={feedback.id}
            className="carousel-item flex flex-col items-center bg-white shadow-lg rounded-lg p-6 md:p-8 max-w-[280px] mx-auto"
          >
            <div className="flex items-center w-full mb-4">
              <img
                src={feedback.avatar}
                alt={`${feedback.name}'s Avatar`}
                className="w-14 h-14 rounded-full border border-gray-300 mr-4"
              />
              <div>
                <p className="font-semibold text-lg text-gray-800">
                  {feedback.name}
                </p>
                <p className="text-sm text-gray-500">{feedback.date}</p>
              </div>
            </div>
            <p className="text-gray-600 text-center leading-relaxed">
              {feedback.comment}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feedback;
