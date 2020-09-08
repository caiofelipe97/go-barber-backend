interface IMailConfig {
  driver: 'ethereal' | 'ses';
  defaults: {
    from: {
      email: string;
      name: string;
    };
  };
}

export default {
  driver: process.env.MAIL_DRIVER || 'ethereal',

  defaults: {
    from: {
      email: 'caiofelipee17@bomdelivery.dev',
      name: 'Caio Do Bom Delivery',
    },
  },
} as IMailConfig;
