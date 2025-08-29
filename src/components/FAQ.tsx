import { useState } from 'react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { ChevronDown, ChevronUp, AlertCircle, Shield } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from './LanguageProvider';

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const { t } = useLanguage();

  const faqs = [
    {
      questionKey: 'faq.question2',
      answerKey: 'faq.answer2',
      important: true
    },
    {
      questionKey: 'faq.question3',
      answerKey: 'faq.answer3',
      important: true
    },
    {
      questionKey: 'faq.question5',
      answerKey: 'faq.answer5',
    },
    {
      questionKey: 'faq.question4',
      answerKey: 'faq.answer4',
    },
    {
      questionKey: 'faq.question6',
      answerKey: 'faq.answer6',
    },
    {
      questionKey: 'faq.question1',
      answerKey: 'faq.answer1',
    }
  ];

  return (
    <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-muted/30 to-background">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            {t('faq.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t('faq.subtitle')}
          </p>
        </motion.div>

        {/* Important Notice */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <Card className="border-2 border-destructive/30 bg-destructive/5">
            <CardContent className="p-6">
              <div className="flex items-start space-x-3">
                <AlertCircle className="w-6 h-6 text-destructive flex-shrink-0 mt-0.5" />
                <div className="space-y-2">
                  <h3 className="font-semibold text-destructive-foreground">{t('faq.importantNotice')}</h3>
                  <p className="text-destructive-foreground">
                    {t('faq.disclaimer')}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.questionKey}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className={`border-2 transition-all duration-300 ${
                openIndex === index 
                  ? 'border-primary/30 shadow-lg' 
                  : 'border-border hover:border-border/60'
              }`}>
                <CardContent className="p-0">
                  <button
                    className="w-full p-6 text-left focus:outline-none focus:ring-2 focus:ring-primary focus:ring-inset"
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <h3 className="font-semibold text-foreground flex-1">
                          {t(faq.questionKey)}
                        </h3>
                        {faq.important && (
                          <Badge className="bg-destructive/10 text-destructive border-destructive/30">
                            {t('faq.importantNotice')}
                          </Badge>
                        )}
                      </div>
                      <motion.div
                        animate={{ rotate: openIndex === index ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <ChevronDown className="w-5 h-5 text-muted-foreground" />
                      </motion.div>
                    </div>
                  </button>

                  <AnimatePresence>
                    {openIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 pt-0">
                          <div className="border-t border-border pt-4">
                            <p className="text-foreground leading-relaxed">
                              {t(faq.answerKey)}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12 space-y-6"
        >
          <div className="inline-flex items-center space-x-3 bg-accent/10 text-accent-foreground px-6 py-3 rounded-full border border-accent/30">
            <Shield className="w-5 h-5" />
            <span className="font-medium">{t('faq.stillHaveQuestions')}</span>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-gradient-to-r from-purple-500 to-green-500 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-green-600 transition-all duration-300"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              {t('faq.contactSupport')}
            </motion.button>
            <motion.a
              href="https://t.me/tiktokproducers"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 border-2 border-primary/30 text-primary font-semibold rounded-lg hover:bg-primary/10 transition-all duration-300 inline-block text-center"
            >
              {t('faq.joinTelegram')}
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}