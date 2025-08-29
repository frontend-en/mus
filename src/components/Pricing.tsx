import { Button } from './ui/button';
import { Card, CardContent, CardHeader } from './ui/card';
import { Badge } from './ui/badge';
import { Check, Bitcoin, Zap } from 'lucide-react';
import { motion } from 'motion/react';
import { useLanguage } from './LanguageProvider';

export function Pricing() {
  const { t } = useLanguage();
  
  const plans = [
    {
      nameKey: 'pricing.singleTrack.name',
      price: '$10',
      crypto: '≈ 0.0003 BTC',
      descriptionKey: 'pricing.singleTrack.description',
      features: [
        'pricing.singleTrack.feature1',
        'pricing.singleTrack.feature2',
        'pricing.singleTrack.feature3',
        'pricing.singleTrack.feature4',
        'pricing.singleTrack.feature5',
        'pricing.singleTrack.feature6'
      ],
      popular: false,
      gradient: 'from-blue-500 to-blue-600'
    },
    {
      nameKey: 'pricing.album.name',
      price: '$29',
      crypto: '≈ 0.001 BTC',
      descriptionKey: 'pricing.album.description',
      features: [
        'pricing.album.feature1',
        'pricing.album.feature2',
        'pricing.album.feature3',
        'pricing.album.feature4',
        'pricing.album.feature5',
        'pricing.album.feature6',
        'pricing.album.feature7'
      ],
      popular: true,
      gradient: 'from-purple-500 to-green-500'
    },
    {
      nameKey: 'pricing.audit.name',
      price: '$299',
      crypto: '≈ 0.01 BTC',
      descriptionKey: 'pricing.audit.description',
      features: [
        'pricing.audit.feature1',
        'pricing.audit.feature2',
        'pricing.audit.feature3',
        'pricing.audit.feature4',
        'pricing.audit.feature5',
        'pricing.audit.feature6',
        'pricing.audit.feature7',
        'pricing.audit.feature8'
      ],
      popular: false,
      gradient: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-muted/50 to-background">
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
            {t('pricing.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            {t('pricing.subtitle')}
          </p>
          
          {/* Crypto Payment Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center space-x-2 bg-destructive/10 text-destructive px-4 py-2 rounded-full border border-destructive/30"
          >
            <Bitcoin className="w-4 h-4" />
            <span className="font-medium">{t('pricing.cryptoOnly')}</span>
          </motion.div>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.nameKey}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="relative"
            >
              <Card className={`h-full border-2 flex flex-col ${plan.popular ? 'border-primary/30 shadow-xl' : 'border-border'} hover:shadow-xl transition-all duration-300`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-gradient-to-r from-purple-500 to-green-500 text-white px-4 py-1">
                      {t('pricing.album.popular')}
                    </Badge>
                  </div>
                )}

                <CardHeader className="text-center pb-4">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className={`w-16 h-16 mx-auto rounded-xl bg-gradient-to-r ${plan.gradient} flex items-center justify-center mb-4`}
                  >
                    <Zap className="w-8 h-8 text-white" />
                  </motion.div>
                  
                  <h3 className="text-2xl font-bold text-foreground">{t(plan.nameKey)}</h3>
                  <p className="text-muted-foreground">{t(plan.descriptionKey)}</p>
                  
                  <div className="space-y-2">
                    <div className="text-4xl font-bold text-foreground">{plan.price}</div>
                    <div className="text-sm text-muted-foreground">{plan.crypto}</div>
                  </div>
                </CardHeader>

                <CardContent className="flex flex-col h-full space-y-6">
                  {/* Features */}
                  <ul className="space-y-3 flex-grow">
                    {plan.features.map((feature, featureIndex) => (
                      <motion.li
                        key={feature}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.5 + featureIndex * 0.1 }}
                        className="flex items-start space-x-3"
                      >
                        <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                        <span className="text-foreground">{t(feature)}</span>
                      </motion.li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <Button
                    className={`w-full mt-auto ${
                      plan.popular
                        ? 'bg-gradient-to-r from-purple-500 to-green-500 hover:from-purple-600 hover:to-green-600 text-white'
                        : 'bg-primary hover:bg-primary/90 text-primary-foreground'
                    }`}
                    size="lg"
                    asChild
                  >
                    <motion.a
                      href="#contact"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {t('pricing.getStarted')}
                    </motion.a>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Bottom Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12 space-y-4"
        >
          <p className="text-muted-foreground">
            {t('pricing.bottomNote')}
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center space-x-2">
              <Bitcoin className="w-4 h-4" />
              <span>{t('pricing.bitcoin')}</span>
            </div>
            <div className="flex items-center space-x-2">
              <span>•</span>
              <span>{t('pricing.ethereum')}</span>
            </div>
            <div className="flex items-center space-x-2">
              <span>•</span>
              <span>{t('pricing.otherCrypto')}</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}