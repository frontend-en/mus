import { Card, CardContent } from './ui/card';
import { Upload, FileSearch, Shield, Download } from 'lucide-react';
import { motion } from 'motion/react';
import { useLanguage } from './LanguageProvider';

export function HowItWorks() {
  const { t } = useLanguage();
  
  const steps = [
    {
      icon: Upload,
      titleKey: 'howItWorks.step1.title',
      descriptionKey: 'howItWorks.step1.description',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: FileSearch,
      titleKey: 'howItWorks.step2.title',
      descriptionKey: 'howItWorks.step2.description',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Shield,
      titleKey: 'howItWorks.step3.title',
      descriptionKey: 'howItWorks.step3.description',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Download,
      titleKey: 'howItWorks.step4.title',
      descriptionKey: 'howItWorks.step4.description',
      color: 'from-orange-500 to-orange-600'
    }
  ];

  return (
    <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            {t('howItWorks.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t('howItWorks.subtitle')}
          </p>
        </motion.div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.titleKey}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="relative"
            >
              <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6 text-center space-y-4">
                  {/* Step Number */}
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="w-8 h-8 bg-background border-2 border-border rounded-full flex items-center justify-center shadow-sm">
                      <span className="text-sm font-bold text-foreground">{index + 1}</span>
                    </div>
                  </div>

                  {/* Icon */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.2 }}
                    className={`w-16 h-16 mx-auto rounded-xl bg-gradient-to-r ${step.color} flex items-center justify-center mt-8`}
                  >
                    <step.icon className="w-8 h-8 text-white" />
                  </motion.div>

                  {/* Content */}
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold text-foreground">
                      {t(step.titleKey)}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {t(step.descriptionKey)}
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-border to-transparent transform -translate-y-1/2" />
              )}
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-16"
        >
          <p className="text-muted-foreground mb-6">
            {t('howItWorks.ctaText')}
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-green-500 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-green-600 transition-all duration-300"
            onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
          >
            {t('howItWorks.ctaButton')}
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}