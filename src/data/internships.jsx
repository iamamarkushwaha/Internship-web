import frontendImg from '../assets/frontend.jpg';
import javaImg from '../assets/java.png';
import reactImg from '../assets/react.png';
import dataImg from '../assets/data.png';

export const internships = [
  {
    id: '1',
    title: 'Frontend Development Intern',
    company: 'Tech Solutions Inc.',
    location: 'Bangalore, India',
    duration: '3 Months',
    stipend: '₹15,000/month',
    applyBy: '2025-07-15',
    description: 'Join our dynamic software development team to work on cutting-edge web applications. You will be involved in the full software development lifecycle, from design to deployment. This is a great opportunity to gain hands-on experience with modern JavaScript frameworks and build impactful solutions.',
    responsibilities: [
      'Assist in the design, development, and testing of new features.',
      'Write clean, maintainable, and efficient code.',
      'Participate in code reviews and team meetings to ensure code quality.',
      'Help debug and resolve technical issues across different modules.',
      'Learn and apply new technologies as needed to enhance project capabilities.'
    ],
    requirements: [
      'Proficiency in JavaScript, HTML, CSS.',
      'Familiarity with React.js or other modern front-end frameworks (e.g., Vue, Angular).',
      'Basic understanding of data structures and algorithms.',
      'Currently pursuing a degree in Computer Science or a related technical field.',
      'Strong problem-solving skills and meticulous attention to detail.'
    ],
    image: frontendImg // You'll place images in public/assets/
  },
  {
    id: '2',
    title: 'Java Intern',
    company: 'Data Insights Co.',
    location: 'Mumbai, India',
    duration: '6 Months',
    stipend: '₹20,000/month',
    applyBy: '2025-08-01',
    description: 'Work with our data science team on analyzing large datasets to derive actionable insights. You will be responsible for data cleaning, model building, and visualization. Experience with Python and machine learning libraries is a significant plus.',
    responsibilities: [
      'Collect, clean, and preprocess large datasets for analysis.',
      'Develop and implement machine learning models to solve business problems.',
      'Perform statistical analysis and interpret complex results clearly.',
      'Create impactful data visualizations and reports for stakeholders.',
      'Collaborate with engineers to deploy models into production systems.'
    ],
    requirements: [
      'Strong foundation in statistics and linear algebra.',
      'Proficiency in Python (Pandas, NumPy, Scikit-learn, TensorFlow/PyTorch).',
      'Familiarity with SQL databases and data querying.',
      'Experience with data visualization tools (e.g., Matplotlib, Seaborn, Tableau).',
      'Excellent analytical and communication skills for presenting findings.'
    ],
    image: javaImg
  },
  {
    id: '3',
    title: 'React.js Intern',
    company: 'Brand Builders Ltd.',
    location: 'Delhi, India',
    duration: '4 Months',
    stipend: '₹12,000/month',
    applyBy: '2025-07-20',
    description: 'Assist our marketing team in developing and executing digital marketing campaigns. You will gain exposure to SEO, social media marketing, content creation, and analytics. A creative mindset and strong writing skills are essential for this role.',
    responsibilities: [
      'Conduct thorough market research and competitive analysis.',
      'Assist in creating compelling content for social media and blogs.',
      'Support email marketing campaigns from concept to execution.',
      'Analyze campaign performance data and suggest improvements.',
      'Help organize promotional events and online webinars.'
    ],
    requirements: [
      'Excellent written and verbal communication skills.',
      'Familiarity with major social media platforms and current trends.',
      'Basic understanding of marketing principles and strategies.',
      'Ability to work independently and collaboratively as part of a team.',
      'Currently pursuing a degree in Marketing, Business, or Communications.'
    ],
    image: reactImg
  },
  {
    id: '4',
    title: 'UI/UX Design Intern',
    company: 'Creative Studio Co.',
    location: 'Hyderabad, India',
    duration: '5 Months',
    stipend: '₹18,000/month',
    applyBy: '2025-08-10',
    description: 'Work with our design team to create intuitive and aesthetically pleasing user interfaces. You will be involved in user research, wireframing, prototyping, and user testing. A portfolio showcasing your design skills is highly recommended for this position.',
    responsibilities: [
      'Conduct comprehensive user research and usability testing sessions.',
      'Create detailed wireframes, mockups, and interactive prototypes.',
      'Collaborate closely with developers to ensure design implementation fidelity.',
      'Assist in developing and maintaining design systems and style guides.',
      'Present design concepts and solicit constructive feedback from stakeholders.'
    ],
    requirements: [
      'Proficiency in popular design tools (e.g., Figma, Adobe XD, Sketch).',
      'Solid understanding of user-centered design principles.',
      'Ability to create compelling visual designs that are both functional and beautiful.',
      'Strong communication and presentation skills to articulate design decisions.',
      'A portfolio demonstrating relevant design projects and thought process.'
    ],
    image: dataImg
  },
  // {
  //   id: '5',
  //   title: 'Cloud Engineering Intern',
  //   company: 'NextGen Cloud',
  //   location: 'Bengaluru, India',
  //   duration: '6 Months',
  //   stipend: '₹25,000/month',
  //   applyBy: '2025-08-20',
  //   description: 'Gain hands-on experience with cloud platforms (AWS, Azure, GCP). You will assist in deploying, managing, and monitoring cloud-based infrastructure and applications. Knowledge of Linux and scripting is beneficial.',
  //   responsibilities: [
  //     'Assist with cloud resource provisioning and configuration.',
  //     'Monitor cloud infrastructure and respond to alerts.',
  //     'Support automation efforts using scripting languages (e.g., Python, Bash).',
  //     'Learn and apply cloud security best practices.',
  //     'Contribute to documentation of cloud architectures.'
  //   ],
  //   requirements: [
  //     'Basic understanding of cloud computing concepts.',
  //     'Familiarity with Linux operating systems.',
  //     'Experience with one or more scripting languages (Python, Bash).',
  //     'Eagerness to learn about AWS, Azure, or GCP.',
  //     'Strong analytical and troubleshooting skills.'
  //   ],
  //   image: '/assets/cloud-internship.jpg'
  // },
  // {
  //   id: '6',
  //   title: 'Technical Support Intern',
  //   company: 'Global Support Solutions',
  //   location: 'Pune, India',
  //   duration: '3 Months',
  //   stipend: '₹10,000/month',
  //   applyBy: '2025-07-10',
  //   description: 'Provide technical assistance and support to clients experiencing software or hardware issues. You will be the first point of contact, diagnosing problems and providing solutions or escalating as necessary.',
  //   responsibilities: [
  //     'Respond to customer inquiries via phone, email, or chat.',
  //     'Diagnose and troubleshoot technical issues.',
  //     'Document support interactions and resolutions.',
  //     'Escalate complex issues to senior technical staff.',
  //     'Maintain knowledge base articles.'
  //   ],
  //   requirements: [
  //     'Excellent communication and interpersonal skills.',
  //     'Basic understanding of computer systems and networks.',
  //     'Ability to explain technical concepts clearly to non-technical users.',
  //     'Patient and customer-focused attitude.',
  //     'Currently pursuing a degree in IT, Computer Science, or related field.'
  //   ],
  //   image: '/assets/support-internship.jpg'
  // },
];