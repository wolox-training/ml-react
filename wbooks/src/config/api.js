import axios from 'axios';

var instance = axios.create({
  baseURL: 'https://wbooks-api-stage.herokuapp.com/api/v1/',
  timeout: 5000,
  headers: {
    Authorization: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjozNCwidmVyaWZpY2F0aW9uX2NvZGUiOiJxUHg5RHhUa0J6S2IyY0NLZWd5eUh2TlRrZWZQazluMTd5dlVVZjNpZHo3RGJ0Y0ZZc0Y3WVM4ekMxdVdEQXpqIiwicmVuZXdfaWQiOiJjcDR4RzV2ZWQtOXdQOG1XRkFfdEQtS2tmR3NEc3Vib0t6XzZpQVEyRTd5U0h5Z0s3NFdHODF0RFpxd3pqZmJSIiwibWF4aW11bV91c2VmdWxfZGF0ZSI6MTUyMDYyMzUyOSwiZXhwaXJhdGlvbl9kYXRlIjoxNTE4MjA0MzI5LCJ3YXJuaW5nX2V4cGlyYXRpb25fZGF0ZSI6MTUxODA0OTUyOX0.4L7Bhf8yyQU-jn74tEGtzo06_fLUOfn2O85jvAwY78Y'
  }
});

export default instance;
