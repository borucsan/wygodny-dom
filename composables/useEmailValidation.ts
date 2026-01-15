type EmailValidationResult = {
  isValid: boolean;
  hasWarning: boolean;
  message: string | null;
};

type EmailValidationOptions = {
  minLocal: number;
  maxLocal: number;
  emailRegex: RegExp;
  popularDomains: string[];
  message: string;
};

const DEFAULT_EMAIL_VALIDATION_OPTIONS: EmailValidationOptions = {
  minLocal: 3,
  maxLocal: 30,
  emailRegex: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/,
  popularDomains: [
    "gmail.com", "wp.pl", "interia.pl", "o2.pl", "op.pl", "onet.pl", "vp.pl",
    "poczta.onet.pl", "tlen.pl", "interia.eu", "check-mail.org", "ipqualityscore.com",
    "onet.eu", "poczta.fm", "icloud.com", "gazeta.pl", "spoko.pl", "buziaczek.pl",
    "autograf.pl", "hotmail.com", "amorki.pl", "yahoo.com", "outlook.com", "adres.pl",
    "vip.onet.pl", "mail.com", "email.com", "protonmail.com", "live.com",
    "wirtualnapolska.pl", "vip.interia.pl", "epoczta.pl", "poczta.pl", "go2.pl"
  ],
  message: "Upewnij się, że e-mail jest poprawny <br> - wyślemy tam wyniki."
};

const buildEmailValidationOptions = (
  overrides?: Partial<EmailValidationOptions>
): EmailValidationOptions => ({
  ...DEFAULT_EMAIL_VALIDATION_OPTIONS,
  ...overrides,
  popularDomains: overrides?.popularDomains ?? DEFAULT_EMAIL_VALIDATION_OPTIONS.popularDomains
});

const validateEmail = (
  emailAddress: string,
  overrides?: Partial<EmailValidationOptions>
): EmailValidationResult => {
  const options = buildEmailValidationOptions(overrides);
  const message = options.message;

  if (!emailAddress || emailAddress.length === 0) {
    return { isValid: true, hasWarning: false, message: null };
  }

  if (!options.emailRegex.test(emailAddress)) {
    return { isValid: false, hasWarning: false, message };
  }

  const atIndex = emailAddress.indexOf("@");
  if (atIndex === -1) {
    return { isValid: false, hasWarning: false, message };
  }

  const localPart = emailAddress.substring(0, atIndex);
  const domain = emailAddress.substring(atIndex + 1).toLowerCase();

  if (localPart.length < options.minLocal || localPart.length > options.maxLocal) {
    return { isValid: true, hasWarning: true, message };
  }

  if (!options.popularDomains.includes(domain)) {
    return { isValid: true, hasWarning: true, message };
  }

  return { isValid: true, hasWarning: false, message: null };
};

export type { EmailValidationOptions, EmailValidationResult };
export { validateEmail, DEFAULT_EMAIL_VALIDATION_OPTIONS };
