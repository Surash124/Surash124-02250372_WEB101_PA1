export const currentUser = {
  id: 'me',
  name: 'CST Student',
  handle: 'cst_student',
  avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=cststudent&backgroundColor=b6e3f4',
  verified: false,
};

export const tweets = [
  {
    id: 't1',
    user: {
      name: 'CST News', handle: 'cstnews',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=cstnews&backgroundColor=ffd5dc',
      verified: true,
    },
    content: 'Library is open until 8 PM today. Bring your books and study in a quiet space.',
    image: null,
    timestamp: '1h',
    likes: 160, retweets: 30, replies: 12, views: 1900,
    liked: false, retweeted: false, bookmarked: false,
  },
  {
    id: 't2',
    user: {
      name: 'CST Class', handle: 'cst_class',
      avatar: 'https://static.vecteezy.com/system/resources/previews/030/341/827/non_2x/large-lonely-tree-with-green-natural-leaves-on-the-field-free-photo.jpg',
      verified: true,
    },
    content: 'Tomorrow we have an easy coding lab in room 204. Come at 10 AM and bring your laptop.',
    image: 'https://static.vecteezy.com/system/resources/thumbnails/054/880/166/small_2x/thriving-tree-in-lush-green-environment-nature-conservation-and-protection-concept-free-photo.jpeg',
    timestamp: '3h',
    likes: 220, retweets: 50, replies: 20, views: 3100,
    liked: false, retweeted: true, bookmarked: true,
  },
  {
    id: 't3',
    user: {
      name: 'Study Group', handle: 'study_group',
      avatar: 'https://images.pexels.com/photos/440731/pexels-photo-440731.jpeg?cs=srgb&dl=pexels-%C3%A1kos-szab%C3%B3-440731.jpg&fm=jpg',
      verified: false,
    },
    content: 'Join the study group today after lunch. We will practice easy programming questions together.',
    image: null,
    timestamp: '5h',
    likes: 180, retweets: 40, replies: 15, views: 2500,
    liked: false, retweeted: false, bookmarked: false,
  },
  {
    id: 't4',
    user: {
      name: 'CST Help', handle: 'cst_help',
      avatar: 'https://cdn.pixabay.com/photo/2025/02/04/23/03/fish-9382908_1280.jpg',
      verified: true,
    },
    content: 'Need help? Visit student services in the main hall for simple support and campus advice.',
    image: null,
    timestamp: '9h',
    likes: 250, retweets: 60, replies: 30, views: 3800,
    liked: true, retweeted: false, bookmarked: true,
  },
];

export const trendingTopics = [
  { id: 'tr1', category: 'Campus', topic: '#LibraryOpen', posts: '1.8K' },
  { id: 'tr2', category: 'Class', topic: '#EasyLab', posts: '1.2K' },
  { id: 'tr3', category: 'Students', topic: '#StudyTogether', posts: '900' },
  { id: 'tr4', category: 'Help', topic: '#AskForHelp', posts: '720' },
];

export const whoToFollow = [
  { id: 'wf1', name: 'CST Library', handle: 'cst_library', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=library', verified: false },
  { id: 'wf2', name: 'CST Students', handle: 'cst_students', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=students', verified: false },
  { id: 'wf3', name: 'Help Desk', handle: 'help_desk', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=helpdesk', verified: false },
];

// Utility: format large numbers → "48.2K", "2.1M"
export const formatCount = (n) => {
  if (n >= 1_000_000) return (n / 1_000_000).toFixed(1) + 'M';
  if (n >= 1_000)     return (n / 1_000).toFixed(1)     + 'K';
  return String(n);
};