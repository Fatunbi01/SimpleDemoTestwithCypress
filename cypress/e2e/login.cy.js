// template.spec.js
import LoginPage from '../pages/LoginPage';

describe('template spec', () => {
  const loginPage = new LoginPage();

  it('passes', () => {
    loginPage.login('test', 'test');
  });
});