const inputs = {
  firstName: {
    name: 'firstName',
    grayoutLabel: 'First Name',
    type: 'text',
    placeholder: 'First Name',
  },
  lastName: {
    name: 'lastName',
    grayoutLabel: 'Last Name',
    type: 'text',
    placeholder: 'Last Name',
  },
  email: {
    name: 'email',
    grayoutLabel: 'Email',
    type: 'email',
    placeholder: 'Email',
  },
  keepAnonymous: {
    name: 'keepAnonymous',
    mainLabel: 'Keep Anonymous?',
  },
  title: {
    name: 'title',
    mainLabel: 'Title',
    type: 'text',
    placeholder: 'Title',
  },
  yourReview: {
    name: 'yourReview',
    mainLabel: 'Your Review',
    type: 'textarea',
    placeholder: 'Your Review',
  },
  pros: {
    name: 'pros',
    mainLabel: 'Pros',
    type: 'textarea',
    placeholder: 'Pros',
  },
  cons: {
    name: 'cons',
    mainLabel: 'Cons',
    type: 'textarea',
    placeholder: 'Cons',
  },
  school: {
    name: 'school',
    mainLabel: 'School',
    placeholder: 'School',
  },
  course: {
    name: 'course',
    mainLabel: 'Course',
    placeholder: 'Course',
  },
  programType: {
    name: 'programType',
    mainLabel: 'Program Type',
    placeholder: 'Program Type',
  },
  location: {
    name: 'location',
    mainLabel: 'Location',
    placeholder: 'Location',
  },
  graduationDate: {
    name: 'graduationDate',
    mainLabel: 'Graduation Date',
    placeholder: 'Graduation Date',
    format: 'mm/dd/yyyy',
  },
  timeToFindJob: {
    name: 'timeToFindJob',
    mainLabel: 'How long did it take you to find a job?',
    grayoutLabel: '(months)',
    type: 'number',
  },
  salary: {
    name: 'salary',
    mainLabel: 'What is your salary (confidential)?',
    grayoutLabel: '($)',
    type: 'number',
  },
};

export default inputs;
