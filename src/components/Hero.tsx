import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { CheckCircle, Music, Shield, Clock } from 'lucide-react';
import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useLanguage } from './LanguageProvider';

export function Hero() {
  const { t } = useLanguage();
  
  const trustBadges = [
    { icon: Shield, textKey: 'hero.trustBadge1' },
    { icon: Clock, textKey: 'hero.trustBadge2' },
    { icon: CheckCircle, textKey: 'hero.trustBadge3' }
  ];

  return (
    <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-purple-50/30 to-green-50/30 dark:from-purple-950/20 dark:to-green-950/20">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight"
              >
                {t('hero.title')}
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-xl text-muted-foreground leading-relaxed"
              >
                {t('hero.subtitle')}
              </motion.p>
            </div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-500 to-green-500 hover:from-purple-600 hover:to-green-600 text-lg px-8 py-6"
                asChild
              >
                <motion.a
                  href="#pricing"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {t('hero.cta')}
                </motion.a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-primary/30 text-primary hover:bg-primary/10 text-lg px-8 py-6"
                asChild
              >
                <motion.a
                  href="#how-it-works"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {t('hero.learnMore')}
                </motion.a>
              </Button>
            </motion.div>

            {/* Trust Badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-wrap gap-4"
            >
              {trustBadges.map((badge, index) => (
                <motion.div
                  key={badge.textKey}
                  whileHover={{ scale: 1.05 }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1 + index * 0.1 }}
                  className="flex items-center space-x-2 bg-background/80 backdrop-blur-sm rounded-full px-4 py-2 border border-border"
                >
                  <badge.icon className="w-4 h-4 text-accent" />
                  <span className="text-sm font-medium text-foreground">{t(badge.textKey)}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column - Mockup Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <motion.div
              animate={{ 
                y: [0, -10, 0],
                rotateY: [0, 5, 0]
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="relative z-10"
            >
              <Card className="p-6 bg-gradient-to-br from-background to-muted shadow-2xl border-0">
                <CardContent className="p-0 space-y-6">
                  {/* Card Header */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-green-500 rounded-lg flex items-center justify-center">
                        <Music className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">{t('hero.mockup.title')}</h3>
                        <p className="text-sm text-muted-foreground">#SP-2025-001</p>
                      </div>
                    </div>
                    <Badge className="bg-accent/10 text-accent-foreground border-accent/30">
                      {t('hero.mockup.verified')}
                    </Badge>
                  </div>

                  {/* Track Info */}
                  <div className="bg-muted rounded-lg p-4 space-y-3">
                    <div>
                      <h4 className="font-medium text-foreground">{t('hero.mockup.trackTitle')}</h4>
                      <p className="text-sm text-muted-foreground">{t('hero.mockup.artist')}</p>
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-muted-foreground">{t('hero.mockup.genre')}</span>
                        <p className="font-medium">{t('hero.mockup.genreValue')}</p>
                      </div>
                      <div>
                        <span className="text-muted-foreground">{t('hero.mockup.duration')}</span>
                        <p className="font-medium">3:42</p>
                      </div>
                      <div>
                        <span className="text-muted-foreground">{t('hero.mockup.status')}</span>
                        <p className="font-medium text-accent">{t('hero.mockup.statusValue')}</p>
                      </div>
                      <div>
                        <span className="text-muted-foreground">{t('hero.mockup.blockchain')}</span>
                        <p className="font-medium">Ethereum</p>
                      </div>
                    </div>
                  </div>

                  {/* Document Image */}
                  <div className="rounded-lg overflow-hidden">
                    <ImageWithFallback
                      src="https://images.unsplash.com/photo-1715173679369-18006e84d6a8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXNpYyUyMHBhc3Nwb3J0JTIwZG9jdW1lbnQlMjBjZXJ0aWZpY2F0ZXxlbnwxfHx8fDE3NTYzODk0NDJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
                      alt="Song Passport Certificate"
                      className="w-full h-32 object-cover"
                    />
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Background Decoration */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-green-500/10 rounded-3xl transform rotate-3 scale-105 -z-10" />
            <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 to-purple-500/5 rounded-3xl transform -rotate-2 scale-110 -z-20" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}