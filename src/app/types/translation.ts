import { Language } from './language';

export type Translation = Record<Language, string>;

export type TranslationFile = Record<string, Translation>;
