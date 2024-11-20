export const URLS = {
    HOME_PAGE: 'https://evs.com/eu',
    LOGIN_PAGE: 'https://evs.com/member/login',
  };
  
  export const SELECTORS = {
    SEARCH_INPUT: '#search-input',
    LOGIN_BUTTON: '.btn-login',
    USERNAME_FIELD: '#username',
    PASSWORD_FIELD: '#password',
    SUBMIT_BUTTON: '.btn-submit',
  };
  
  export const CREDENTIALS = {
    VALID_USER: {
      USERNAME: 'testuser@example.com',
      PASSWORD: 'Password123',
    },
    INVALID_USER: {
      USERNAME: 'invaliduser@example.com',
      PASSWORD: 'WrongPassword',
    },
  };
  
  export const TIMEOUTS = {
    SHORT: 2000,
    MEDIUM: 5000,
    LONG: 10000,
  };
  