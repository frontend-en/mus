import { useState } from 'react';
import { Button } from './ui/button';
import { Menu, X, ExternalLink } from 'lucide-react';
import { motion } from 'motion/react';
import { ThemeToggle } from './ThemeToggle';
import { LanguageToggle } from './LanguageToggle';
import { useLanguage } from './LanguageProvider';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useLanguage();

  const navItems = [
    { key: 'header.features', href: '#how-it-works' },
    { key: 'header.pricing', href: '#pricing' },
    { key: 'header.faq', href: '#faq' },
    { key: 'header.contact', href: '#contact' }
  ];

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-2"
          >
            <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-green-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">SP</span>
            </div>
            <span className="text-xl font-semibold text-foreground">Song Passport</span>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.a
                key={item.key}
                href={item.href}
                className="text-muted-foreground hover:text-primary transition-colors"
                whileHover={{ y: -2 }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.3 }}
              >
                {t(item.key)}
              </motion.a>
            ))}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center space-x-4">
            <LanguageToggle />
            <ThemeToggle />
            <Button
              variant="outline"
              size="sm"
              className="border-primary/30 text-primary hover:bg-primary/10"
              asChild
            >
              <motion.a
                href="https://t.me/tiktokproducers"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-1"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 }}
              >
                <ExternalLink className="w-4 h-4" />
                <span>{t('header.telegram')}</span>
              </motion.a>
            </Button>
            <Button
              className="bg-gradient-to-r from-purple-500 to-green-500 hover:from-purple-600 hover:to-green-600"
              size="sm"
              asChild
            >
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7 }}
              >
                {t('header.getStarted')}
              </motion.a>
            </Button>
          </div>

          {/* Mobile menu button and toggles */}
          <div className="md:hidden flex items-center space-x-2">
            <LanguageToggle />
            <ThemeToggle />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6 text-foreground" /> : <Menu className="w-6 h-6 text-foreground" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-border pt-4 pb-6 space-y-4"
          >
            {navItems.map((item) => (
              <a
                key={item.key}
                href={item.href}
                className="block text-muted-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {t(item.key)}
              </a>
            ))}
            <div className="flex flex-col space-y-2 pt-4">
              <Button
                variant="outline"
                size="sm"
                className="border-primary/30 text-primary hover:bg-primary/10"
                asChild
              >
                <a
                  href="https://t.me/tiktokproducers"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-1"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>{t('header.telegram')}</span>
                </a>
              </Button>
              <Button
                className="bg-gradient-to-r from-purple-500 to-green-500 hover:from-purple-600 hover:to-green-600"
                size="sm"
                asChild
              >
                <a href="#contact">{t('header.getStarted')}</a>
              </Button>
            </div>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
}