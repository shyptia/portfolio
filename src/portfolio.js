const header = {
  homepage: 'https://shyptia.github.io/portfolio',
  title: 'AS.',
};

const about = {
  name: 'Anastasiia Shyptia',
  role: 'Full Stack Developer',
  description:
    `Fullstack Developer with a wide list of skills in Web Development. Worked 
    mainly with HTML, CSS, Preprocessors, JS, Typescript, Node.js, and React,
    but I’m also interested in learning other frameworks such as Angular or
    Vue.js, as well as React Native. I have an Upper-Intermediate level in English. I want to work in IT
    because I love coding and solving interesting problems, so I want to make
    web products better with my work. Able to effectively self-manage during
    independent projects, as well as collaborate as part of a productive team.`,
  resume: 'https://drive.google.com/file/d/1F9uukl4ZfPxEM5HFYVWSxjjdQqTooLL1/view',
  social: {
    linkedin: 'https://www.linkedin.com/in/anastasiia-shyptia/',
    github: 'https://github.com/shyptia',
  },
};

const projects = [
  {
    name: 'Todo app',
    image:'/todo_app.png',
    description:
      'You have a handy list of tasks to accomplish. You can easily view all your tasks and even add or remove tasks as needed. Additionally, you have the option to delete all completed tasks at once, making it easy to keep your list organized. Each task can be edited to update its status and name, and you can even mark all tasks as completed with just one click.',
    stack: ['React', 'TypeScript', 'SASS'],
    sourceCode: 'https://github.com/shyptia/todos_app',
    livePreview: 'https://shyptia.github.io/todos_app/',
  },
  {
    name: 'Pokedex',
    image:'./pokedex.png',
    description:
      'When you open the page, a list of twelve charming Pokémons will appear. To discover more of these delightful creatures, simply click the "Load more" button. You can easily view the entire list of Pokémons, and even filter them by type with the click of a button. When you click on a specific card, you\'ll be able to see all sorts of interesting details about that Pokémon.',
    stack: ['React', 'TypeScript', 'Material UI'],
    sourceCode: 'https://github.com/shyptia/pokedex',
    livePreview: 'https://shyptia.github.io/pokedex/',
  },
  {
    name: 'Bose landing',
    image:'./bose.png',
    description:
      'Welcome to the BOSE company landing page! You\'ll find a variety of sections showcasing our amazing products and product categories. We also provide our contact information, so please don\'t hesitate to reach out to us if you have any questions or comments.',
    stack: ['HTML', 'CSS', 'BEM', 'SASS'],
    sourceCode: 'https://github.com/shyptia/bose_landing',
    livePreview: 'https://shyptia.github.io/bose_landing/',
  },
  {
    name: 'Creative bakery',
    image:'./bakery.png',
    description:
      'Welcome to the Creative Bakery landing page! We\'re so happy you\'re here. You\'ll find a wealth of information about our company, including our history, achievements, and all of our delicious products. And if you need to get in touch with us, our contact information is readily available on the website. Thank you for visiting, and we can\'t wait to share our love of baking with you!',
    stack: ['HTML', 'CSS', 'BEM', 'SASS'],
    sourceCode: 'https://github.com/shyptia/creative_bakery',
    livePreview: 'https://shyptia.github.io/creative_bakery/',
  },
];

const skills = [
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'SASS',
  'BEM',
  'Material UI',
  'Git',
  'Node.js',
  'Express',
];

const contact = {
  email: 'anastasiia.shyptia@gmail.com',
};

export { header, about, projects, skills, contact };
