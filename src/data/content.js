export const navLinks = [
  {
    id: 'about',
    label: 'About',
    href: '#about',
    subLinks: [
      { id: 'history', label: 'GCF Silvino Lubos History', href: '#about' },
      { id: 'pastors', label: 'Pastors', href: '#about' },
      { id: 'doctrine', label: 'Doctrine', href: '#about' },
      { id: 'beliefs', label: 'Beliefs', href: '#about' },
    ],
  },
  {
    id: 'services',
    label: 'Services',
    href: '#services',
    subLinks: [
      { id: 'sunday-worship', label: 'Sunday Worship', href: '#services' },
      { id: 'midweek-prayer', label: 'Midweek Prayer', href: '#services' },
      { id: 'youth-group', label: 'Youth Group', href: '#services' },
      { id: 'bible-study', label: 'Bible Study', href: '#services' },
    ],
  },
  {
    id: 'ministries',
    label: 'Ministries',
    href: '#ministries',
    subLinks: [
      { id: 'children', label: 'Children', href: '#ministries' },
      { id: 'small-groups', label: 'Small Groups', href: '#ministries' },
      { id: 'outreach', label: 'Outreach', href: '#ministries' },
      { id: 'missions', label: 'Missions', href: '#ministries' },
    ],
  },
  {
    id: 'contact',
    label: 'Contact',
    href: '#contact',
    subLinks: [
      { id: 'location', label: 'Location', href: '#contact' },
      { id: 'visit-us', label: 'Visit Us', href: '#contact' },
      { id: 'prayer-requests', label: 'Prayer Requests', href: '#contact' },
      { id: 'email', label: 'Email Team', href: '#contact' },
    ],
  },
  {
    id: 'testimonies',
    label: 'Testimonies',
    href: '#testimonies',
    subLinks: [
      { id: 'life-change', label: 'Life Change Stories', href: '#testimonies' },
      { id: 'healing', label: 'Healing Testimonies', href: '#testimonies' },
      { id: 'youth-voices', label: 'Youth Voices', href: '#testimonies' },
      { id: 'family-stories', label: 'Family Stories', href: '#testimonies' },
    ],
  },
  {
    id: 'members',
    label: 'Members',
    href: '#members',
    subLinks: [
      { id: 'member-care', label: 'Member Care', href: '#members' },
      { id: 'new-believers', label: 'New Believers', href: '#members' },
      { id: 'leadership', label: 'Leadership', href: '#members' },
      { id: 'volunteers', label: 'Volunteer Team', href: '#members' },
    ],
  },
  {
    id: 'giving',
    label: 'Giving',
    href: '#giving',
    subLinks: [
      { id: 'online-giving', label: 'Online Giving', href: '#giving' },
      { id: 'tithes-offerings', label: 'Tithes & Offerings', href: '#giving' },
      { id: 'mission-support', label: 'Mission Support', href: '#giving' },
      { id: 'special-projects', label: 'Special Projects', href: '#giving' },
    ],
  },
]

export const heroContent = {
  badge: 'Join Us This Sunday',
  title: 'Not By Might But By My Spirit',
  description:
    'Greenhills Christian Fellowship invites you to worship, connect, and serve with us. We are a family-focused church committed to sharing faith, hope, and community.',
  primaryButton: { label: 'Service Times', href: '#services' },
  secondaryButton: { label: 'Visit Us', href: '#contact' },
  card: {
    title: 'Weekly Worship',
    description:
      'Join us for inspiring worship, Scripture teaching, and fellowship.',
    items: [
      'Sunday Worship: 8:00 AM - 11:00 AM',
      'Midweek Prayer: Wednesday 6:00 PM',
      'Youth Gathering: Saturday 6:00 PM',
    ],
  },
}

export const aboutSection = {
  id: 'about',
  eyebrow: 'About GCF',
  title: 'Who We Are',
  text:
    'Greenhills Christian Fellowship is a welcoming church family gathered around the Gospel of Jesus Christ. We worship together, disciple one another, and reach out with compassion to our neighborhood and beyond.',
  cards: [
    {
      title: 'Faith',
      description:
        'Building lives on Scripture, centered on Jesus, and empowered by the Holy Spirit.',
    },
    {
      title: 'Community',
      description:
        'Welcoming families, young adults, and seniors into a spiritual home of care and belonging.',
    },
    {
      title: 'Service',
      description:
        'Sharing God\'s love through local outreach, youth ministries, and ministries for every generation.',
    },
  ],
}

export const serviceSection = {
  id: 'services',
  eyebrow: 'Service Times',
  title: 'Worship and Prayer',
  altBackground: true,
  cards: [
    {
      title: 'Sunday Worship',
      description: 'Join us for heartfelt music, Scripture, and a message of hope.',
      time: '8:00 AM - 11:00 AM',
    },
    {
      title: 'Midweek Prayer',
      description: 'Gather with believers for prayer meeting, encouragement, and praying one another.',
      time: 'Wednesday 6:00 PM',
    },
    {
      title: 'Youth Group',
      description: 'Engaging young hearts with fellowship, study, and fun activities.',
      time: 'Saturday 6:00 PM',
    },
    {
      title: 'Youth Camp',
      description: 'A yearly retreat for youth to grow in faith, build friendships, and have fun.',
      time: 'Once a year, dates announced in advance',
    },
    {
      title: 'Prayer mountain',
      description: 'A quarterly gathering for prayer and spiritual growth.',
      time: 'Four times a year, dates announced in advance',
    },
  ],
}

export const ministriesSection = {
  id: 'ministries',
  eyebrow: 'Ministries',
  title: 'Where You Can Serve',
  cards: [
    {
      title: 'Children',
      description: 'Safe, joyful programs for children to learn about God\'s love.',
    },
    {
      title: 'Small Groups',
      description: 'Deepen your faith in groups for study, prayer, and support.',
    },
    {
      title: 'Outreach',
      description:
        'Spreading the Gospel through local service projects, evangelism, and community care.',
    },
  ],
}

export const contactSection = {
  id: 'contact',
  eyebrow: 'Get in Touch',
  title: 'Visit Greenhills Christian Fellowship Silvino Lubos',
  details: [
    'Poblacion 1',
    'Silvino Lubos Northern Samar, 6414',
    'Email: gcfsilvinolubos@gmail.com',
    'Phone: 09300373935',
  ],
  description:
    'We welcome visitors every week. Come as you are for worship, prayer, and fellowship. Meet our pastors, join a small group, or learn more about how you can belong.',
}

export const footerContent = {
  tagline: 'Greenhills Christian Fellowship — Building faith, growing community.',
  copyright: '© 2026 GCF',
}
