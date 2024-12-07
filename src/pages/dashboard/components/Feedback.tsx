const Feedback = () => {
    const feedbacks = [
      {
        id: 1,
        name: "John Doe",
        date: "March 15, 2024",
        avatar: "https://i.pravatar.cc/150?img=32",
        comment:
          "The car rental process was smooth, and the vehicle was in excellent condition. Highly recommended!",
      },
      {
        id: 2,
        name: "Jane Smith",
        date: "April 10, 2024",
        avatar: "https://i.pravatar.cc/150?img=47",
        comment:
          "Exceptional service and a great selection of cars. Will definitely rent again!",
      },
      {
        id: 3,
        name: "Jane Smith",
        date: "April 10, 2024",
        avatar: "https://i.pravatar.cc/150?img=47",
        comment:
          "Exceptional service and a great selection of cars. Will definitely rent again!",
      },
      {
        id: 4,
        name: "Jane Smith",
        date: "April 10, 2024",
        avatar: "https://i.pravatar.cc/150?img=47",
        comment:
          "Exceptional service and a great selection of cars. Will definitely rent again!",
      },
      {
        id: 5,
        name: "Jane Smith",
        date: "April 10, 2024",
        avatar: "https://i.pravatar.cc/150?img=47",
        comment:
          "Exceptional service and a great selection of cars. Will definitely rent again!",
      },
      {
        id: 6,
        name: "Jane Smith",
        date: "April 10, 2024",
        avatar: "https://i.pravatar.cc/150?img=47",
        comment:
          "Exceptional service and a great selection of cars. Will definitely rent again!",
      },
      {
        id: 7,
        name: "Jane Smith",
        date: "April 10, 2024",
        avatar: "https://i.pravatar.cc/150?img=47",
        comment:
          "Exceptional service and a great selection of cars. Will definitely rent again!",
      },
      {
        id: 8,
        name: "Jane Smith",
        date: "April 10, 2024",
        avatar: "https://i.pravatar.cc/150?img=47",
        comment:
          "Exceptional service and a great selection of cars. Will definitely rent again!",
      },
      {
        id: 9,
        name: "Jane Smith",
        date: "April 10, 2024",
        avatar: "https://i.pravatar.cc/150?img=47",
        comment:
          "Exceptional service and a great selection of cars. Will definitely rent again!",
      },
      // Add more feedback items as needed
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
        <div className="carousel carousel-center bg-neutral rounded-box space-x-6 px-4 py-6">
          {feedbacks.map((feedback) => (
            <div
              key={feedback.id}
              className="carousel-item flex flex-col items-center bg-white shadow-lg rounded-lg p-6 md:p-8 max-w-sm mx-auto"
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
  