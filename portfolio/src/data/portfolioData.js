export const personalInfo = {
  name: 'Jordi Saucedo',
  title: 'Computer Engineer',
  certification: 'AWS Certified Developer – Associate',
  subtitle: 'Specialized in Cloud Architecture, Web Development & Applied Automation',
  bio: 'Computer Engineer and AWS Certified Developer with hands-on experience building scalable web applications, serverless cloud solutions, desktop automation tools, and computer vision systems. Proven leadership coordinating multidisciplinary teams of over 30 people under demanding conditions.',
  cvUrl: 'Jordi_Saucedo_CV.pdf',
  social: {
    github: 'https://github.com/JorshDuck',
    linkedin: 'https://www.linkedin.com/in/jordi-saucedo/',
    whatsapp: 'https://wa.me/59172731388?text=Hello%20Jordi%2C%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20connect%21',
    email: 'mailto:jordi.saucedo.dev@gmail.com',
  },
}

export const aboutHighlights = [
  {
    id: 'problem-solver',
    icon: 'code',
    title: 'Problem Solver',
    text: 'Applying an engineering mindset to dissect complex technical challenges and craft resilient, clean, and scalable software solutions.',
    badge: null,
  },
  {
    id: 'automation-enthusiast',
    icon: 'robot',
    title: 'Automation & Cloud',
    text: 'Architecting serverless cloud pipelines on AWS and designing automated tools to eliminate operational friction and human error.',
    badge: null,
  },
  {
    id: 'team-leadership',
    icon: 'users',
    title: 'Proven Team Leader',
    text: 'Led and coordinated multidisciplinary teams of up to 30 people in high-stress, high-throughput environments, instilling clear communication and decisive execution.',
    badge: 'Key Strength',
  },
]

export const projects = [
  {
    id: 'serverless-media-pipeline',
    title: 'Serverless Document & Media Processing Pipeline',
    tech: ['AWS Lambda', 'Amazon S3', 'API Gateway', 'DynamoDB', 'Python', 'React'],
    category: 'Cloud Architecture · AWS',
    summary: 'Event-driven serverless pipeline designed for automated document ingestion, optical character recognition (OCR), and metadata indexing.',
    problem: 'Manual file processing and legacy monolithic upload servers suffer from high compute idle costs, scaling bottlenecks, and security vulnerabilities during concurrent batch uploads.',
    solution: 'Architected an event-driven serverless pipeline using S3 presigned upload URLs, asynchronous AWS Lambda workers in Python for automated metadata extraction, and Amazon DynamoDB for real-time querying via API Gateway.',
    impact: 'Zero compute idle costs (100% serverless), sub-second metadata retrieval, and infinite auto-scaling capability without server provisioning overhead.',
    github: null, // Temporarily null while under development
    demo: null,
    image: null,
  },
  {
    id: 'vision-guard',
    title: 'VisionGuard – Ergonomic Posture Telemetry Platform',
    tech: ['Computer Vision', 'React', 'MediaPipe', 'Python', 'AWS Lambda', 'DynamoDB'],
    category: 'Computer Vision · Cloud HealthTech',
    summary: 'Real-time edge computer vision telemetry system monitoring desk posture and streaming ergonomic health analytics to the cloud.',
    problem: 'Prolonged poor desk posture causes chronic musculoskeletal strain, but existing commercial solutions require expensive wearables or invasive continuous video recording.',
    solution: 'Engineered an in-browser edge AI pose tracking engine that computes spinal landmark angles at 30 FPS client-side with zero raw video uploaded, streaming aggregated posture telemetry sessions to an AWS serverless storage backend.',
    impact: '100% privacy-compliant edge processing, instant audio feedback alerts, and longitudinal ergonomic health tracking dashboards for remote professionals.',
    github: null,
    demo: null,
    image: null,
  },
  {
    id: 'leadflow-automation',
    title: 'LeadFlow – WhatsApp & Webhook Automation CRM',
    tech: ['Python', 'FastAPI', 'AWS Lambda', 'WhatsApp API', 'Webhooks', 'React'],
    category: 'Event-Driven Systems · Automation',
    summary: 'Real-time lead capture, classification, and conversational workflow automation platform integrated with Meta & WhatsApp Business.',
    problem: 'Businesses lose over 50% of inbound digital leads due to slow response times and disconnected manual follow-up channels across fragmented inboxes.',
    solution: 'Built an event-driven webhook ingestion gateway in Python and AWS Lambda that receives inbound leads 24/7, categorizes prospect intent automatically, and triggers two-way WhatsApp notifications and follow-up sequences.',
    impact: 'Under 5-second lead response time, 100% automated notification dispatch, and unified lead status tracking in an intuitive React dashboard.',
    github: null,
    demo: null,
    image: null,
  },
]

export const skillCategories = [
  {
    id: 'cloud-devops',
    title: 'Cloud & DevOps (AWS Certified)',
    skills: ['AWS Lambda', 'Amazon S3', 'API Gateway', 'DynamoDB', 'CloudFront', 'IAM', 'EC2', 'Serverless'],
  },
  {
    id: 'languages',
    title: 'Languages',
    skills: ['Python', 'JavaScript', 'HTML5', 'CSS3', 'LUA'],
  },
  {
    id: 'frameworks-libraries',
    title: 'Frameworks & Libraries',
    skills: ['React', 'Vite', 'OpenCV', 'PyAutoGUI', 'Tkinter', 'yt-dlp'],
  },
  {
    id: 'tools-platforms',
    title: 'Tools & Technologies',
    skills: ['Git', 'GitHub', 'VS Code', 'AutoHotKey', 'REST APIs', 'DevTools'],
  },
  {
    id: 'soft-skills',
    title: 'Engineering Leadership',
    skills: ['Team Leadership (30+ team members)', 'Problem Solving', 'Strategic Planning', 'Technical Communication', 'Adaptability'],
  },
]
