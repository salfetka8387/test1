function validateHhLink(text='') {
  if (typeof text !== 'string') {
    return { isValid: false };
  }
  const regex = /^(?:https?:\/\/)?(?:[\w-]+\.)?hh\.ru\/vacancy\/(\d+)(?:\/?[^\s]*)?$/i;
  const match = text.trim().match(regex);
  if (match) {
    return { isValid: true, vacancyId: match[1], url: match[0] };
  }
  return { isValid: false };
}

function createPrompt(vacancyData, style) {
  const styles = {
    strict: 'Напиши строгое, формальное сопроводительное письмо в деловом стиле. Используй официальный тон, избегай эмоциональных выражений.',
    selling: 'Напиши продающее сопроводительное письмо с акцентом на конкретные достижения, цифры и выгоды для работодателя. Покажи ценность кандидата.',
    creative: 'Напиши креативное сопроводительное письмо с живым, творческим подходом. Используй интересные формулировки, но сохраняй профессионализм.'
  };
  const prompt = `${styles[style] || ''}\n\n**ДАННЫЕ О ВАКАНСИИ:**\nНазвание: ${vacancyData.name}\nКомпания: ${vacancyData.employer.name}\nОписание: ${vacancyData.description || 'Не указано'}\nТребования: ${vacancyData.key_skills ? vacancyData.key_skills.map(s=>s.name).join(', ') : 'Не указано'}\nЗарплата: ${vacancyData.salary ? `${vacancyData.salary.from || ''}-${vacancyData.salary.to || ''} ${vacancyData.salary.currency}` : 'Не указана'}\n\n**ТРЕБОВАНИЯ К ПИСЬМУ:**\n- Длина: 150-250 слов\n- Структура: приветствие, мотивация, соответствие требованиям, заключение\n- Персонализация под конкретную вакансию и компанию\n- Без заголовков и подписи\n- Готовый текст для копирования`;
  return prompt;
}

module.exports = { validateHhLink, createPrompt };
