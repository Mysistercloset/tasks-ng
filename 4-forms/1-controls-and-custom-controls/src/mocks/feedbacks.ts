export interface IFeedback {
  rateControl: number | null;
  advantages: string;
  limitations: string;
  description: string;
}

export const feedbacks: IFeedback[] = [
  {
    rateControl: null,
    advantages: 'string111111',
    limitations: 'string11111',
    description: 'string11111',
  },
  {
    rateControl: 5,
    advantages: 'string22222',
    limitations: 'string22222',
    description: 'string22222',
  },
  {
    rateControl: 2.8,
    advantages: 'string3333333',
    limitations: 'string333333',
    description: 'string333333',
  },
  {
    rateControl: 4.1,
    advantages: 'string4444444',
    limitations: 'string4444444',
    description: 'string444444',
  },
];
