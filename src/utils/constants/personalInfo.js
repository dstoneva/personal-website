const personalInfo = {
  fullName: 'Denitsa Toneva',
  dynamicText: ['Full Stack Developer', 'Engineer', 'Quick Learner'],
  aboutMe: (
    <div>
      I’m a Full Stack Developer based in Sofia with close to 3 years of hands-on experience. <br />
      Currently, I’m working on an IoT platform that enhances street lighting infrastructure through real-time
      monitoring and remote management.
      <br />I enjoy learning new technologies and contributing to meaningful projects in collaborative environments.
    </div>
  ),
  hobbies: [
    {
      label: 'reading',
      emoji: '📖',
    },
    {
      label: 'sports',
      emoji: '🏀',
    },
    {
      label: 'movies',
      emoji: '🎥',
    },
  ],
  email: 'denitza.toneva@gmail.com',
  skills:
    'My professional experience includes building and deploying full-stack applications with ReactJS, TypeScript, NodeJS, and PostgreSQL. I’ve designed user interfaces with React frameworks, integrated Keycloak for authentication, documented APIs with Swagger, and implemented CI/CD pipelines to streamline deployments',
}

export default personalInfo
