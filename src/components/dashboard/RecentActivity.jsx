function RecentActivity() {
  // Mock activity data
  const activities = [
    {
      id: 1,
      user: "John Doe",
      action: "Created a new task",
      time: "5 mins ago",
      avatar: "J",
    },
    {
      id: 2,
      user: "Sarah Smith",
      action: "Completed project setup",
      time: "2 hours ago",
      avatar: "S",
    },
    {
      id: 3,
      user: "Alex Johnson",
      action: "Updated user settings",
      time: "5 hours ago",
      avatar: "A",
    },
    {
      id: 4,
      user: "Emma Wilson",
      action: "Added new comment",
      time: "Yesterday",
      avatar: "E",
    },
    {
      id: 5,
      user: "Mike Brown",
      action: "Uploaded new files",
      time: "2 days ago",
      avatar: "M",
    },
  ];

  return (
    <div className="bg-white rounded-lg shadow-sm p-6 h-full">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-medium text-gray-800">Recent Activity</h3>
        <button className="text-sm text-accent hover:text-accent-hover font-medium">
          View All
        </button>
      </div>

      <div className="space-y-5">
        {activities.map((activity) => (
          <div key={activity.id} className="flex items-start space-x-3">
            <div className="h-8 w-8 rounded-full bg-accent flex items-center justify-center text-white text-sm font-medium">
              {activity.avatar}
            </div>
            <div>
              <p className="text-sm">
                <span className="font-medium text-gray-800">
                  {activity.user}
                </span>
                <span className="text-gray-600"> {activity.action}</span>
              </p>
              <p className="text-xs text-gray-500">{activity.time}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 pt-4 border-t border-gray-200">
        <button className="w-full py-2 bg-gray-100 hover:bg-gray-200 rounded-lg text-sm font-medium text-gray-700 transition-colors duration-200">
          Load More
        </button>
      </div>
    </div>
  );
}

export default RecentActivity;
