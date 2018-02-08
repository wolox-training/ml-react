import axios from 'axios';

var instance = axios.create({
  baseURL: 'https://wbooks-api-stage.herokuapp.com/api/v1/',
  timeout: 5000,
  headers: {
    Authorization: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjozNCwidmVyaWZpY2F0aW9uX2NvZGUiOiJxUHg5RHhUa0J6S2IyY0NLZWd5eUh2TlRrZWZQazluMTd5dlVVZjNpZHo3RGJ0Y0ZZc0Y3WVM4ekMxdVdEQXpqIiwicmVuZXdfaWQiOiJWRE1teFAydXFxNzlzaFl6ckdnN242ZWtWM3haeXNoQWNHQ2ZXYk5FYkpreHl2VFFwZmRza3dzbm56ZjZiSFlnIiwibWF4aW11bV91c2VmdWxfZGF0ZSI6MTUyMDQzNjQ2OSwiZXhwaXJhdGlvbl9kYXRlIjoxNTE4MDE3MjY5LCJ3YXJuaW5nX2V4cGlyYXRpb25fZGF0ZSI6MTUxNzg2MjQ2OX0.8eGDtKOA4C5eSwmHH_wMJJGAN73QObzch5ZG20-O3c4'
  }
});

export default instance;
