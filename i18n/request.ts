import {getRequestConfig} from 'next-intl/server';

export default getRequestConfig(async ({locale}) => {
  // Ensure that only the locales that we support are accepted
  if (!['en', 'id'].includes(locale)) {
    return {
      messages: (await import('../messages/en.json')).default
    };
  }

  return {
    messages: (await import(`../messages/${locale}.json`)).default
  };
});
