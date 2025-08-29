import { Button } from './ui/button';
import { ExternalLink, Music, Mail, MessageSquare, Shield, Bitcoin } from 'lucide-react';
import { motion } from 'motion/react';
import { useLanguage } from './LanguageProvider';

export function Footer() {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();

  const links = {
    company: [
      { nameKey: 'footer.aboutUs', href: '#about' },
      { nameKey: 'footer.howItWorks', href: '#how-it-works' },
      { nameKey: 'footer.pricing', href: '#pricing' },
      { nameKey: 'footer.faq', href: '#faq' }
    ],
    legal: [
      { nameKey: 'footer.termsOfService', href: '#terms' },
      { nameKey: 'footer.privacyPolicy', href: '#privacy' },
      { nameKey: 'footer.kycPolicy', href: '#kyc' },
      { nameKey: 'footer.refundPolicy', href: '#refund' }
    ],
    support: [
      { nameKey: 'footer.contactForm', href: '#contact' },
      { nameKey: 'footer.emailSupport', href: 'mailto:cheesecheesson@gmail.com' },
      { nameKey: 'footer.telegramCommunity', href: 'https://t.me/tiktokproducers' },
      { nameKey: 'footer.documentation', href: '#docs' }
    ]
  };

  const cryptoPayments = [
    'Bitcoin (BTC)',
    'Ethereum (ETH)',
    'USDC',
    'USDT',
    'Litecoin (LTC)',
    'Polygon (MATIC)'
  ];

  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 grid lg:grid-cols-5 gap-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-6"
          >
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-green-500 rounded-lg flex items-center justify-center">
                <Music className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold">Song Passport</span>
            </div>

            {/* Description */}
            <p className="text-slate-300 leading-relaxed max-w-md">
              {t('footer.description')}
            </p>

            {/* Crypto Payments */}
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-green-400">
                <Bitcoin className="w-4 h-4" />
                <span className="font-medium">{t('footer.cryptoPaymentsOnly')}</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {cryptoPayments.map((crypto) => (
                  <span
                    key={crypto}
                    className="text-xs bg-slate-800 text-slate-300 px-2 py-1 rounded-full border border-slate-700"
                  >
                    {crypto}
                  </span>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              <Button
                variant="outline"
                size="sm"
                className="border-border text-muted-foreground hover:bg-accent hover:text-accent-foreground hover:border-accent transition-colors"
                asChild
              >
                <motion.a
                  href="mailto:cheesecheesson@gmail.com"
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center space-x-1"
                >
                  <Mail className="w-4 h-4" />
                  <span>{t('footer.email')}</span>
                </motion.a>
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="border-border text-muted-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors"
                asChild
              >
                <motion.a
                  href="https://t.me/tiktokproducers"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center space-x-1"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>{t('footer.telegram')}</span>
                </motion.a>
              </Button>
            </div>
          </motion.div>

          {/* Company Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-4"
          >
            <h3 className="font-semibold text-lg text-white">{t('footer.company')}</h3>
            <ul className="space-y-2">
              {links.company.map((link) => (
                <li key={link.nameKey}>
                  <a
                    href={link.href}
                    className="text-slate-300 hover:text-white transition-colors"
                  >
                    {t(link.nameKey)}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Legal Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            <h3 className="font-semibold text-lg text-white">{t('footer.legal')}</h3>
            <ul className="space-y-2">
              {links.legal.map((link) => (
                <li key={link.nameKey}>
                  <a
                    href={link.href}
                    className="text-slate-300 hover:text-white transition-colors"
                  >
                    {t(link.nameKey)}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Support Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-4"
          >
            <h3 className="font-semibold text-lg text-white">{t('footer.support')}</h3>
            <ul className="space-y-2">
              {links.support.map((link) => (
                <li key={link.nameKey}>
                  <a
                    href={link.href}
                    className="text-slate-300 hover:text-white transition-colors flex items-center space-x-1"
                    {...(link.href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  >
                    <span>{t(link.nameKey)}</span>
                    {link.href.startsWith('http') && <ExternalLink className="w-3 h-3" />}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="border-t border-slate-700 py-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-slate-400 text-sm">
              {t('footer.copyright', { year: currentYear })}
            </div>

            {/* Important Notice */}
            <div className="flex items-center space-x-2 text-sm text-slate-400">
              <Shield className="w-4 h-4 text-green-400" />
              <span>{t('footer.noticeText')}</span>
            </div>

            {/* Business Info */}
            <div className="text-slate-400 text-sm text-center md:text-right">
              <div>{t('footer.serviceProvider')}</div>
              <div>{t('footer.docVerification')}</div>
            </div>
          </div>
        </motion.div>

        {/* Final Disclaimer */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="border-t border-slate-700 py-4 text-center"
        >
          <p className="text-xs text-slate-500 max-w-4xl mx-auto">
            {t('footer.disclaimer')}
          </p>
        </motion.div>
      </div>
    </footer>
  );
}