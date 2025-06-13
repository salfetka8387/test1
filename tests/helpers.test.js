const { validateHhLink, createPrompt } = require('../helpers');

test('validateHhLink accepts various hh.ru URLs', () => {
  expect(validateHhLink('https://hh.ru/vacancy/123').isValid).toBe(true);
  expect(validateHhLink('http://m.hh.ru/vacancy/456?query=1').vacancyId).toBe('456');
  expect(validateHhLink('invalid').isValid).toBe(false);
});

test('createPrompt includes vacancy data', () => {
  const vacancy = { name: 'Dev', employer: { name: 'ACME' }, description: '', key_skills: [], salary: null };
  const prompt = createPrompt(vacancy, 'strict');
  expect(prompt).toContain('Dev');
  expect(prompt).toContain('ACME');
});
