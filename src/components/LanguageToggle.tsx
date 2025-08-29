import { Button } from './ui/button';
import { useLanguage } from './LanguageProvider';
import { motion } from 'motion/react';

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center space-x-1 bg-muted rounded-lg p-1">
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setLanguage('en')}
        className={`px-3 py-1 text-xs transition-all duration-200 ${
          language === 'en'
            ? 'bg-background text-foreground shadow-sm'
            : 'text-muted-foreground hover:text-foreground'
        }`}
        asChild
      >
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          EN
        </motion.button>
      </Button>
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setLanguage('ru')}
        className={`px-3 py-1 text-xs transition-all duration-200 ${
          language === 'ru'
            ? 'bg-background text-foreground shadow-sm'
            : 'text-muted-foreground hover:text-foreground'
        }`}
        asChild
      >
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          RU
        </motion.button>
      </Button>
    </div>
  );
}