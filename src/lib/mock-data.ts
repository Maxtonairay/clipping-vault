export const mockVideos = [
  {
    id: 'v1',
    title: 'How I Built a $10K/Month Business in 6 Months',
    duration: '47:23',
    date: 'Apr 12, 2026',
    clips: [
      { id: 'c1', title: 'The exact moment I almost quit', duration: '0:42', platform: 'reels' as const, hook: 'Nobody talks about this part...', timestamp: '4:21' },
      { id: 'c2', title: 'The tool that changed everything for me', duration: '0:58', platform: 'tiktok' as const, hook: 'This one app saved me 10 hours a week', timestamp: '12:08' },
      { id: 'c3', title: 'First $10K month — what actually happened', duration: '1:02', platform: 'shorts' as const, hook: 'Month 6. Here\'s what the dashboard looked like.', timestamp: '38:44' },
      { id: 'c4', title: 'Why most people fail in month 3', duration: '0:35', platform: 'reels' as const, hook: 'Month 3 is where 90% of people stop', timestamp: '21:15' },
      { id: 'c5', title: 'The mindset shift that unlocked everything', duration: '0:51', platform: 'tiktok' as const, hook: 'I stopped thinking like an employee when...', timestamp: '29:33' },
    ]
  },
  {
    id: 'v2',
    title: 'Deep Work: How to Focus in a World Full of Distractions',
    duration: '1:12:05',
    date: 'Apr 10, 2026',
    clips: [
      { id: 'c6', title: 'The 2-hour rule I use every morning', duration: '0:47', platform: 'reels' as const, hook: 'Before I open email, I do this for 2 hours', timestamp: '8:30' },
      { id: 'c7', title: 'Why your phone is making you dumber', duration: '1:05', platform: 'tiktok' as const, hook: 'The average person checks their phone 96 times a day', timestamp: '18:22' },
      { id: 'c8', title: 'The flow state trigger nobody uses', duration: '0:39', platform: 'shorts' as const, hook: 'Start with the hardest thing first. Always.', timestamp: '44:11' },
      { id: 'c9', title: 'Cal Newport\'s #1 rule for deep work', duration: '0:55', platform: 'reels' as const, hook: 'Depth is a skill. Here\'s how to build it.', timestamp: '56:40' },
      { id: 'c10', title: 'How I produce 3x more in half the time', duration: '1:12', platform: 'tiktok' as const, hook: '4 hours of focused work beats 8 hours of distracted work', timestamp: '1:02:18' },
    ]
  },
  {
    id: 'v3',
    title: 'Building in Public: My Startup Journey — Month 4 Update',
    duration: '28:47',
    date: 'Apr 8, 2026',
    clips: [
      { id: 'c11', title: 'We hit 500 users — here\'s what worked', duration: '0:48', platform: 'shorts' as const, hook: 'Month 4. 500 users. Zero ad spend.', timestamp: '2:15' },
      { id: 'c12', title: 'The feature we almost shipped (glad we didn\'t)', duration: '0:33', platform: 'reels' as const, hook: 'We built this for 3 weeks and then deleted it', timestamp: '11:40' },
      { id: 'c13', title: 'What churn actually looks like at 500 users', duration: '1:01', platform: 'tiktok' as const, hook: 'Churn is the metric nobody wants to talk about', timestamp: '18:55' },
    ]
  }
];

export const stats = {
  totalVideos: mockVideos.length,
  totalClips: mockVideos.flatMap(v => v.clips).length,
  totalDuration: '2h 28m',
  platforms: { reels: true, tiktok: true, shorts: true }
};
